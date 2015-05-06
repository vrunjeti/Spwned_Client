'use strict';

describe('Controller: MessagesCtrl', function () {

  // load the controller's module
  beforeEach(module('spwnedApp'));

  var MessagesCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    MessagesCtrl = $controller('MessagesCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MessagesCtrl.awesomeThings.length).toBe(3);
  });
});
