import Ember from 'ember';

export default Ember.Component.extend({
  name:'1122',
  textName: '555',
  scaled: false,


  actions: {
    changeName:function(){
      this.set('textName', "666");
      this.toggleProperty('scaled')
    console.log('123');
    }
  }

});
