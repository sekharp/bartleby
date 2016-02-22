import DS from 'ember-data';

const electron = requireNode('electron');
const mainProcess = electron.remote.require('./electron');
const filesystem = mainProcess.filesystem;

export default DS.Adapter.extend({

  findAll() {
    return filesystem.all();
  }

});
