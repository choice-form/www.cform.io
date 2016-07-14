import Ember from 'ember'
import Component from 'ember-component'
import Swiper from 'swiper'

const { assign, isPresent } = Ember

export default Component.extend({
  classNames: ['swiper-container'],

  didReceiveAttrs() {
    this._super(...arguments);

    [
      {key: 'pagination', value: '.swiper-pagination'},
      {key: 'prevButton', value: '.swiper-button-prev'},
      {key: 'nextButton', value: '.swiper-button-next'},
      {key: 'scrollbar', value: '.swiper-scrollbar'}
    ].forEach(option => {
      const { options } = this.attrs
      
      if (options[option.key]) {
        if (option.value === options[option.key]) {
          this.set(`$${option.key}`, option.value.slice(1))
        } else {
          this.set(`$${option.key}`,
                   [option.value.slice(1),
                    options[option.key].slice(1)].join(' '))
        }
      }
    })
  },

  didInsertElement() {
    this._super(...arguments)
    this.$slider = new Swiper(this.element, this.attrs.options)
  },

  willDestroyElement() {
    this._super(...arguments)
    this.$slider.detachEvents()
    this.$slider.destroy(true, true)
    delete this.$slider
  }
})
