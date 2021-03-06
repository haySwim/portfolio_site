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
