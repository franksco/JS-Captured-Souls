import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item){
    this.get('items').pushObject(item);
  },
  remove(item){
    this.get('items').removeObject(item);
  },
  total(){
    var i = 0;
    this.items.forEach(function(item){
      i += parseInt(item.get('price'));
    });
    return i;
  }
});
