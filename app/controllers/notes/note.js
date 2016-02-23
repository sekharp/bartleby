import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNote(){
      this.get('model').save();
      console.log("saved");
    }
  }
})
