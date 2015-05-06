'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Messages
 * @description
 * # Messages
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Messages', function () {
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
