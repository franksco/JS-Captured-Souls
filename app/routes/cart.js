import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    update(item, params) {
      console.log(params)
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         item.set(key,params[key]);
       }
     });
     item.save();
     this.transitionTo('cart');
   }
  }

});
