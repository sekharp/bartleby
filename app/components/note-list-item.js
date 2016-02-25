import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteNote() {
      console.log('BYE!', this.get('note.id'));
    }
  }

});
