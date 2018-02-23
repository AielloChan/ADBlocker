// ==UserScript==
// @name         ADBlocker
// @namespace    http://aiellochan.com/
// @version      1.2
// @description  An ADBlocker for front-end engineer!
// @author       Aiello Chan <Aiello.Chan@Gmail.com>
// @match        *://*/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

var Rules = {
  "blog.csdn.net": [{
    test: /\/[^/]+?\/article\//,
    selectors: [
      '.extension_other.csdn-tracking-statistics.tracking-click',
      '.fixRight_box'
    ]
  }],
  "www.jb51.net": [{
    test: /\/article\//,
    selectors: [
      '.logom.fl',
      '.logor.fr',
      '.main.mb10.clearfix',
      '.lbd.clearfix',
      '.r300.clearfix.mt10',
      '.r300.clearfix.mt10.mb10',
      '.rFixedBox',
      '#wrapper'
    ]
  }]
};

(function () {
  'use strict';
  var URL = window.location.href,
    HOST = window.location.host,
    PATH = window.location.pathname;

  var rule = Rules[HOST];
  if (rule) {
    rule.forEach(function (part) {
      if (part.test.test(PATH)) {
        Hide(part.selectors);
      }
    });
  }
})();

function addStyle(b){var a=document.createElement("style"),c=document;c.getElementsByTagName("head")[0].appendChild(a);if(a.styleSheet){a.styleSheet.cssText=b;}else{a.appendChild(c.createTextNode(b));}}
function Hide(a){addStyle(a.join(',')+'{display:none !important;}');}