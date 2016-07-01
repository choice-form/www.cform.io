(function() {
  function greensockModule() {
    'use strict';

    return {
      'default': {
        'Tween': self['TweenLite'],
        'Timeline': self['TimelineLite'],
        'Ease': self['EaseLookup']['find']
      },
      'TweenLite': self['TweenLite'],
      'TimelineLite': self['TimelineLite'],
      'EaseLookup': self['EaseLookup']
    };
  }

  define('greensock', [], greensockModule);
})();
