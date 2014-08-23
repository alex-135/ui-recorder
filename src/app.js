/*jslint nomen: true*/
/*global $,define,require,module */

var recorder = require('./recorder');
var eventsToRecord = require('./events-to-record');
var codeGenerator = require('./code-generator-css');

recorder.init({
    generateCode: codeGenerator.generateCode,
    eventsToRecord: eventsToRecord
});
window.recorderCss = recorder;
module.exports = recorder;