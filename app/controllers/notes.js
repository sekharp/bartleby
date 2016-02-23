import Ember from 'ember';

export default Ember.Controller.extend({
  newNoteTitle: null,

  actions: {
    createNote() {
      this.store.createRecord('note', {
        id: this.get('newNoteTitle') + '.md'
      }).save().then(data => {
        this.transitionToRoute('notes.note', data);
      });
    }
  }
});
