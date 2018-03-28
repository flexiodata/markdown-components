# Run Javascript

Show Javascript code in your [Hexo](https://hexo.io/) pages and posts along with a copy and run button to copy the code or run it live on your website.

## Demo

Fork this repo and clone it locally. In the `run-js` subfolder of the target folder where you cloned this repo, run the following commands:

```
yarn
yarn serve
```

## Installation

To install this component and use it with your own static site, do the following:

1. Copy [RunJavascript.umd.min.js](https://github.com/flexiodata/markdown-components/blob/master/run-js/dist/RunJavascript.umd.min.js) from the `dist` folder into the JS source folder in your Hexo theme (`/themes/<theme-name>/source/js`)
2. Make the following changes to your `layout.ejs` file:
    * Add `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.6.1/tachyons.min.css">` to the <head>
    * Add `<script src="https://unpkg.com/vue"></script>` to the bottom of the <body>
    * Add `<script src="<%- url_for("/js/RunJavascript.umd.min.js") %>"></script>` to the bottom of the <body>

## Usage

````
```run-js:{ options }
<CODE GOES HERE>
```
````
