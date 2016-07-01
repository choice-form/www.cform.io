import Component from 'ember-component'
import { isEmpty } from 'ember-utils'
import ScrollMagic from 'scrollmagic'
import { TweenLite, EaseLookup } from 'greensock'

export default Component.extend({
  didInsertElement() {
    this._super(...arguments)

    // 初始化滚动控制器
    this.$controller = new ScrollMagic.Controller({
      addIndicators: this.getWithDefault('debug', false)
    })

    // 设定锚点导航滚动后置顶的场景
    this.keepAnchorsOnTop(this.element.firstChild)

    // 设定锚点触发后的动画滚动效果
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

    // 销毁所有的滚动场景
    this.$anchorsScene.destroy()

    // 销毁滚动控制器
    this.$controller.destroy()
  },

  keepAnchorsOnTop(element) {
    this.$anchorsScene = new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: 'onLeave'
    })
      .setPin(element, {pushFollowers: false,
                        spacerClass: this.get('styles.pin-spacer')})
      .addTo(this.$controller)
  },

  customScrollTo(newScrollPos, options) {
    TweenLite.to(options.container || window, 0.25, {
      scrollTo: {y: newScrollPos - (options.headroom || 0)},
      ease: EaseLookup.find('Power2.easeOut'),
      onComplete: options.onComplete,
      onCompleteScope: options.scrollController
    })
  },

  actions: {
    animateScrolling(anchor, event) {
      event.preventDefault()
      this.$controller.scrollTo(anchor, {
        scrollController: this.$controller,
        headroom: this.element.firstChild.clientHeight,
        onComplete() {
          if (history.pushState)
            history.pushState(null, null, `${location.pathname}${anchor}`)
          else location.hash = anchor
        }
      })
    }
  }
})
