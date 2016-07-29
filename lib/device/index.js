module.exports = {
  name: 'device',

  isDevelopingAddon() {
    return true;
  },

  included() {
    this._super.included.apply(this, arguments);

    this.app.import({
      development: this.app.bowerDirectory + '/device.js/lib/device.js',
      production: this.app.bowerDirectory + '/device.js/lib/device.min.js'
    }, { prepend: true });

    this.app.import('vendor/shims/device.js');
  }
};
