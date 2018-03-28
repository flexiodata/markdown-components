/**
 * Name: Tabs
 *
 * Syntax:
 *
 * [[[tabs
 * (((tab:First Tab
 * First tab contents
 * )))
 * (((tab:Second Tab
 * Second tab contents
 * )))
 * ]]]
 */

var regex = /(\s*)(\[\[\[)\s*(tabs)\s*\n?([\s\S]+?)\s*(\]\]\])(\n+|$)/g

function htmlEscape(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function ignore(data) {
  var source = data.source
  var ext = source.substring(source.lastIndexOf('.')).toLowerCase()
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1
}

function getId(index) {
  return 'vanilla-tab-' + index
}

/*
function getMarkupInclude(id) {
  return '' +
    '<div id="' + id + '" class="js-tabs">' +
      '<div class="js-tabs__header">' +
        '<div><a class="js-tabs__title" href="#">Title 1</a></div>' +
        '<div><a class="js-tabs__title" href="#">Title 2</a></div>' +
      '</div>' +
      '<div class="js-tabs__content">' +
        '<p>Tab content #1</p>' +
      '</div>' +
      '<div class="js-tabs__content">' +
        '<p>Tab content #2</p>' +
      '</div>' +
    '</div>'
}
*/
function getMarkupInclude(id, tabs) {
  return '' +
    '<div id="' + id + '" class="js-tabs">' +
      '<div class="js-tabs__header">' +
        tabs.headings +
      '</div>' +
      tabs.contents +
    '</div>'
}

function getScriptInclude(id, idx) {
  return '' +
    '<script>\n' +
      'window.addEventListener("load", function() {\n' +
        'var tab' + idx + ' = new Tabs({\n' +
          'elem: "' + id + '",\n' +
          'open: 0\n' +
        '})\n' +
      '})\n' +
    '</script>'
}

function parseContent(str) {
  var tab_regex = /(\s*)(\(\(\() *(tab) *\n?([\s\S]+?)\s*(\)\)\))(\n+|$)/g

  var tabs = {
    headings: '',
    contents: ''
  }

  function addHeading(title) {
    tabs.headings += '' +
      '<div><a class="js-tabs__title" href="#">' +
        title +
      '</a></div>'
  }

  function addTabContents(contents) {
    tabs.contents += '' +
      '<div class="js-tabs__content">' +
        contents +
      '</div>'
  }

  str.replace(tab_regex, function(raw, start, startQuote, lang, content, endQuote, end) {
      var heading = 'Tab Title'
      var rest = content

      if (content.substring(0, 1) == ':')
      {
        heading = content.substring(0, content.indexOf('\n'))

        // remove heading string from the rest of the contents
        rest = rest.substring(heading.length)

        // remove ':' from heading string
        if (heading.length > 0)
          heading = heading.substring(1).trim()
      }

      addHeading(heading)
      addTabContents(rest)
      return ''
    })

  /*
    headings: '<div><a class="js-tabs__title" href="#">Title 4</a></div>',
    contents: '' +
      '<div class="js-tabs__content">' +
        '<p>Tab content #1</p>' +
      '</div>'
  */

  return tabs
}

function render(data) {
  if (!ignore(data)) {
    var idx = 0
    data.content = data.content.replace(regex, function(raw, start, startQuote, lang, content, endQuote, end) {
      var id = getId(idx)
      var tabs = parseContent(content)

      return '' +
        start +
        getMarkupInclude(id, tabs) +
        '{% raw %}' +
        getScriptInclude(id, idx++) +
        '{% endraw %}' +
        end
    })
  }
}

hexo.extend.filter.register('before_post_render', render, 11)
