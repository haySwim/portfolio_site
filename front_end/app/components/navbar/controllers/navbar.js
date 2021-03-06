/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.controller', []).
        controller('navbarController', ['$route', '$scope', function ($route, $scope) {
            var vm = this,
                routeObject = {},
                routesArray = [];
            // Get all named routes besides the root route.
            for (routeObject in $route.routes) {
                if ($route.routes.hasOwnProperty(routeObject)) {
                    if ($route.routes[routeObject].navbarName &&
                            $route.routes[routeObject].originalPath !== '/') {
                        routesArray.push($route.routes[routeObject]);
                    }
                }
            }
            // Add named routes to controller so that nabar 
            // links can be dynamically loaded.
            vm.routes = routesArray;
            $scope.$route = $route;
        }]);
}());
