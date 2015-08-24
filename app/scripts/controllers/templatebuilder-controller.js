'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # template builder controller
 * Controller of the App
 */

App.controller('templatebuilder-controller', function ($scope) {

    //exxample 1
        var i;
        $scope.itemsList = {
            items1: [],
            items2: []
        };

        for (i = 0; i <= 5; i += 1) {
            $scope.itemsList.items1.push({'Id': i, 'Label': 'Item ' + i});
        }

        for (i = 0; i <= 5; i += 1) {
            $scope.itemsList.items2.push({'Id': i, 'Label': 'Item 2_' + i});
        }
        $scope.sortableOptions = {
            containment: '#sortable-container',
            //restrict move across columns. move only within column.
            //accept: function (sourceItemHandleScope, destSortableScope) {
            //    return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
            //}
        };





    //example 2

    $scope.newitem = '';
    $scope.items = [
        "super", "champagne", "taxi", "hi-fi", "dolby", "bottox", "glamour", "sexy", "crazy"
    ];
    $scope.$watch("items", function(){
        console.log(Math.random());
        var update = document.querySelector('.update');
        update.classList.toggle('flash');
    }, true);

    $scope.removeitem = function(i){
        $scope.items.splice(i,1);
    };

    $scope.additem = function(e){
        $scope.items.unshift($scope.newitem);
        $scope.newitem = '';
        e.preventDefault();
    };
    $scope.capfirst = function(str) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
    };

});
