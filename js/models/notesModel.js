import {Model} from 'backbone';

export default Model.extend({

    defaults: {
      t: '',
      c: ''
    },

    getDate: function() {
      return new Date(this.get('d')).ddmm();
    }
 });