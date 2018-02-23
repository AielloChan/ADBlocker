// ==UserScript==
// @name         ADBlocker
// @namespace    http://aiellochan.com/
// @version      1.4
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
      '.fixRight_box',
      'body>.csdn-tracking-statistics',
      '#side>.csdn-tracking-statistics',
      '.panel.csdn-tracking-statistics',
      '.main iframe'
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
  }],
  "tool.chinaz.com": [{
    test: /\/tools\//,
    selectors: [
      '.fr.topTsRight.ml10',
      '.fr.topTsCenter',
      '.wrapper02.ptb10.ToolsWrapIM.clearfix',
      '.Mnav-right02.fr',
      '.wrapper.mt10>#centerTxt',
      '#centerImg',
      '#toolsIntro',
      '.wrapper.mt10',
      '#container.container'
    ]
  }],
  "www.w3school.com.cn": [{
    test: /.*/,
    selectors: [
      '#ad_head',
      '#sidebar>div#ad',
      '.adsbygoogle'
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
function Hide(a){addStyle(a.join(',')+'{display:none !important;visibility: hidden !important;width:0 !important;height:0 !important;z-index:-999 !important;}');}