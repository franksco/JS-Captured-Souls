import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  stock: "",
  total: Ember.computed('items', function(){
    return this.get('shoppingCart').total();
  }),
  totalNew: Ember.observer('items.length', function(){
    this.set('total', this.get('shoppingCart').total());
  }),
  actions: {
    remove(item){
      this.set('stock', parseInt(item.get('stock')));
      this.get('shoppingCart').remove(item);
      var params = {

        stock: this.stock +=1
      }
      this.sendAction('update', item, params);

    }
  }
});
