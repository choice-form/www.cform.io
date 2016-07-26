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
    'ember-refined-remarkable': {
      theme: 'color-brewer'
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

  return app.toTree()
}
