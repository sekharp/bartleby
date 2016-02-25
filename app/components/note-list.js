import Ember from 'ember';

export default Ember.Component.extend({

  searchTerm: null,

  availableNotes: Ember.computed('notes', 'searchTerm', function () {
    let term = this.get('searchTerm');
    let notes = this.get('notes');
    if (term) { return notes.filter(note => note.id.includes(term)) }
    return notes;
  })

});
