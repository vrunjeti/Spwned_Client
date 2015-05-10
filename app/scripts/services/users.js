'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Users
 * @description
 * # Users
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Users', function ($http) {
    // will set url once API is hosted
    var url = 'http://45.55.224.229:4000/api/';
    return {
      registerUser: function (formData) {
        // console.log(formData);
        return $http.post(url + 'register', {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password
        });
      },
      login: function(formData) {
        console.log(formData);
        return $http.post(url + 'signin', {
          email: formData.email,
          password: formData.password
        });
      },
      getUserAccount: function(userId) {
        return $http.get(url + 'user/' + userId);
      }
    }
  });
