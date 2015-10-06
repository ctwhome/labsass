'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
App.controller('lab-controller', function ($scope, $modal, $log, $http) {


    // Main model
    // Preferences for the main template / tree
    $scope.llqtemplate = {
        title: "Main template",
        isSequential: false,
        "icon": "assets/images/material-icon.png",
        "number": 4,
        "props": {
            "color": "green",
        },
        mainContainer: []
    }


    /**
     * Remove an item in the model
     * @param scope
     */
    $scope.remove = function (scope) {
        scope.remove();
    };

    /**
     * Collapse a container
     * @param scope
     */
    $scope.toggle = function (scope) {
        scope.toggle();
    };


    /**
     * New Element without children, like link or classRoom
     */
    $scope.newElement = function (scope) {

        var node = {
            "type": "element",
            "title": "Element",
            "icon": "assets/images/material-icon.png",
            "number": 4,
            "props": {
                "color": "green",
            },
        }

        if (scope == $scope.llqtemplate.mainContainer) {
            $scope.llqtemplate.mainContainer.push(node);
        }
        // Insert as subItem
        else {
            var nodeData = scope.$modelValue;
            nodeData.nodes.push(node);
        }
    }


    /**
     * Add new container
     * @param scope
     * @param isSequential {boolean}
     * @param inMainTemplate {boolean}
     */
    $scope.newContainer = function (scope, isSequential) {
        var container = {
            "type": "container",
            "isSequential": isSequential,
            "title": "Secuential",
            "icon": "assets/images/material-icon.png",
            "number": 4,
            "props": {
                "color": "green",
            },
            "nodes": []
        }

        //Insert node in main template
        if (scope == $scope.llqtemplate.mainContainer) {
            $scope.llqtemplate.mainContainer.push(container);
        }
        // Insert as subItem
        else {
            var nodeData = scope.$modelValue;
            nodeData.nodes.push(container);
        }
    }
})

/**
 * TemplateContainer directive
 */

    .
    directive('llqTemplateContainer', function ($compile) {
        return {
            restrict: 'E',
            //templateUrl: 'components/lab/container-template.html',
            terminal: true,
            scope: {val: '=', parentData: '='},
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

                scope.deleteMe = function (index) {
                    if (scope.parentData) {
                        var itemIndex = scope.parentData.indexOf(scope.val);
                        scope.parentData.splice(itemIndex, 1);
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
            scope: {val: '='},
            link: function (scope, element, attrs) {

            }
        }
    });


// Directive container