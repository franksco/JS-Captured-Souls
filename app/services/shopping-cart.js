import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item){
    this.get('items').pushObject(item);
  },
  count(){
    Ember.Logger.log("hey");
    return this.items.length;
  }
});
