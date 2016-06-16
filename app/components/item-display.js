import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  stock: "",

  actions: {
    addToCart(item) {
      this.set('stock', parseInt(item.get('stock')));
      this.get('shoppingCart').add(item);
      var params = {

        stock: this.stock -=1
      }
      this.sendAction('update', item, params);
    },
  }
});
