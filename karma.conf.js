module.exports = function(config) {
    config.set({
        frameworks: ["mocha","karma-typescript"],
        files: [
            "EaselJS-0.8.2/lib/easeljs-0.8.2.combined.js",
            "app_ts/**/*.ts" // *.tsx for React Jsx
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: [ "spec"],
        browsers: ["Chrome"]
    });
};
