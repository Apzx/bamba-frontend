'use strict';

angular.module('bambaFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

angular.module('bambaFrontendApp').config(function ($stateProvider, $locationProvider) {
    $stateProvider

      .state('schedule', {
        url: '^/schedule',
        templateUrl: 'schedule/schedule.tmpl',
        controller: 'scheduleController'
      })
      .state('schedule.timeline', {
        url: '^/schedule/timeline',
        templateUrl: 'schedule/timeline/timeline.tmpl',
        controller: 'timelineController'
      })
      .state('schedule.generateur', {
        url: '^/schedule/generateur',
        templateUrl: 'schedule/generateur/generateur.tmpl',
        controller: 'generateurController'
      })
      .state('schedule.technosphere', {
        url: '^/schedule/technosphere',
        templateUrl: 'schedule/technosphere/technosphere.tmpl',
        controller: 'technosphereController'
      })
      .state('schedule.chantiers', {
        url: '^/schedule/chantiers',
        templateUrl: 'schedule/chantiers/chantiers.tmpl',
        controller: 'chantiersController'
      })

      .state('operation', {
        url: '^/operation',
        templateUrl: 'operation/operation.tmpl',
        controller: 'scheduleController'
      })
      .state('operation.attaque', {
        url: '^/operation/attaque',
        templateUrl: 'operation/attaque/attaque.tmpl',
        controller: 'attaqueController'
      })
      .state('operation.espionnage', {
        url: '^/operation/espionnage',
        templateUrl: 'operation/espionnage/espionnage.tmpl',
        controller: 'espionnageController'
      });

      // $locationProvider.html5Mode(true);
      $locationProvider.html5Mode(false);
  });

angular.module('bambaFrontendApp').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.previousState = fromState.name;
      $rootScope.currentState = toState.name;
      fromParams = fromParams; // Fuck you jshint
    });
  }]);