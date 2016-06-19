/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // https://github.com/salsify/ember-css-modules
    cssModules: {
      plugins: {
        before: [
          require('postcss-import')({path: './app'}),
          require('postcss-assets')({cachebuster: true, basePath: 'public/'})
        ],
        after: [
          require('lost'),
          require('postcss-cssnext')({warnForDuplicates: false}),
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
