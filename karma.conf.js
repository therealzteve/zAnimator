module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'app/scripts/**/*.js',
      'test/spec/**/*.spec.js'
    ]
  });
};
