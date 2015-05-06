'use strict';

describe('Controller: KillsCtrl', function () {

  // load the controller's module
  beforeEach(module('spwnedApp'));

  var KillsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    KillsCtrl = $controller('KillsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KillsCtrl.awesomeThings.length).toBe(3);
  });
});
