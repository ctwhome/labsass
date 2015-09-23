'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
App.controller('lab-controller', function ($scope, $modal, $log, $http) {


    // Get json file
    //$http.get('components/lab/mainTemplateData.json')
    //    .then(function(res){
    //        $scope.mainTemplateData = res.data;
    //        $scope.containers = res.data.containers;
    //    });
    //
    var containers = {
        "mainName": "Main container template",
        "icon": "assets/images/material-icon.png",
        "number": 4,
        "props": {
            "color": "green",
            "isSecuential": true
        },
        "items": [{
            "name": "Container 1",
            "icon": "assets/images/material-icon.png",
            "number": 6,
            "type": "container",
            "props": {
                "color": "blue",
                "isSecuential": true,
                "isCollapsed": true
            },


        },

            {
                "name": "Container 2",
                "icon": "assets/images/material-icon.png",
                "number": 6,
                "type": "container",
                "props": {
                    "color": "blue",
                    "isSecuential": true,
                    "isCollapsed": true
                }
            }


        ]




    };
    $scope.containers = containers;
})

/**
 * TemplateContainer directive
 */

    .directive('llqTemplateContainer', function ($compile) {
        return {
            restrict: 'E',
            //templateUrl: 'components/lab/container-template.html',
            terminal: true,
            scope: { val: '=', parentData:'=' },
            link: function (scope, element, attrs) {
                var template = '<span>{{val.name}}</span>';

                if (angular.isArray(scope.val.items)) {
                    template += '<div class="template-container" ' +
                        'ng-repeat="item in val.items">' +
                        '<template-container-header val="item" scope="holaaa"></template-container-header><hr/>' +
                        '<div class="body" collapse="collapse"></div>' +
                        '<llq-template-container val="item" parent-data="val.items">' +
                        '</llq-template-container></div>';
                }

                scope.deleteMe = function(index) {
                    if(scope.parentData) {
                        var itemIndex = scope.parentData.indexOf(scope.val);
                        scope.parentData.splice(itemIndex,1);
                    }
                    scope.val = {};
                };
                var newElement = angular.element(template);
                $compile(newElement)(scope);
                element.replaceWith(newElement);
            }
        }
    })
    .directive('templateContainerHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/lab/template-container-header.html',
            scope: { val: '=' },
            link: function (scope, element, attrs) {

            }
        }
    });


// Directive container