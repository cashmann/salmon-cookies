'use strict';

var day = prompt('Choose the day.');
var weekdayHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var satHours = ['11am', '12pm', '1pm', '2pm', '3pm', '4pm'];

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

function Venue(address, min, max, aveSold, venueId){
  if (arguments.length<5) {console.error('Address, min, max, and aveSold are required!');}
  this.address = address;
  this.min = min;
  this.max = max;
  this.aveSold = aveSold;
  this.venueId = venueId;
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

if(day.toUpperCase().trim()=== 'SATURDAY'){
  Venue.prototype.totalSoldPerHour = [0, 0, 0, 0, 0, 0];
}else if(day.toUpperCase().trim()!== 'SUNDAY'){
  Venue.prototype.totalSoldPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

Venue.prototype.simSold = function(){
  if (day.toUpperCase().trim()==='SATURDAY'){
    var hours = satHours;
  }else if (day.toUpperCase().trim()==='SUNDAY'){
    hours = 0;
  } else{
    hours = weekdayHours;
  }
  for (var i = 0; i<hours.length; i++){
    var theNum = this.simSoldPerHour();
    this.soldHourly[i] = theNum;
    this.totalSoldPerHour[i] += theNum;
  }
  return this.soldHourly;
};

Venue.prototype.simSoldPerDay = function(){
  var soldPerDay = 0;
  for (var i=0; i<hours; i++){
    soldPerDay += this.simSoldPerHour();
    // console.log(soldPerDay);
  }
  return soldPerDay;
};

var venueA = new Venue('1st and Pike', 23, 65, 6.3, 'a');
var venueB = new Venue('SeaTac Airport', 3, 24, 1.2, 'b');
var venueC = new Venue('Seattle Center', 11, 38, 3.7, 'c');
var venueD = new Venue('Capitol Hill', 20, 38, 2.3, 'd');
var venueE = new Venue('Alki', 2, 16, 4.6, 'e');


Venue.prototype.render = function(){
  var id = this.venueId;
  var venueDisplay = document.querySelector('#venueDisplay');
  var tr = document.createElement('tr');
  tr.id = id;
  tr.innerHTML = '<td>' + this.address + '</td>';
  venueDisplay.appendChild(tr);

  var venueList = document.getElementById(id);
  var sold = this.simSold();
 
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
};

Venue.prototype.renderTotals = function(){
  var id = 'bottomTotals';
  var venueList = document.getElementById(id);
  var sold = this.totalSoldPerHour;
 
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
};

venueA.render();
venueB.render();
venueC.render();
venueD.render();
venueE.render();
venueA.renderTotals();