import DS from 'ember-data';

export default DS.Model.extend({
  itemname: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  stock: DS.attr(),
  timestamp: DS.attr(),
  image: DS.attr(),
  cart: DS.belongsTo('cart', { async: true })
});
