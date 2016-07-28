(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['ScrollMagic'],
      'SMController': self['ScrollMagic']['Controller'],
      'SMScene': self['ScrollMagic']['Scene']
    };
  }

  define('scrollmagic', [], vendorModule);
})();
