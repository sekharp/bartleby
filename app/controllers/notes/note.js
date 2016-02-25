import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNote(){
      this.get('model').save();
    },
    removeNote(){
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute('notes');
      }).catch(error => alert(error.message));
    }
  }
})
