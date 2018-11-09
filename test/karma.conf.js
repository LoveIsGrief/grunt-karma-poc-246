module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '..',

        frameworks: [
            'jasmine',
        ],

        plugins: [
            "karma-jasmine",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-mocha-reporter"
        ],

        reporters: ['mocha'],
        colors: true,
        autoWatch: false,
        singleRun: true,

    });
}
