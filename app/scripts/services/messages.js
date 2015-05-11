'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Messages
 * @description
 * # Messages
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Messages', function ($http) {
    var url = 'http://45.55.224.229:4000/api/'
    // Public API here
    return {
      getMessages: function (gameid, userid) {
        return $http.get(url + 'message/g/' + gameid + '/u/' + userid);
      },
      sendMessage: function(gameid, userid, msg) {
      	return $http.post(url + 'message/g/' + gameid + '/u/' + userid, msg);
      },
    };
  });
