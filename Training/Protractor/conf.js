// conf.js
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var AllureReporter = require('jasmine-allure-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
    framework: 'jasmine',
 //   seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['development.js'],
    suites : {
        smoke : ['./ChainLocator*.js'],
        sanity : []
    },
    capabilities : {
    //  'browserName' : 'firefox'
   //   'browserName' : 'internet explorer'
        'browserName' : 'chrome'
    },


    // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: './',
    filePrefix: 'xmlresults'
}));
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');
       platform = caps.get('platform');

       var HTMLReport = require('protractor-html-reporter-2');

       testConfig = {
           reportTitle: 'Protractor Test Execution Report',
           outputPath: './',
           outputFilename: 'ProtractorTestReport',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true,
           testPlatform: platform
       };
       new HTMLReport().from('xmlresults.xml', testConfig);
   });
}
  }