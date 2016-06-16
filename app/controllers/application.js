import Ember from 'ember';

export default Ember.Controller.extend({
  shoppingCart: Ember.inject.service(),

  cartTotal: Ember.computed(function(){
      return this.get('shoppingCart.items.[]').length;
    }),
    totalNew: Ember.observer('shoppingCart.length', function(){
      this.set('cartTotal', this.get('shoppingCart.items.length'));
    }),
});
