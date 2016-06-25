(function() {
  function TweenLiteModule() {
    'use strict';

    return { 'default': self['TweenLite'] };
  }

  define('TweenLite', [], TweenLiteModule);
})();
