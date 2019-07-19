// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const { ProtractorScreenshotExtension } = require('protractor-screenshot-extension');

const screenshotReporter = new HtmlScreenshotReporter({
    dest: `${__dirname}/screenshots/reports`,
    filename: 'summary.html',
    captureOnlyFailedSpecs: true,
    inlineImages: true,
    reportFailedUrl: true
});

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './src/**/*.e2e-spec.ts'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            useAutomationExtension: false,
            args: ['--disable-web-security', '--no-sandbox', '--headless', '--hide-scrollbars', '--disable-gpu']
        }
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        // Add screenshot reporter for failed tests.
        jasmine.getEnv().addReporter(screenshotReporter);

        browser.screenshotExtension = new ProtractorScreenshotExtension(`${__dirname}/screenshots`);
    }
};