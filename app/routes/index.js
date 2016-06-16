import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('item');
 },
 actions:{
   update(item, params) {
     console.log(params)
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        item.set(key,params[key]);
      }
    });
    item.save();
    this.transitionTo('index');
  }
 }
});
