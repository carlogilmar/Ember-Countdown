import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    sendDataToRoute:function(m){
      console.log("El controller esta ladrando!");
      console.log(m);
    }
  }
});
