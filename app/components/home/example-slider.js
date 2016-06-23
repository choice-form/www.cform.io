import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['styles.examples'],

  didReceiveAttrs() {
    this.set('currentBackground', this.examples[0]['background'])
  },

  didInsertElement() {
    this.slider = new Swiper(`.${this.get('styles.container')}`, {
      speed: 900,
      autoplay: 3000,
      autoplayDisableOnInteraction: false,
      loop: true,
      effect: 'fade',
      fade: { crossFade: true },
      autoHeight: false,
      grabCursor: true,
      pagination: `.${this.get('styles.pagination')}`,
      paginationType: 'bullets',
      paginationClickable: true,
    })
  }
});
