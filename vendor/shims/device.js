(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['device'] };
  }

  define('device', [], vendorModule);
})();
