/**
 * Name: Flex.io Code Example
 *
 * Syntax:
 *
 * ```runjs:{ options }
 * <CODE GOES HERE>
 * ```
 */

var regex = /(\s*)(```)\s*(runjs)\s*\n?([\s\S]+?)\s*(\2)(\n+|$)/g

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
  return 'runjs-app-' + index
}

function getMarkupInclude(id, code, options) {
  return '<div id="' + id + '" class="demo"><run-javascript code="' + htmlEscape(code) + '" v-bind="' + htmlEscape(options) + '" /></div>'
}

function getScriptInclude(id, idx) {
  return '' +
    '<script>\n' +
      'window.addEventListener("load", function() {\n' +
        'Vue.component("run-javascript", RunJavascript)\n' +
        'var app' + idx + ' = new Vue({ \n' +
          'el: "#' + id + '"\n' +
        ' })\n' +
      '})\n' +
    '</script>'
}

function parseContent(content) {
  var res = {
    code: content,
    options: '{}'
  }

  if (content.substring(0, 1) == ':')
  {
    res.options = res.code.substring(0, res.code.indexOf('\n'))

    // remove options string from code
    res.code = res.code.substring(res.options.length)

    // remove ':' from options string
    if (res.options.length > 0)
      res.options = res.options.substring(1).trim()
  }

  return res
}

function render(data) {
  if (!ignore(data)) {
    var idx = 0
    data.content = data.content.replace(regex, function(raw, start, startQuote, lang, content, endQuote, end) {
      var id = getId(idx)
      var res = parseContent(content)

      //return start + debug(res) + end

      return '' +
        start +
        '{% raw %}' +
        getMarkupInclude(id, res.code, res.options) +
        getScriptInclude(id, idx++) +
        '{% endraw %}' +
        end
    })
  }
}

hexo.extend.filter.register('before_post_render', render, 9)
