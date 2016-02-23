import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNote(){
      this.get('model').save();
    },
    removeNote(){
      this.get('model').destroyRecord();
    }
  }
})
