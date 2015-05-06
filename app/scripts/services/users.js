'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Users
 * @description
 * # Users
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Users', function () {
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
