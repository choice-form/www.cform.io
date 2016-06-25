(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['ScrollMagic'] };
  }

  define('ScrollMagic', [], vendorModule);
})();
