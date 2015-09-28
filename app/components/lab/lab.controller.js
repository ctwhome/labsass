'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
App.controller('lab-controller', function ($scope, $modal, $log, $http) {


    $scope.remove = function (scope) {
        scope.remove();
    };

    $scope.toggle = function (scope) {
        scope.toggle();
    };

    $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
        });
    };


    $scope.newSeqContainer = function (scope) {


        var nodeData = scope.$modelValue;

        // Add the node
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
        });

        //create placeholder

        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: 'placeholder',
            nodes: []
        });


        //$scope.newSubItem(scope);


    }

    $scope.trees =
    {
        //Preferences for the main template / tree
        title: "Main template",
        nodes: [
            {
                titleTree: 'tree 1',

                // id this exists, create a new tree in the horizontal
                trees:{
                    titleTree: 'Placeholder',
                    nodes: []
                },
                nodes: [
                    {
                        'id': 1,
                        'title': 'tree1 - item1',
                        'nodes': []
                    },
                    {
                        'id': 2,
                        'title': 'tree1 - item2',
                        'nodes': [

                            {
                                titleTree: 'Placeholder',
                                nodes: []
                            },
                            //{
                            //    'id': 1,
                            //    'title': 'subtree1.1 - item1',
                            //    'nodes': []
                            //},
                            //{
                            //    'id': 2,
                            //    'title': 'subtree1.2 - item2',
                            //    'nodes': []
                            //}

                        ]
                    }
                ]
            },



            {
                titleTree: 'Placeholder',
                nodes: []
            }
        ]
    }


//============================================================================

//
//$scope.list = [{
//    "id": 1,
//    "title": "1. dragon-breath",
//    "mainName": "Main container template",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": []
//}, {
//    "id": 2,
//    "title": "2. moiré-vision",
//    "name": "Name",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": [{
//        "id": 21,
//        "title": "2.1. tofu-animation",
//        "name": "Name",
//        "icon": "assets/images/material-icon.png",
//        "number": 4,
//        "props": {
//            "color": "green",
//            "isSecuential": true
//        },
//        "items": [{
//            "id": 211,
//            "title": "2.1.1. spooky-giraffe",
//            "name": "Name",
//            "icon": "assets/images/material-icon.png",
//            "number": 4,
//            "props": {
//                "color": "green",
//                "isSecuential": true
//            },
//            "items": []
//        }, {
//            "id": 212,
//            "title": "2.1.2. bubble-burst",
//            "name": "Name",
//            "icon": "assets/images/material-icon.png",
//            "number": 4,
//            "props": {
//                "color": "green",
//                "isSecuential": true
//            },
//            "items": []
//        }],
//    }, {
//        "id": 22,
//        "title": "2.2. barehand-atomsplitting",
//        "name": "Name",
//        "icon": "assets/images/material-icon.png",
//        "number": 4,
//        "props": {
//            "color": "green",
//            "isSecuential": true
//        },
//        "items": []
//    }],
//}, {
//    "id": 3,
//    "title": "3. unicorn-zapper",
//    "name": "Name",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": []
//}, {
//    "id": 4,
//    "title": "4. romantic-transclusion",
//    "name": "Name",
//    "icon": "assets/images/material-icon.png",
//    "number": 4,
//    "props": {
//        "color": "green",
//        "isSecuential": true
//    },
//    "items": []
//}];
//
//
//$scope.selectedItem = {};
//
//$scope.options = {
//};
//
//$scope.remove = function(scope) {
//    scope.remove();
//};
//
//$scope.toggle = function(scope) {
//    scope.toggle();
//};
//
//$scope.newSubItem = function(scope) {
//    var nodeData = scope.$modelValue;
//    nodeData.items.push({
//        id: nodeData.id * 10 + nodeData.items.length,
//        title: nodeData.title + '.' + (nodeData.items.length + 1),
//        items: []
//    });
//};


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
                },
                "items": [{
                    "name": "Container 2",
                    "icon": "assets/images/material-icon.png",
                    "number": 6,
                    "type": "container",
                    "props": {
                        "color": "blue",
                        "isSecuential": true,
                        "isCollapsed": true
                    },
                    "items": [{
                        "name": "Container 2",
                        "icon": "assets/images/material-icon.png",
                        "number": 6,
                        "type": "container",
                        "props": {
                            "color": "blue",
                            "isSecuential": true,
                            "isCollapsed": true
                        }
                    }]
                }]
            }
        ]
    };
    $scope.containers = containers;
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