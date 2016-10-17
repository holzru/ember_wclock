import Ember from 'ember';

export default Ember.Controller.extend({
  init: function () {
    this.updateTime();
  },
   updateTime: function () {
     var _this = this;

     Ember.run.later(function() {
       _this.set('localTime', new Date().toLocaleTimeString());
       _this.updateTime();
     }, 1000);
   },
  localTime: new Date().toLocaleTimeString()
});
