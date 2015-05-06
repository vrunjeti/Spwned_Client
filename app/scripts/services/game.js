'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Game
 * @description
 * # Game
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Game', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
