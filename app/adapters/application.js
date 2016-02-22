import Ember from 'ember';
import DS from 'ember-data';

let fakeData = [
  { id: 'hello.md', content: 'This is a note.' },
  { id: 'byebye.md', content: 'This is another note.' },
];

export default DS.Adapter.extend({

  findAll() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      resolve(fakeData);
    });
  }

});
