'use strict';

describe('Controller: AdminpanelCtrl', function () {

  // load the controller's module
  beforeEach(module('spwnedApp'));

  var AdminpanelCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AdminpanelCtrl = $controller('AdminpanelCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminpanelCtrl.awesomeThings.length).toBe(3);
  });
});
