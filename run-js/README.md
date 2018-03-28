# Run Javascript

Show Javascript code snippets with a copy and run button to copy the code or run it live on your [Hexo](https://hexo.io/) website.

## Demo

Fork this repo and clone it locally. In the `run-js` subfolder of the target folder where you cloned this repo, run the following commands:

```
yarn
yarn serve
```

## Installation

To install this component and use it with your own static site, do the following:

1. Add the Hexo filter file [run_js.js](https://github.com/flexiodata/markdown-components/blob/master/run-js/hexo/scripts/filter/run_js.js) to the `/scripts/filters` folder
2. Copy [RunJavascript.umd.min.js](https://github.com/flexiodata/markdown-components/blob/master/run-js/dist/RunJavascript.umd.min.js) from the `dist` folder into the JS source folder in your Hexo theme (`/themes/<theme-name>/source/js`)
3. Make the following changes to your `layout.ejs` file:
    * Add `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.6.1/tachyons.min.css">` to the **&lt;head&gt;**
    * Add `<script src="https://unpkg.com/vue"></script>` to the bottom of the **&lt;body&gt;**
    * Add `<script src="<%- url_for("/js/RunJavascript.umd.min.js") %>"></script>` to the bottom of the **&lt;body&gt;**

## Usage

````
```run-js:{ options }
<CODE GOES HERE>
```
````

## Options

| Attribute | Type | Description | Accepted Values | Default |
|:--------|:--------|:--------|:--------|:------:|
| **show-buttons** | boolean | Show or hide buttons in the upper-right corner | &mdash; | true |
| **buttons** | array | Choose which buttons to show in the upper-right corner | 'copy', 'run' | ['copy', 'run'] |
| **copy-prefix** | string | Text to prepend to the code when the copy button is clicked | &mdash; | *empty string* |
| **copy-suffix** | string | Text to append to the code when the copy button is clicked | &mdash; | *empty string* |
