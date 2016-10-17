import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    let timezones = [];
    for (let i in moment.tz._zones) {
      timezones.push({
        name: moment.tz._zones[i].name,
        offset: moment.tz._zones[i].offsets[0]
      });
    }
    this.set('timezones', timezones);
    this._super();
  }, selectedTimezone: null,
  actions: {
    add: function () {
      let timezone = this.store.createRecord('timezone', {
        name: this.get('selectedTimezone').name,
        offset: this.get('selectedTimezone').offset
      })
    }
  }
});
