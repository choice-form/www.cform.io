import Ember from 'ember'
import Component from 'ember-component'

export default Component.extend({
  actions: {
    initSwiper(name, instance) {
      instance ? this.set(name, instance) : this.set('swiper', name)
    },

    slideTo(name, direction) {
      const method = `slide${Ember.String.capitalize(direction)}`
      this.get(name)[method]()
    }
  }
})
