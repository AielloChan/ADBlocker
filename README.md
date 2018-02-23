# ADBlocker

[中文](README.cn.md)

A tampermonkey script for front-end engineer to block AD.

All  `Rules` pull request is **highly welcome**!

## Easy to Use

## Easy to Contribute

If you have a new rule, e.g. [Mobile baidu](https://m.baidu.com/).

We want to block all the **fluent news**.

Use `Chrome Developer Tools` we got the **fluent news'** style class `.blank-frame`.

In script, we just add a rule:

```javascript
"m.baidu.com": [{
  test: /^\/$/,
  selectors: [
    '.blank-frame'
  ]
}]
```

That's all.

## Rules API

**Rules** is a Object, which keys are host and value is a rule array. 

In rule array, each item is a specific rule in this host.

`test` is a regular expression, `selectors` is an array, each item is a query selector for your target AD in this page.