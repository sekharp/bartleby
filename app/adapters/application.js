import DS from 'ember-data';

const electron = requireNode('electron');
const mainProcess = electron.remote.require('./electron');
const filesystem = mainProcess.filesystem;

export default DS.Adapter.extend({

  findAll() {
    return filesystem.all();
  },
  createRecord(store, type, snapshot){
    let data = this.serialize(snapshot, {includeId: true})
    return filesystem.write(data.id, data.content);
  },
  updateRecord(store, type, snapshot){
    let data = this.serialize(snapshot, {includeId: true})
    return filesystem.write(data.id, data.content);
  }
});
