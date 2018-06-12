'use strict';

var day = prompt('Enter the day of the week.');
var weekdayHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var satHours = ['11am', '12pm', '1pm', '2pm', '3pm', '4pm'];

function Venue(address, min, max, aveSold){
  if (arguments.length<3) {console.error('Address, min, max, and aveSold are required!');}
  this.address = address;
  this.min = min;
  this.max = max;
  this.aveSold = aveSold;
  this.soldHourly = [];
}

Venue.prototype.simCustPerHour = function(){
  var max = this.max;
  var min = this.min;
  return Math.ceil(Math.random()*(max-min)+min);
};

Venue.prototype.simSoldPerHour = function(){
  return Math.ceil(this.aveSold*this.simCustPerHour());
};

Venue.prototype.simSold = function(){
  if (day.toUpperCase().trim()==='SATURDAY'){
    var hours = satHours;
  }else if (day.toUpperCase().trim()==='SUNDAY'){
    hours = 0;
  } else{
    hours = weekdayHours;
  }
  for (var i = 0; i<hours.length; i++){
    this.soldHourly[i] = this.simSoldPerHour();
  }
  return this.soldHourly;
};

Venue.prototype.simSoldPerDay = function(){
  var soldPerDay = 0;
  for (var i=0; i<hours; i++){
    soldPerDay += this.simSoldPerHour();
    console.log(soldPerDay);
  }
  return soldPerDay;
};

var locationA = new Venue('1st and Pike', 23, 65, 6.3);
var locationB = new Venue('SeaTac Airport', 3, 24, 1.2);
var locationC = new Venue('Seattle Center', 11, 38, 3.7);
var locationD = new Venue('Capitol Hill', 20, 38, 2.3);
var locationE = new Venue('Alki', 2, 16, 4.6);


var hours = [];
if (day.toUpperCase().trim()==='SATURDAY'){
  hours = satHours;
} else if (day.toUpperCase().trim()!=='SUNDAY'){
  hours = weekdayHours;
}
document.getElementById('dynamic').colSpan = hours.length;

var hoursEl = document.getElementById('hours');
for(var i=0; i<hours.length; i++){
  var td = document.createElement('td');
  td.textContent = hours[i];
  hoursEl.appendChild(td);
}

function storeData(venue, id){
  var venueList = document.getElementById(id);
  var sold = venue.simSold();
  var total = 0;
  for(var i=0; i<sold.length; i++){
    var td = document.createElement('td');
    var soldString = sold[i];
    td.textContent = soldString;
    venueList.appendChild(td);
  }
  var tl = document.createElement('td');
  tl.className = 'total';
  for( i=0; i<sold.length; i++){
    total = total + sold[i];
  }
  tl.textContent = total;
  venueList.appendChild(tl);
}

storeData(locationA, 'a');
storeData(locationB, 'b');
storeData(locationC, 'c');
storeData(locationD, 'd');
storeData(locationE, 'e');