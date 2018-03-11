// ==UserScript==
// @name         ADBlocker
// @namespace    http://aiellochan.com/
// @version      1.5.1520749561837
// @description  An ADBlocker for front-end engineer!
// @author       Aiello Chan <Aiello.Chan@Gmail.com>
// @match        *://*/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const Rules = {
    "csdn.net": [{
      subHostTest: 'blog',
      processers: [{
        pathTest: '*',
        selectors: [
          '.extension_other.csdn-tracking-statistics.tracking-click',
          '.fixRight_box',
          'body>.csdn-tracking-statistics',
          '#side>.csdn-tracking-statistics',
          '.panel.csdn-tracking-statistics',
          '.main iframe',
          '#nav_show_top_stop>div:first-child'
        ]
      }]
    }],
    "jb51.net": [{
      subHostTest: 'www',
      processers: [{
        pathTest: /(?:article|css)\//,
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
    }],
    "chinaz.com": [{
      subHostTest: 'tool',
      processers: [{
        pathTest: /[Tt]ools\//,
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
      }]
    }],
    "w3school.com.cn": [{
      subHostTest: 'www',
      processers: [{
        pathTest: '*',
        selectors: [
          '#ad_head',
          '#sidebar>div#ad',
          '.adsbygoogle'
        ]
      }]
    }],
    "baidu.com": [{
      subHostTest: 'www',
      processers: [{
        pathTest: /s/,
        selectors: [
          '#content_left>div:not(.result)',
          '#content_left>div:not(.result) *'
        ]
      }]
    },{
      subHostTest: 'zhidao',
      processers: [{
        pathTest: /question\//,
        selectors: [
          '.widget-new-graphic',
          '#union-asplu',
          '#union-asplu + div + div',
          '.cms-slide.cms-slide-lazy.mod-noshadow',
          '.line.qb-section + div'
        ]
      }]
    }],
    "ygdy8.com": [{
      subHostTest: '*',
      processers: [{
        pathTest: '*',
        selectors: [
          'body>a'
        ]
      }]
    }],
    "segmentfault.com": [{
      subHostTest: '',
      processers: [{
        pathTest: /a\//,
        selectors: [
          '.mb25'
        ]
      }]
    }],
    "youku.com": [{
      subHostTest: 'v',
      processers: [{
        pathTest: '*',
        selectors: [
          '.corner-p',
          '.pause-p'
        ]
      }]
    }],
    "cnblogs.com": [{
      subHostTest: 'www',
      processers: [{
        pathTest: /.*?\/p\//,
        selectors: [
          '#cnblogs_c1',
          '#cnblogs_c2'
        ]
      }]
    }]
  };

  const URL = location.href,
    HOST = location.host,
    MAIN_HOST = getMainHost(),
    SUB_HOST = HOST.substr(0, HOST.length - MAIN_HOST.length - 1),
    PATH = location.pathname.substr(1);

  const mainHostRules = Rules[MAIN_HOST];
  if (mainHostRules) {
    mainHostRules.every(function (subHostRules) {
      if(match(subHostRules.subHostTest, SUB_HOST)){
        let processers = subHostRules.processers;

        processers.every(function(hostRules){
          if(match(hostRules.pathTest, PATH)){
            hide(hostRules.selectors);
            return false;
          }
          return true;
        });

        return false;
      }
      return true;
    });
  }
  function match(a,b){return"string"==typeof a?"*"===a?!0:a==b:a instanceof RegExp?a.test(b):!1;}
  function addStyle(b){var a=document.createElement("style"),c=document;c.getElementsByTagName("head")[0].appendChild(a);if(a.styleSheet){a.styleSheet.cssText=b;}else{a.appendChild(c.createTextNode(b));}}
  function hide(a){addStyle(a.join(',')+'{display:none !important;visibility: hidden !important;width:0 !important;height:0 !important;margin:0 !important;padding:0 !important;line-height:0 !important;border:0 !important;z-index:-999 !important;}');}
  function getMainHost(){var o="mh_"+Math.random(),e=new RegExp("(^|;)\\s*"+o+"=12345"),t=new Date(0),n=document.domain,i=n.split("."),c=[];for(c.unshift(i.pop());i.length;){c.unshift(i.pop());var s=c.join("."),u=o+"=12345;domain=."+s;if(document.cookie=u,e.test(document.cookie))return document.cookie=u+";expires="+t,s;}}
})();