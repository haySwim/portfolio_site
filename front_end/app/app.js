/*global angular, $ */

(function () {
    'use strict';
    angular.module('portfolio', [
        'portfolio.header',
        'portfolio.footer',
        'portfolio.navbar',
        'portfolio.jobs',
        'portfolio.projects',
        'portfolio.schools',
        'portfolio.technologies',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/', {
                    navbarName: 'Projects',
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray',
                    resolve: {
                        projectsData: function (portfolioService) {
                            return portfolioService.getPortfolioData('projects');
                        }
                    }

                })
                    .otherwise({
                    redirectTo: '/'
                });
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    // Retrieves api data for the specified resource.
    angular.module('portfolio.service', [])
        .service('portfolioService', ['$http', '$q', function ($http, $q) {
            var API_ENDPOINT = 'http://api.hayswim.com';

            function getPortfolioData(section) {
                var deferred = $q.defer();

                $http.get(API_ENDPOINT + '/' + section)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function () {

                        deferred.resolve({
                            errorMessage: "Connection lost, please reload page or return later."
                        });
                    });
                return deferred.promise;
            }
            return {
                getPortfolioData: getPortfolioData
            };

        }]);
}());

/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.footer', [
        'portfolio.footer.directive'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.header', [
        'portfolio.header.directive',
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.navbar', [
        'portfolio.navbar.directive',
        'portfolio.navbar.controller'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs', [
        'portfolio.jobs.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/jobs', {
                    navbarName: 'Work',
                    priority: 7,
                    templateUrl: 'app/shared/jobs/templates/jobs.html',
                    controller: 'jobsController',
                    controllerAs: 'jobsArray',
                    resolve: {
                        jobsData: function (portfolioService) {
                            return portfolioService.getPortfolioData('jobs');
                        }
                    }
                });
        }]);
}());

/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.projects', [
        'portfolio.projects.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.projects')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/projects', {
                    navbarName: 'Projects',
                    priority: 0,
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray',
                    resolve: {
                        projectsData: function (portfolioService) {
                            return portfolioService.getPortfolioData('projects');
                        }
                    }
                });
        }]);
}());

/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.schools', [
        'portfolio.schools.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.schools')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/schools', {
                    navbarName: 'Education',
                    priority: 3,
                    templateUrl: 'app/shared/schools/templates/schools.html',
                    controller: 'schoolsController',
                    controllerAs: 'schoolsArray',
                    resolve: {
                        schoolsData: function (portfolioService) {
                            return portfolioService.getPortfolioData('schools');
                        }
                    }
                });
        }]);
}());

/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.technologies', [
        'portfolio.technologies.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.technologies')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/technologies', {
                    navbarName: 'Technologies',
                    priority: 1,
                    templateUrl: 'app/shared/technologies/templates/technologies.html',
                    controller: 'technologiesController',
                    controllerAs: 'technologiesArray',
                    resolve: {
                        technologiesData: function (portfolioService) {
                            return portfolioService.getPortfolioData('technologies');
                        }
                    }
                });
        }]);
}());

/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.footer.directive', []).
        directive('portfolioFooter', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/footer/templates/footer.html'
            };
        });
}());

/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.header.directive', []).
        directive('portfolioHeader', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/header/templates/header.html',
            };
        });
}());

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

/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.directive', []).
        directive('portfolioNavbar', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/templates/navbar.html',
                controller: 'navbarController',
                controllerAs: 'routesArray'
            };
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.jobs.controller', [
        'portfolio.service'
    ])
        .controller('jobsController', function (jobsData) {
            var vm = this;
            vm.jobs = jobsData.jobs;
            vm.errorMessage = jobsData.errorMessage;
            vm.startDateSort = function (job) {
                return new Date(job.start_date);
            };
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.projects.controller', [
        'portfolio.service'
    ])
        .controller('projectsController', function (projectsData) {
            var vm = this;
            vm.projects = projectsData.projects;
            vm.error = projectsData.errorMessage;
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.schools.controller', [
        'portfolio.service'
    ]).
        controller('schoolsController', function (schoolsData) {
            var vm = this;
            vm.schools = schoolsData.schools;
            vm.errorMessage = schoolsData.errorMessage;

            // Sort dates numerically.
            vm.startDateSort = function (school) {
                return new Date(school.start_date);
            };
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.technologies.controller', [
        'portfolio.service'
    ])
        .controller('technologiesController', function (technologiesData) {
            var vm = this;
            vm.technologies = technologiesData.technologies;
            vm.errorMessage = technologiesData.errorMessage;
        });
}());
