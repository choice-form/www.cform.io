module.exports = {
  name: 'scrollmagic',

  isDevelopingAddon() {
    return true;
  },

  included() {
    this._super.included.apply(this, arguments);

    const path = '/scrollmagic/scrollmagic';

    this.app.import({
      development: this.app.bowerDirectory + path + '/uncompressed/ScrollMagic.js',
      production: this.app.bowerDirectory + path + '/minified/ScrollMagic.min.js'
    });

    this.app.import({
      development: this.app.bowerDirectory + path + '/uncompressed/plugins/debug.addIndicators.js'
    });

    this.app.import('vendor/shims/scrollmagic.js');
  }
};
