/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssModules: {
      plugins: [
        require('lost'),
        require('rucksack-css')({fallbacks: true}),
        require('postcss-cssnext')({warnForDuplicates: false}),
        require('postcss-assets')({cachebuster: true, basePath: 'public/'}),
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

  app.import('bower_components/normalize-css/normalize.css')

  return app.toTree()
}
