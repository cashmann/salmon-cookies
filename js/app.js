'use strict';

var locationA = {
  address: '1st and Pike',
  min: 23,
  max: 65,
  aveSold: 6.3,

  simCustPerHour: function(){
    var max = this.max;
    var min = this.min;
    return Math.ceil(Math.random()*(max-min)+min);
  }, 

  simSoldPerHour: function(){
    return Math.round(this.aveSold*this.simCustPerHour());
  },

  simSoldPerDay: function(day){
    var soldPerDay = 0;
    day = prompt('What day is it?');
    if (day.toUpperCase().trim()==='FRIDAY'){
      var hours = 4;
    }else if (day.toUpperCase().trim()==='SUNDAY'){
      hours = 0;
    } else{
      hours = 8;
    }
    for (var i=0; i<hours; i++){
      soldPerDay += this.simSoldPerHour();
      console.log(soldPerDay);
    }
  }
}

console.log(locationA.simCustPerHour());
console.log(locationA.simSoldPerHour());
console.log(locationA.simSoldPerDay());