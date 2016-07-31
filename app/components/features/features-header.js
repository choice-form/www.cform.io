import Ember from 'ember';

export default Ember.Component.extend({
  //TODO: 测试用 暂时有用
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
