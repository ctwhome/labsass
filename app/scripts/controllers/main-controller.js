'use strict';

/**
 * @ngdoc function
 * @name App.controller:SettingspaneCtrl
 * @description
 * # SettingspaneCtrl
 * Controller of the App
 */
App.controller('main-controller', function ($scope, $location) {

    // set on the menu
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return "active"
        } else {
            return ""
        }
    }

    $scope.toggleSidebar = function () {
        $scope.toggleState = !$scope.toggleState
    }

});
