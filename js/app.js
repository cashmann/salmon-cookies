'use strict';

var day = prompt('Enter the day of the week.')

var locationA = {
  address: '1st and Pike',
  min: 23,
  max: 65,
  aveSold: 6.3,
  soldHourly: [],

  simCustPerHour: function(){
    var max = this.max;
    var min = this.min;
    return Math.ceil(Math.random()*(max-min)+min);
  },

  simSoldPerHour: function(){
    return Math.ceil(this.aveSold*this.simCustPerHour());
  },

  simSold: function(){
    if (day.toUpperCase().trim()==='SATURDAY'){
      var hours = 4;
    }else if (day.toUpperCase().trim()==='SUNDAY'){
      hours = 0;
    } else{
      hours = 8;
    }
    for (var i = 0; i<=hours; i++){
      this.soldHourly[i] = this.simSoldPerHour();
    }
    return this.soldHourly;
  },

  simSoldPerDay: function(){
    var soldPerDay = 0;
    if (day.toUpperCase().trim()==='SATURDAY'){
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
    return soldPerDay;
  }
};

var locationB = {
  address: 'SeaTac Airport',
  min: 3,
  max: 24,
  aveSold: 1.2,
  soldHourly: [],

  simCustPerHour: function(){
    var max = this.max;
    var min = this.min;
    return Math.ceil(Math.random()*(max-min)+min);
  },

  simSoldPerHour: function(){
    return Math.ceil(this.aveSold*this.simCustPerHour());
  },

  simSold: function(){
    if (day.toUpperCase().trim()==='SATURDAY'){
      var hours = 4;
    }else if (day.toUpperCase().trim()==='SUNDAY'){
      hours = 0;
    } else{
      hours = 8;
    }
    for (var i = 0; i<=hours; i++){
      this.soldHourly[i] = this.simSoldPerHour();
    }
    return this.soldHourly;
  },

  simSoldPerDay: function(){
    var soldPerDay = 0;
    if (day.toUpperCase().trim()==='SATURDAY'){
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
    return soldPerDay;
  }
};

var locationC = {
  address: 'Seattle Center',
  min: 11,
  max: 38,
  aveSold: 3.7,
  soldHourly: [],

  simCustPerHour: function(){
    var max = this.max;
    var min = this.min;
    return Math.ceil(Math.random()*(max-min)+min);
  },

  simSoldPerHour: function(){
    return Math.ceil(this.aveSold*this.simCustPerHour());
  },

  simSold: function(){
    if (day.toUpperCase().trim()==='SATURDAY'){
      var hours = 4;
    }else if (day.toUpperCase().trim()==='SUNDAY'){
      hours = 0;
    } else{
      hours = 8;
    }
    for (var i = 0; i<=hours; i++){
      this.soldHourly[i] = this.simSoldPerHour();
    }
    return this.soldHourly;
  },

  simSoldPerDay: function(){
    var soldPerDay = 0;
    if (day.toUpperCase().trim()==='SATURDAY'){
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
    return soldPerDay;
  }
};

var locationD = {
  address: 'Capitol Hill',
  min: 20,
  max: 38,
  aveSold: 2.3,
  soldHourly: [],

  simCustPerHour: function(){
    var max = this.max;
    var min = this.min;
    return Math.ceil(Math.random()*(max-min)+min);
  },

  simSoldPerHour: function(){
    return Math.ceil(this.aveSold*this.simCustPerHour());
  },

  simSold: function(){
    if (day.toUpperCase().trim()==='SATURDAY'){
      var hours = 4;
    }else if (day.toUpperCase().trim()==='SUNDAY'){
      hours = 0;
    } else{
      hours = 8;
    }
    for (var i = 0; i<=hours; i++){
      this.soldHourly[i] = this.simSoldPerHour();
    }
    return this.soldHourly;
  },

  simSoldPerDay: function(){
    var soldPerDay = 0;
    if (day.toUpperCase().trim()==='SATURDAY'){
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
    return soldPerDay;
  }
};

var locationE = {
  address: 'Alki',
  min: 2,
  max: 16,
  aveSold: 4.6,
  soldHourly: [],

  simCustPerHour: function(){
    var max = this.max;
    var min = this.min;
    return Math.ceil(Math.random()*(max-min)+min);
  },

  simSoldPerHour: function(){
    return Math.ceil(this.aveSold*this.simCustPerHour());
  },

  simSold: function(){
    if (day.toUpperCase().trim()==='SATURDAY'){
      var hours = 4;
    }else if (day.toUpperCase().trim()==='SUNDAY'){
      hours = 0;
    } else{
      hours = 8;
    }
    for (var i = 0; i<=hours; i++){
      this.soldHourly[i] = this.simSoldPerHour();
    }
    return this.soldHourly;
  },

  simSoldPerDay: function(){
    var soldPerDay = 0;
    if (day.toUpperCase().trim()==='SATURDAY'){
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
    return soldPerDay;
  }
};

var hours = [];
if (day.toUpperCase().trim()==='SATURDAY'){
  hours = ['11am', '12pm', '1pm', '2pm', '3pm', '4pm'];
} else if (day.toUpperCase().trim()!=='SUNDAY'){
  hours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
}

function storeData(location, id){
  var locationList = document.getElementById(id);
  for(var i=0; i<location.simSold().length; i++){
    var li = document.createElement('li');
    var listString = hours[i]+": " + location.simSold()[i] + " cookies.";
    li.textContent = listString;
    locationList.appendChild(li);
  }
}

storeData(locationA, 'a');
storeData(locationB, 'b');
storeData(locationC, 'c');
storeData(locationD, 'd');
storeData(locationE, 'e');