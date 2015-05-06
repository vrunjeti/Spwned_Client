'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('MainCtrl', function (Users, $http, $window, $location) {
    // bind vm to 'this'
    var vm = this;

    /**
     * Creates a new user
     * @param  formData.firstName
     * @param  formData.lastName
     * @param  formData.email
     * @param  formData.password
     * @return A success message indicating the user has been registered,
     *         or an error message indicating invalid input
     */
    vm.registerUser = function(formData) {
        Users.registerUser(formData)
        .error(function(data){
            vm.registerErrorMsg = data.data;
        })
        .success(function(data){
            vm.registerMsg = data.message;
        });
    }

    /**
     * Logs a user in
     * @param  formData.email
     * @param  formData.password
     * @return Relevant error messages or authentication token on success (?)
     */
    vm.login = function(formData) {
        Users.login(formData)
        .error(function(data){
            // do something with error message
            vm.loginErrorMsg = data.data;
        })
        .success(function(data){
            // assuming authentication will provide token
            $window.sessionStorage.token = data.token;
            // redirect to games view after logging in
            $location.path('/games');
        });
    }

  });
