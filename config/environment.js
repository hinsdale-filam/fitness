/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fitness-progress-app',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' wss://*.firebaseio.com" },
    firebase: null,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.sassOptions = {
    inputFile: 'app.sass',
    includePaths: [
      'bower_components/bootstrap-sass-official/assets/stylesheets'
    ]
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.firebase = 'https://filam-fitness-dev.firebaseio.com/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = 'https://filam-fitness-prod.firebaseio.com/';

  }

  return ENV;
};
