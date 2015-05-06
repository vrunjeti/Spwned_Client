'use strict';

describe('Controller: RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('spwnedApp'));

  var RegisterCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    RegisterCtrl = $controller('RegisterCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterCtrl.awesomeThings.length).toBe(3);
  });
});
