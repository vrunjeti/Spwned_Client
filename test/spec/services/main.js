'use strict';

describe('Service: Main', function () {

  // load the service's module
  beforeEach(module('spwnedApp'));

  // instantiate service
  var Main;
  beforeEach(inject(function (_Main_) {
    Main = _Main_;
  }));

  it('should do something', function () {
    expect(!!Main).toBe(true);
  });

});
