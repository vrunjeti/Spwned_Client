'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Player
 * @description
 * # Player
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Player', function () {
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
