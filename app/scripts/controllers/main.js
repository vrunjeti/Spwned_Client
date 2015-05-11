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
        // console.log(formData);
        Users.registerUser(formData)
        .error(function(data){
            vm.registerErrorMsg = data.data;
        })
        .success(function(data){
            vm.registerMsg = data.message;
            vm.login(formData);
        });
    }

    /**
     * Logs a user in
     * @param  formData.email
     * @param  formData.password
     * @return Relevant error messages or user id on success
     */
    vm.login = function(formData) {
        console.log(formData);
        Users.login(formData)
        .error(function(data){
            // do something with error message
            vm.loginErrorMsg = data.data;
        })
        .success(function(data){
            // store user's id for identification
            $window.sessionStorage.userId = data.data._id;
            // create (what will be) arrays to store admin and player ids
            // $window.sessionStorage.adminKeys = '';
            // $window.sessionStorage.playerKeys = '';
            // clear formData
            vm.formData = {};
            // redirect to games view after logging in
            $location.path('/games');
        });
    }

    /**
     * Gets the data associated with a user account
     * @param  userId
     * @return relevant user data
     */
    vm.getUserAccount = function(userId) {
        Users.getUserAccount(userId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data){

        });
    }

    /**
     * Makes the browser think it's logged in (for testing authentication related classes)
     */
    vm.dummyLogin = function() {
        if(!vm.isLoggedIn()){
            $window.sessionStorage.userId = 'Dummy token for testing purposes';
            // create arrays to store admin and player ids
            // $window.sessionStorage.adminKeys = '';
            // $window.sessionStorage.playerKeys = '';
        }
    }

    /**
     * Boolean to determine if a user is logged in. Used for displaying and hiding nav bar items
     * @return {Boolean} true if user is logged in, false if not
     * @note   Gotta remember De Morgan's Law...
     */
    vm.isLoggedIn = function(){
        return ($window.sessionStorage.userId !== null && $window.sessionStorage.userId !== undefined);
    }

    /**
     * Logs a user out (by deleting session storage) and redirects them to the login page
     */
    vm.logout = function() {
        if(vm.isLoggedIn()){
            // clear session storage (deletes userId)
            $window.sessionStorage.clear();
            // redirect to login page
            $location.path('/login');
        }
    }

  });
