'use strict';

describe('Controller: AdminCtrl', function () {

  // load the controller's module
  beforeEach(module('spwnedApp'));

  var AdminCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AdminCtrl = $controller('AdminCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminCtrl.awesomeThings.length).toBe(3);
  });
});
