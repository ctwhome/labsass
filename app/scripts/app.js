'use strict';

/**
 * @ngdoc overview
 * @name tempApp
 * @description
 * # tempApp
 *
 * Main module of the application.
 */
var App = angular.module('App', [
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.select',
    'ngSanitize',
    'as.sortable'       // angular sortable
])

.config(function($stateProvider, $urlRouterProvider, uiSelectConfig)
{
    uiSelectConfig.theme = 'bootstrap';

    $stateProvider
        //// available for anybody
        .state('public',{
            url : '/public',
            templateUrl : 'views/public.html'
        })

        // the log-on screen
        .state('login',{
            url : '/login',
            templateUrl: 'views/login-page-template.html',
            controller: 'login-page-controller'
        })

        // just for authenticated
        .state('app',{
            abstract: true,
            //url : '/app',
            // This is the main view
            templateUrl: 'views/main/main-template.html',
            controller: 'main-controller',

            //this property will apply to all children of 'app'
            data : {requireLogin : false }
        })

        .state('app.dashboard',{
            url : '/dashboard',
            views:{
                "":{
                templateUrl: 'views/dashboard-template.html',
                controller: 'dashboard-controller'
                }
            }
        })

        .state('app.templatebuilder',{
            url : '/templatebuilder',
            views:{
                "":{
                    templateUrl: 'views/templatebuilder-template.html',
                    controller: 'templatebuilder-controller'
                }
            }
        })

        .state('app.library',{
            url : '/library',
            views:{
                "":{
                    templateUrl: 'views/library-template.html',
                    controller: 'library-controller'
                }
            }

        }).state('app.lab',{
            url : '/lab',
            views:{
                "":{
                    templateUrl: 'components/lab/lab.template.html',
                    controller: 'lab-controller'
                }
            }
        })

        .state('app.users-admin',{
            url : '/users-admin',
            views:{
                "":{
                    templateUrl: 'views/users-admin-template.html',
                    controller: 'users-admin-controller'
                }
            }
        })

        .state('app.my-profile',{
            url : '/my-profile',
            views:{
                "":{
                    templateUrl: 'views/my-profile-template.html',
                    controller: 'my-profile-controller'
                }
            }
        })

        .state('app.system-settings',{
            url : '/system-settings',
            views:{
                "":{
                    templateUrl: 'views/system-settings-template.html',
                    controller: 'system-settings-controller'
                }
            }
        })

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/lab");
})
    .factory('Auth',function() { return { isLoggedIn : false}; })
    .directive('shakeThat', ['$animate', function($animate) {

        return {
            require: '^form',
            scope: {
                submit: '&',
                submitted: '='
            },
            link: function(scope, element, attrs, form) {
                // listen on submit event
                element.on('submit', function() {
                    // tell angular to update scope
                    scope.$apply(function() {
                        // everything ok -> call submit fn from controller
                        if (form.$valid) return scope.submit();
                        // show error messages on submit
                        scope.submitted = true;
                        // shake that form
                        $animate.addClass(element, 'shake', function() {
                            $animate.removeClass(element, 'shake');
                        });
                    });
                });
            }
        };

    }]);



App.run(function ($rootScope, $state, $location, Auth) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {

        var shouldLogin = toState.data !== undefined
            && toState.data.requireLogin
            && !Auth.isLoggedIn ;

        // NOT authenticated - wants any private stuff
        if(shouldLogin)
        {
            $state.go('login');
            event.preventDefault();
            return;
        }


        // authenticated (previously) comming not to root main
        if(Auth.isLoggedIn)
        {
            var shouldGoToMain = fromState.name === ""
                && toState.name !== "main" ;

            if (shouldGoToMain)
            {
                $state.go('main');
                event.preventDefault();
            }
            return;
        }

        // UNauthenticated (previously) comming not to root public
        var shouldGoToPublic = fromState.name === ""
            && toState.name !== "public"
            && toState.name !== "login" ;


        /**
         * Coment this to avoid the login
         */
        //if(shouldGoToPublic)
        //{
        //    // $state.go('public');
        //    $state.go('login');
        //    event.preventDefault();
        //}

        // unmanaged
    });
});

/**
 * checkstrength
 */
App.directive('checkStrength', function () {

        return {
            replace: false,
            restrict: 'EACM',
            link: function (scope, iElement, iAttrs) {

                var strength = {
                    colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
                    mesureStrength: function (p) {

                        var _force = 0;
                        var _regex = /[$-/:-?{-~!"^_`\[\]]/g;

                        var _lowerLetters = /[a-z]+/.test(p);
                        var _upperLetters = /[A-Z]+/.test(p);
                        var _numbers = /[0-9]+/.test(p);
                        var _symbols = _regex.test(p);

                        var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
                        var _passedMatches = $.grep(_flags, function (el) { return el === true; }).length;


                        _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
                        _force += _passedMatches * 10;

                        // penality (short password)
                        _force = (p.length <= 6) ? Math.min(_force, 10) : _force;

                        // penality (poor variety of characters)
                        _force = (_passedMatches == 1) ? Math.min(_force, 10) : _force;
                        _force = (_passedMatches == 2) ? Math.min(_force, 20) : _force;
                        _force = (_passedMatches == 3) ? Math.min(_force, 40) : _force;

                        return _force;

                    },
                    getColor: function (s) {

                        var idx = 0;
                        if (s <= 10) { idx = 0; }
                        else if (s <= 20) { idx = 1; }
                        else if (s <= 30) { idx = 2; }
                        else if (s <= 40) { idx = 3; }
                        else { idx = 4; }

                        return { idx: idx + 1, col: this.colors[idx] };

                    }
                };

                scope.$watch(iAttrs.checkStrength, function () {
                    if (scope.pw === '') {
                        iElement.css({ "display": "none"  });
                    } else {
                        var c = strength.getColor(strength.mesureStrength(scope.pw));
                        iElement.css({ "display": "inline" });
                        iElement.children('li')
                            .css({ "background": "#DDD" })
                            .slice(0, c.idx)
                            .css({ "background": c.col });
                    }
                });

            },
            template: '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>'
        };

    });