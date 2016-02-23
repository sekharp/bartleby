import Ember from 'ember';

export default Ember.Controller.extend({
  newNoteTitle: null,

  actions: {
    createNote() {
        debugger
      this.store.createRecord('note', {
        id: this.get('newNoteTitle') + '.md',
        body: this.get('newNoteBody')
      }).save().then(data => {
        this.transitionToRoute('notes.note', data);
      });
    }
  }
});
