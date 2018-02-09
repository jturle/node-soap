"use strict";

if (window.chrome && window.chrome.storage && window.chrome.storage.local)
  window.localStorage = chrome.storage.local;
module.exports = require('./lib/soap');
console.debug('localStorage overridden');
