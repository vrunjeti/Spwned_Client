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
    var url = 'http://45.55.224.229:4000/api/'
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
