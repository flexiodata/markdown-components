# Tabs

Organize content in tabs on your [Hexo](https://hexo.io/) website.

## Demo

Fork this repo and clone it locally. In the `tabs` subfolder of the target folder where you cloned this repo there is an `index.html` you can open in the browser to see an example of it working.

## Installation

To install this component and use it with your own static site, do the following:

1. Add the Hexo filter file [tabs.js](https://github.com/flexiodata/markdown-components/blob/master/tabs/hexo/scripts/filter/tabs.js) to the `/scripts/filters` folder
2. Copy [tabs.min.js](https://github.com/flexiodata/markdown-components/blob/master/tabs/dist/tabs.min.js) from the `dist` folder into the JS source folder in your Hexo theme (`/themes/<theme-name>/source/js`)
3. Copy [tabs.css](https://github.com/flexiodata/markdown-components/blob/master/tabs/dist/tabs.css) from the `dist` folder into the CSS source folder in your Hexo theme (`/themes/<theme-name>/source/js`) and be sure it is included in your CSS output
4. Make the following changes to your `layout.ejs` file:
    * Add `<script src="<%- url_for("/js/tabs.min.js") %>"></script>` to the bottom of the **&lt;body&gt;**

## Usage

```
[[[tabs
  (((tab:First Tab
  First tab contents
  )))

  (((tab:Second Tab
  Second tab contents
  )))
]]]
```
