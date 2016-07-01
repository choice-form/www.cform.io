import Component from 'ember-component'
import Swiper from 'swiper'

export default Component.extend({
  didInsertElement() {
    this.slider = new Swiper(`.${this.get('styles.container')}`, {
      speed: 900,
      autoplay: 3000,
      autoplayDisableOnInteraction: false,
      loop: true,
      effect: 'fade',
      fade: { crossFade: true },
      grabCursor: true,
      bulletClass: this.get('styles.indicator'),
      bulletActiveClass: this.get('styles.indicator-active'),
      pagination: `.${this.get('styles.pagination')}`,
      paginationType: 'bullets',
      paginationClickable: true,
      paginationBulletRender: (index, className) => {
        const service = this.services[index]
        return `
        <section class=${className}>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </section>
        `
      },
    })
  }
})
