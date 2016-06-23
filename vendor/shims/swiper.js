(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['Swiper'] };
  }

  define('swiper', [], vendorModule);
})();
