<template>
  <div class="relative pa3 bg-near-white br2">
    <div class="flex flex-row absolute top-0 right-0" v-if="showButtons">
      <button
        type="button"
        aria-label="Copy to Clipboard"
        class="no-select pointer f6 pv1 lh-copy ph3 white bn bg-black-20 hover-bg-blue darken-10 hint--top"
        :class="show_run_button ? '' : 'br2 br--top br--right'"
        :data-clipboard-text="copy_code"
        v-if="show_copy_button"
      ><span class="f6 ttu b">Copy</span></button>
      <button
        type="button"
        class="no-select pointer f6 pv1 lh-copy ph3 white bn bg-blue br2 br--top br--right darken-10"
        @click="run"
        v-if="show_run_button"
      ><span class="f6 ttu b">Run</span></button>
    </div>
    <div>
      <pre class="f6 line-numbers"><code ref="code" class="db overflow-x-auto language-javascript" spellcheck="false">{{code}}</code></pre>
    </div>
    <div class="mt3" v-if="is_loading">
      <div class="bb b--black-10"></div>
      <div class="v-mid fw6 dark-gray mt3 mb"><span class="fa fa-spin fa-spinner"></span> Running...</div>
    </div>
    <div class="mt3" v-else-if="has_text_result">
      <div class="bb b--black-10"></div>
      <h4 class="mt3 mb2">Output</h4>
      <div>
        <pre class="f6"><code ref="output" class="db overflow-auto language-javascript" spellcheck="false" style="max-height: 25rem">{{text_result}}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RunJavascript',
    props: {
      'code': {
        type: String,
        default: ''
      },
      'show-buttons': {
        type: Boolean,
        default: true
      },
      'buttons': {
        type: Array,
        default: () => { return ['copy', 'run'] }
      },
      'copy-prefix': {
        type: String,
        default: ''
      },
      'copy-suffix': {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        text_result: '',
        is_loading: false
      }
    },
    computed: {
      has_text_result() {
        return this.text_result.length > 0
      },
      show_copy_button() {
        return this.buttons.indexOf('copy') != -1
      },
      show_run_button() {
        return this.buttons.indexOf('run') != -1
      },
      run_fn() {
        return eval('('+this.code+')')
      },
      copy_code() {
        return this.copyPrefix + this.code + this.copySuffix
      }
    },

    methods: {
      run() {
        if (typeof this.run_fn == 'function')
        {
          this.text_result = ''
          this.is_loading = true

          var fn = this.run_fn

          var response = fn.call()

          if (typeof response == 'object') {
            // response is json
            this.text_result = JSON.stringify(response, null, 2)
          } else if (typeof response == 'string') {
            // echo text by default
            this.text_result = response
          } else {
            this.text_result = ''
          }

          this.is_loading = false
        }
      }
    }
  }
</script>
