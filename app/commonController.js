'use strict';

angular.module('bambaFrontendApp') 
  .controller('commonController', function ($scope) {

    $scope.categories = {
      schedule: {
        name: 'schedule',
        subCategories: {
          'timeline': {
            name: 'timeline'
          },
          'generateur': {
            name: 'generateur'
          },
          'technosphere': {
            name: 'technosphere'
          },
          'chantiers': {
            name: 'chantiers'
          }
        }
      },
      operation: {
        name: 'operation',
        subCategories: {
          'espionnage': {
            name: 'espionnage'
          },
          'attaque': {
            name: 'attaque'
          }
        }
      }
    };

  });