import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return{
      features: [
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
      ],
      services: [
        {title: 'The Words 1', description: 'Vivamus sagittis ipsum sit amet', image: 'http://2.im.guokr.com/gkimage/m8/mv/pe/m8mvpe.jpg'},
        {title: 'The Words 2', description: 'Proin non lacinia sapien, vitae dignissim neque. Vestibulum eget lectus et sapien sollicitudin varius vel dapibus lectus. Quisque non consectetur quam.', image: 'http://3.im.guokr.com/gkimage/ry/o5/o6/ryo5o6.jpg'},
        {title: 'The Words 3', description: 'Vivamus sagittis ipsum sit amet', image: 'http://3.im.guokr.com/gkimage/8n/ud/4p/8nud4p.jpg'},
        {title: 'The Words 4', description: 'Vivamus sagittis ipsum sit amet', image: 'http://1.im.guokr.com/gkimage/c5/0w/ug/c50wug.jpg'},
      ]
    }
  }
});
