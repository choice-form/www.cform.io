/* jshint node:true */
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssModules: {
      plugins: [
        require('postcss-import')({path: './app/styles'}),
        require('postcss-assets')({cachebuster: true, basePath: 'public/'}),
        require('postcss-cssnext')({warnForDuplicates: false}),
        require('rucksack-css')({fallbacks: true}),
        require('lost'),
        require('cssnano')({safe: true}),
        require('postcss-browser-reporter'),
        require('postcss-reporter')({clearMessages: true})
      ]
    },
    outputPaths: {
      app: {
        css: {'app': '/assets/bundle.css'},
        js: '/assets/bundle.js'
      }
    }
  })

  // Normalize.css
  app.import('bower_components/normalize-css/normalize.css')

  // Swiper
  app.import({
    development: 'bower_components/Swiper/dist/css/swiper.css',
    production: 'bower_components/Swiper/dist/css/swiper.min.css'
  })
  app.import('bower_components/Swiper/dist/js/swiper.min.js')
  app.import('vendor/shims/swiper.js')

  // GSAP
  app.import({
    development: 'bower_components/gsap/src/uncompressed/TweenLite.js',
    production: 'bower_components/gsap/src/minified/TweenLite.min.js'
  })
  app.import({
    development: 'bower_components/gsap/src/uncompressed/TimelineLite.js',
    production: 'bower_components/gsap/src/minified/TimelineLite.min.js'
  })
  app.import({
    development: 'bower_components/gsap/src/uncompressed/easing/EasePack.js',
    production: 'bower_components/gsap/src/minified/easing/EasePack.min.js'
  })
  app.import({
    development: 'bower_components/gsap/src/uncompressed/plugins/CSSPlugin.js',
    production: 'bower_components/gsap/src/minified/plugins/CSSPlugin.min.js'
  })
  app.import({
    development: 'bower_components/gsap/src/uncompressed/plugins/ScrollToPlugin.js',
    production: 'bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js'
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
  app.import('vendor/shims/scrollmagic.js')

  // Remarkable
  app.import({
    development: 'bower_components/remarkable/dist/remarkable.js',
    production: 'bower_components/remarkable/dist/remarkable.min.js'
  })
  app.import('vendor/shims/remarkable.js')

  // highlight.js
  app.import('vendor/highlight.js/highlight.pack.js')
  app.import('vendor/highlight.js/styles/github.css')
  app.import('vendor/shims/highlight.js')

  return app.toTree()
}
