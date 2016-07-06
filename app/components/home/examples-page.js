import Ember from 'ember'
import Component from 'ember-component'
import { isEmpty } from 'ember-utils'
import ScrollMagic from 'scrollmagic'
import { TweenLite, EaseLookup } from 'greensock'

export default Component.extend({
  didInsertElement() {
    this._super(...arguments)

    this.$controller = new ScrollMagic.Controller({
      addIndicators: this.getWithDefault('debug', false)
    })
    this.keepAnchorsOnTop(this.element.firstChild)
    this.enterSceneUpdateUrl(this.element.children)

    this.$controller.scrollTo(this.customScrollTo)
  },

  didRender() {
    this._super(...arguments)

    const anchor = location.hash
    if (isEmpty(anchor)) return

    this.$controller.scrollTo(anchor, {
      headroom: this.element.firstChild.clientHeight
    })
  },

  didDestroyElement() {
    this._super(...arguments)
    this.$anchorsScene.destroy()
    this.$featureScenes.forEach(function(scene) {
      scene.destroy()
    })
    this.$controller.destroy()
  },

  keepAnchorsOnTop(element) {
    this.$anchorsScene = new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: 'onLeave'
    })
      .setPin(element, {
        pushFollowers: false,
        spacerClass: this.get('styles.pin-spacer')
      })
      .addTo(this.$controller)
  },

  enterSceneUpdateUrl(elements) {
    this.$featureScenes = []
    Array.prototype.forEach.call(elements, (element, index) => {
      if(index === 0) return

      this.$featureScenes.push(new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 'onLeave',
        duration: element.clientHeight
      })
        .on("enter", () => { this.modifyUrl(`#${element.id}`) })
        .addTo(this.$controller)
      )
    })

    this.$featureScenes[0].on("leave", (e) => {
      if(e.state === 'BEFORE') {
        this.modifyUrl('')
      }
    })
  },

  customScrollTo(newScrollPos, options) {
    TweenLite.to(options.container || window, 0.25, {
      scrollTo: {y: newScrollPos - (options.headroom || 0)},
      ease: EaseLookup.find('Power2.easeOut'),
      onComplete: options.onComplete,
      onCompleteScope: options.scrollController
    })
  },

  modifyUrl(params) {
    if (history.pushState) {
      history.replaceState(null, null, `${location.pathname}${params}`)
    } else {
      location.hash = params
    }
  },

  actions: {
    animateScrolling(anchor, event) {
      event.preventDefault()
      this.$controller.scrollTo(anchor, {
        scrollController: this.$controller,
        headroom: this.element.firstChild.clientHeight,
        onComplete: () => {
          this.modifyUrl(anchor)
        }
      })
    }
  }
});
