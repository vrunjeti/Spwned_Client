'use strict';

describe('Controller: PlayerpanelCtrl', function () {

  // load the controller's module
  beforeEach(module('spwnedApp'));

  var PlayerpanelCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    PlayerpanelCtrl = $controller('PlayerpanelCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlayerpanelCtrl.awesomeThings.length).toBe(3);
  });
});
