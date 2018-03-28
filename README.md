# Markdown Components

Extend Markdown capabilities on static sites with simple, inline JavaScript apps (using Hexo & Vue.js).

## Live Demo and Tutorial

Here's a blog post on [how we use Markdown Components for our static docs](https://www.flex.io/blog/markdown-syntax-javascript-hexo-vue/), including examples of live code snippets.

## Overview

Static site generators are fantastic, but migrating an existing site from CMS system does come at the cost of some classic front-end components. For instance, WordPress has a thriving plugin ecosystem which allows simple custom strings to be inserted into posts which are hooks for adding things like embedded YouTube videos, lightboxes for images and a host of other cool dynamic components that spice up your site. When everything is written in Markdown, this simple functionality isn't really possible outside of raw HTML or raw JavaScript.

The Markdown Components repo aims to meet in the middle.

It provides components that are injected via Markdown syntax before the static site generator processes the Markdown. The components that are created consist of a placeholder <div> where the component will be inserted along with small snippets of Javascript which provide the functionality that can't normally be created in a Markdown document.

## Components

Each component contains a `README.md` with an explanation of what it does and how to add it to your static site.

**Have a component you'd like to add?** Submit a PR or [open an issue](https://github.com/flexiodata/markdown-components/issues).

| Component | Source | Demo |
|:--------|:------:|:------:|
| **Run Javascript** <br/> A live, runnable, copyable code snippet. | [Source](https://github.com/flexiodata/markdown-components/tree/master/run-js) | https://flexiodata.github.io/markdown-components/run-js/ 
| **Tabs** <br/> Organize content in tabs. | [Source](https://github.com/flexiodata/markdown-components/tree/master/tabs) | https://flexiodata.github.io/markdown-components/tabs/
