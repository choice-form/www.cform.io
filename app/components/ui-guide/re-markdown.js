import Ember from 'ember'
import Component from 'ember-component'
import Remarkable from 'remarkable'
import hljs from 'highlight'

export default Component.extend({
  classNameBindings: ['styles.re-markdown'],
  presets: 'default',
  defaults: {
    html: true,
    breaks: true,
    linkify: true,
    linkTarget: '',
    xhtmlOut: true,
    quotes: '“”‘’',
    typographer: true,
    langPrefix: 'language-',
    highlight(string/*, language = ''*/) {
      return hljs.highlightAuto(string).value
    }
  },

  willRender() {
    const options = Ember.assign(this.defaults, this.attrs.options)
    this.markdown = new Remarkable(this.presets, options)
  },

  didInsertElement() {
    const result = this.markdown.render(this.element.innerHTML.trim())
    this.element.innerHTML = result
  }
})
