import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    setDateRange:function(r, d){
      console.log(r);
      console.log(d);
      console.log("set data range");
      this.send('sendDataToRoute', 'can u see me, I am the controller');
    }
  }
});
