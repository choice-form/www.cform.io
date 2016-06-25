/* jshint node:true */
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // https://github.com/salsify/ember-css-modules
    cssModules: {
      plugins: {
        after: [
          require('postcss-import')({path: './app'}),
          require('postcss-assets')({cachebuster: true, basePath: 'public/'}),
          require('postcss-cssnext')({warnForDuplicates: false}),
          require('lost'),
          require('rucksack-css')({fallbacks: true}),
          require('cssnano')({safe: true}),
          require('postcss-browser-reporter'),
          require('postcss-reporter')({clearMessages: true})
        ]
      }
    },
    outputPaths: {
      app: {
        css: {
          'app': '/assets/bundle.css'
        },
        js: '/assets/bundle.js'
      }
    }
  });

  // Swiper
  app.import({
    development: 'bower_components/Swiper/dist/css/swiper.css',
    production: 'bower_components/Swiper/dist/css/swiper.min.css'
  })
  app.import('bower_components/Swiper/dist/js/swiper.min.js')
  if (app.env === 'development') {
    app.import('bower_components/Swiper/dist/js/maps/swiper.min.js.map')
  }
  app.import('vendor/shims/swiper.js')

  // GSAP
  app.import({
    development: 'bower_components/gsap/src/uncompressed/TweenLite.js',
    production: 'bower_components/gsap/src/minified/TweenLite.min.js'
  })
  app.import('vendor/shims/greensock.js')

  // ScrollMagic
  app.import({
    development: 'bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
    production: 'bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js'
  })
  app.import('bower_components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
  if (app.env === 'development') {
    app.import('bower_components/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
  }
  app.import('vendor/shims/scroll-magic.js')

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
