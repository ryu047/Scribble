import { Collection } from 'backbone';
import BackboneLocalStorage from 'backbone.localstorage';
import NotesModel from '../models/notesModel';

const LS_KEY = '~~notes~~';

export default Collection.extend({

  model: NotesModel,

  localStorage: new BackboneLocalStorage(LS_KEY),

  comparator: function(note) {
    return -note.get('d');
  },

  clearNotes: function () {
    let that = this;

    that.localStorage._clear();
    that.fetch();
  },

  createNew: function () {
    return Backbone.Collection.prototype.create.call(this, {
      d: +new Date()
    }, {
      silent: true
    });
  },

  fetch: function () {
    let that = this;

    Backbone.Collection.prototype.fetch.apply(that, arguments);

    if (!that.length) {
      that.createNew();
    }

    return that;
  }
});