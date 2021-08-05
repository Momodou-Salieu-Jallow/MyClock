

function myClock(){ 
    var date= new Date;

    var currentSeconds = date.getSeconds();
    var currentMinutes = date.getMinutes();
    var currentHours = date.getHours();

    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    document.getElementById("hours").firstChild.nodeValue = currentHours;
    document.getElementById("minutes").firstChild.nodeValue = currentMinutes;
    document.getElementById("seconds").firstChild.nodeValue = currentSeconds;
    document.getElementById("time-of-the-day").firstChild.nodeValue = timeOfDay;
}

var ClockInterval = setInterval(myClock, 1000);