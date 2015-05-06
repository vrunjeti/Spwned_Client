'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('spwnedApp'));

  var LoginCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    LoginCtrl = $controller('LoginCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginCtrl.awesomeThings.length).toBe(3);
  });
});
