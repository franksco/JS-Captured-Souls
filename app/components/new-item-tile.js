import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        itemname: this.get('itemname'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        timestamp: moment().format("MMMM Do YYYY, h:mm a"),
      };
      this.sendAction('save', params);
    }
  }
});
