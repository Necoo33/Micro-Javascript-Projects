// with normal behavior, digital clocks by builded with Date() object and with functions itself
// show only one digit when the digit smaller than 10. by that query, ı solve this problem and eventually
// all the time hours, minutes and seconds have two digits and if they're smaller than 10 first digit will
// be 0. The problem solving query(which is between 14 and 28th lines) is completely mine.

let clockTag = document.querySelector(".clock");

function newMoment(){
    let thisMoment = new Date();
    let thisHour = thisMoment.getHours();
    let thisMinute = thisMoment.getMinutes();
    let thisSecond = thisMoment.getSeconds();

    let hourString = thisHour;
    let minuteString = thisMinute;
    let secondString = thisSecond;

    if(thisHour < 10){
        hourString = "0" + thisHour;
    };

    if(thisMinute < 10){
        minuteString = "0" + thisMinute;
    };

    if(thisSecond < 10){
        secondString = "0" + thisSecond;
    };

    let clockHimself = hourString  + ":" + minuteString + ":" + secondString;
    clockTag.textContent/*.innerText*/ = clockHimself;

};

setInterval(newMoment, 1000);