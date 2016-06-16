import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions:{
    update(item, params){
      this.sendAction("update", item, params);
    }
  }
});
