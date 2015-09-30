'use strict';

angular.module('jobvacancyApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('offers', {
                parent: 'site',
                url: '/offers',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/offers/offers.html',
                        controller: 'OffersController'
                    }
                },
                resolve: {

                }
            });
    });
