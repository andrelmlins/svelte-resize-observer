# Svelte Resize Observer

[![npm version](https://badge.fury.io/js/svelte-resize-observer.svg)](https://www.npmjs.com/package/svelte-resize-observer) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-resize-observer/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-resize-observer.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-resize-observer) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-resize-observer.svg)](https://david-dm.org/andrelmlins/svelte-resize-observer) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/a16b6807-8f05-4e03-8ed4-33e5162155bb/deploy-status)](https://app.netlify.com/sites/svelte-resize-observer/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-resize-observer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-resize-observer/context:javascript)

Element resize observer to Svelte

## Installation

```
npm i svelte-resize-observer
// OR
yarn add svelte-resize-observer
```

## Demo [Link](https://svelte-resize-observer.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-resize-observer.git
cd svelte-resize-observer/example
yarn install && yarn start
```

## Examples

```js
<script>
  import SvelteResizeObserver from "svelte-resize-observer";
</script>

<style>
  div {
    width: 400px;
    height: 400px;
  }
</style>

<div>
  <SvelteResizeObserver on:resize={(e) => console.log(e.detail.target)} />
</div>
```

## Properties

Raw component props (before transform):

| Prop          | Type | Description            |
| ------------- | ---- | ---------------------- |
| elementResize | node | Element to bind resize |
| resize        | func | Call with resize       |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-resize-observer.png)](https://nodei.co/npm/svelte-resize-observer/)

## License

Svelte Resize Observer is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-resize-observer/blob/master/LICENSE).
