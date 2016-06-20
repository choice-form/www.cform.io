import Ember from 'ember'
import Segment from 'npm:segment-js'
import ease from 'npm:d3-ease'

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments)

    this.segmentA = new Segment(document.getElementById('lineA'), 8, 32)
    this.segmentB = new Segment(document.getElementById('lineB'), 8, 32)
    this.segmentC = new Segment(document.getElementById('lineC'), 8, 32)
  },

  inACStart(segment) {
    segment.draw('80% - 24', '80%', 0.3, {
      delay: 0.1, callback: () => this.inACEnd(segment)
    })
  },

  inACEnd(segment) {
    segment.draw('100% - 54.5', '100% - 30.5', 0.3, {
      easing: ease.easeElasticOut(1, 0.3)
    })
  },

  outACStart(segment) {
    segment.draw('90% - 24', '90%', 0.1, {
      easing: ease.easeElasticIn(1, 0.3),
      callback: () => this.outACThen(segment)
    })
  },

  outACThen(segment) {
    segment.draw('20% - 24', '20%', 0.3, {
      callback: () => this.outACEnd(segment)
    })
  },

  outACEnd(segment) {
    segment.draw(8, 32, 0.3, {
      easing: ease.easeElasticOut(1, 0.3)
    })
  },

  inBStart(segment) {
    segment.draw(8 - 6, 32 + 6, 0.1, {
      callback: () => this.inBEnd(segment)
    })
  },

  inBEnd(segment) {
    segment.draw(8 + 12, 32 - 12, 0.3, {
      easing: ease.easeBounceOut(1, 0.3)
    })
  },

  outB(segment) {
    segment.draw(8, 32, 0.3, {
      delay: 0.1, easing: ease.easeElasticOut(2, 0.3)
    })
  },

  closed: true,
  scaled: false,
  classNameBindings: ['styles.menu', 'scaled'],

  click() {
    this.toggleProperty('scaled')
    Ember.run.later(this, 'toggleProperty', 'scaled', 350)

    if (this.get('closed')) {
      this.inACStart(this.segmentA)
      this.inBStart(this.segmentB)
      this.inACStart(this.segmentC)
    } else {
      this.outACStart(this.segmentA)
      this.outB(this.segmentB)
      this.outACStart(this.segmentC)
    }

    this.toggleProperty('closed')
  }
})
