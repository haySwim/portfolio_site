/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/projects', {
            templateUrl: 'app/shared/cards/cardView.html',
            controller: 'projectsController'
        }).
            when('/technologies', {
            templateUrl: 'app/shared/cards/cardView.html',
            controller: 'technologiesController'
        }).
            when('/jobs', {
            templateUrl: 'app/shared/cards/cardView.html',
            controller: 'jobsController'
        }).
            when('/schools', {
            templateUrl: 'app/shared/cards/cardView.html',
            controller: 'schoolsController'
        }).
            when('/', {
            templateUrl: 'app/shared/cards/cardView.html',
            controller: 'projectsController'
        }).
            otherwise({
            redirectTo: '/'
        });
    });
}());
