"use strict";

if (chrome && chrome.storage && chrome.storage.local)
  window.localStorage = chrome.storage.local;
module.exports = require('./lib/soap');
console.debug('localStorage overridden');
