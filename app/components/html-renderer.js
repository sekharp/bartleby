import Ember from 'ember';

export default Ember.Component.extend({
  renderedNote: Ember.computed('note.content', function(){
    return this.get('note.content').toUpperCase();
  })
});
