import Ember from 'ember';

export default Ember.Controller.extend({
  newNoteTitle: null,
  newNoteBody: null,

  actions: {
    createNote() {
      this.store.createRecord('note', {
        id: this.get('newNoteTitle') + '.md',
        content: this.get('newNoteBody')
      }).save().then(data => {
        this.transitionToRoute('notes.note', data);
      });
    }
  }
});
