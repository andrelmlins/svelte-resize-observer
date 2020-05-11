# Svelte Resize Observer

[![npm version](https://badge.fury.io/js/svelte-resize-observer.svg)](https://www.npmjs.com/package/svelte-resize-observer) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-resize-observer/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-resize-observer.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-resize-observer) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/fbeb8033-5f7e-47cb-83e0-0fc7e89ad54b/deploy-status)](https://app.netlify.com/sites/svelte-resize-observer/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-resize-observer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-resize-observer/context:javascript)

Element resize observer to Svelte

## Installation

```
npm i svelte-resize-observer
// OR
yarn add svelte-resize-observer
```

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Demo [Link](https://svelte-resize-observer.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-resize-observer.git
cd svelte-resize-observer
yarn install && yarn start
```

## Examples

An example of how to use the library:

```js
<script>
  import ResizeObserver from "svelte-resize-observer";
</script>

<style>
  div {
    width: 400px;
    height: 400px;
  }
</style>

<div>
  <ResizeObserver on:resize={(e) => console.log(e.detail.target)} />
</div>
```

## Properties

Component props:

| Prop          | Type | Description            |
| ------------- | ---- | ---------------------- |
| elementResize | node | Element to bind resize |
| resize        | func | Call with resize       |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-resize-observer.png)](https://nodei.co/npm/svelte-resize-observer/)

## License

Svelte Resize Observer is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-resize-observer/blob/master/LICENSE).
