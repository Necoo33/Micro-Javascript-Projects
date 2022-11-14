// It's completely my app. It can start, pause, continue, add recorded times, save on local storage and 
// get them after refresh if you're saved anything. Finally you can delete that datas so easily.

let chronometerItself = document.querySelector(".chronometeritself");

let hourTag = document.querySelector(".hour");
let minuteTag = document.querySelector(".minute");
let secondTag = document.querySelector(".second");

let stopButton = document.querySelector(".stopbutton");
let playButton = document.querySelector(".playbutton");
let resetButton = document.querySelector(".resetbutton");
let recordButton = document.querySelector(".recordbutton");
let saveButton = document.querySelector(".savebutton");

let preventingRePressToButton = document.querySelector(".preventingrepresstobutton");

let savedRecords = document.querySelector(".savedtimes");

let hour = 0;
let minutes = 0;
let seconds = 0;

let timesWhichWillOutput = [];
let hourMinuteSecondArray = [];

let intervalOfAll;

function chronometerFunc(){
    secondTag.innerText = seconds++;

    if(seconds < 10){
        secondTag.innerText = "0" + seconds;
    } else if(seconds == 60){
        seconds = 0;
        secondTag.innerText = "0" + seconds;
        minuteTag.innerText = minutes++;
    } else{
        secondTag.innerText = seconds;
    };

    if(minutes < 10){
        minuteTag.innerText = "0" + minutes;
    } else if(minutes == 60){
        seconds = 0;
        minutes = 0;
        minuteTag.innerText = "0" + minutes; 
        hourTag.innerText = hour++;
    } else{
        minuteTag.innerText = minutes;
    };

    if(hour < 10){
        hourTag.innerText = "0" + hour;
    } else{
        hourTag.innerText = hour;
    };
};

function stopFunc(){
    secondTag.innerText = seconds;
    minuteTag.innerText = minutes;
    hourTag.innerText = hour;

    if(seconds < 10){
        secondTag.innerText = "0" + seconds;
    } else{
        secondTag.innerText = seconds;
    }

    if(minutes < 10){
        minuteTag.innerText = "0" + minutes;
    } else{
        minuteTag.innerText = minutes;
    }

    if(hour < 10){
        hourTag.innerText = "0" + hour;
    } else{
        hourTag.innerText = hour;
    }
};

function resetFunc(){
    secondTag.innerText = "00";
    minuteTag.innerText = "00";
    hourTag.innerText = "00";

    localStorage.removeItem("Chronometer Time");
    localStorage.removeItem("Times Which Will Output");

    Array.from(savedRecords.children).forEach(function(parameter){
        parameter.remove();
    });

    timesWhichWillOutput.splice(0, timesWhichWillOutput.length);

    location.reload();
};

function flagFunc(){
    let newFlagElement = document.createElement("p");
    newFlagElement.classList.add(".flagelement");
    newFlagElement.style.fontSize = "2rem";
    newFlagElement.innerText = `${hourTag.innerText}:${minuteTag.innerText}:${secondTag.innerText}`;
    savedRecords.append(newFlagElement);
    timesWhichWillOutput.push(newFlagElement.innerText);

    if(newFlagElement.innerText === `00:00:00`){
        newFlagElement.remove();
    };

    if(newFlagElement.innerText == newFlagElement.previousSibling.innerText){
        newFlagElement.remove();
    }

};

playButton.addEventListener("pointerdown", function(){

    preventingRePressToButton.style.display = "block";

    if(hourTag.innerText != "00" || minuteTag.innerText != "00" || secondTag.innerText != "00"){
        hour = Number(hourTag.innerText);
        minutes = Number(minuteTag.innerText);
        seconds = Number(secondTag.innerText);

        intervalOfAll = setInterval(chronometerFunc, 1000);
    } else{
        intervalOfAll = setInterval(chronometerFunc, 1000);
    }


    stopButton.addEventListener("pointerdown", function(){

        stopFunc();

        clearInterval(intervalOfAll);

        preventingRePressToButton.style.display = "none";

        resetButton.addEventListener("pointerdown", function(){    
    
            resetFunc();
    
            seconds = "0";
            minutes = "0";
            hour = "0";

            location.reload();
    
        });

    });

    resetButton.addEventListener("pointerdown", function(){
        clearInterval(intervalOfAll);

        resetFunc();
        preventingRePressToButton.style.display = "none";

        seconds = "0";
        minutes = "0";
        hour = "0";

    });



});

recordButton.addEventListener("pointerdown", function(){
    flagFunc();
});

saveButton.addEventListener("pointerdown", function(){
    if(hourMinuteSecondArray.includes(hourTag.innerText || minuteTag.innerText || secondTag.innerText)){
        hourMinuteSecondArray.pop();
        hourMinuteSecondArray.pop();
        hourMinuteSecondArray.pop();
    };

    hourMinuteSecondArray.push(hourTag.innerText, minuteTag.innerText, secondTag.innerText);

    localStorage.setItem("Chronometer Time", hourMinuteSecondArray);
    localStorage.setItem("Times Which Will Output", timesWhichWillOutput);

    console.log(hourMinuteSecondArray);
});

function outputTheItemsWhichSavedOnLocalStorage(){
    let getChronometerTime = localStorage.getItem("Chronometer Time");
    let getTheTimesWhichWillOutput = localStorage.getItem("Times Which Will Output");

    let chronometerTimeBecame = getChronometerTime.split(",");

    let hourWithNumber = Number(chronometerTimeBecame[0]);
    let minuteWithNumber = Number(chronometerTimeBecame[1]);
    let secondWithNumber = Number(chronometerTimeBecame[2]);

    hourTag.innerText = hourWithNumber;
    minuteTag.innerText = minuteWithNumber;
    secondTag.innerText = secondWithNumber;

    if(hourTag.innerText.length < 1){
        hourTag.innerText = "0" + hourWithNumber;
    } else{
        hourTag.innerText = hourWithNumber;
    } 

    if(minuteTag.innerText.length < 1){
        minuteTag.innerText = "0" + minuteWithNumber;
    } else{
        minuteTag.innerText = minuteWithNumber;
    }

    if(secondTag.innerText.length < 1){
        secondTag.innerText = "0" + secondWithNumber;
    } else{
        secondTag.innerText = secondWithNumber;
    }

    if(hourWithNumber < 10){
        hourTag.innerText = "0" + hourWithNumber;
    }

    if(minuteWithNumber < 10){
        minuteTag.innerText = "0" + minuteWithNumber;
    }

    if(secondWithNumber < 10){
        secondTag.innerText = "0" + secondWithNumber;
    }

    chronometerItself.style.fontSize = "2rem";

    let timesWhichWillOutputBecame = getTheTimesWhichWillOutput.split(",");

    timesWhichWillOutputBecame.forEach(function(parameter){
        let oldFlagElement = document.createElement("p");
        oldFlagElement.classList.add("flagelement");
        oldFlagElement.style.fontSize = "2rem";
        oldFlagElement.innerText = parameter;
        savedRecords.append(oldFlagElement);
    });

    Array.from(savedRecords.children).forEach(function(parameter){
        timesWhichWillOutput.push(parameter.innerText);
    });

    console.log(timesWhichWillOutput);
};

outputTheItemsWhichSavedOnLocalStorage();

resetButton.addEventListener("pointerdown", function(){
    clearInterval(intervalOfAll);

    resetFunc();

    preventingRePressToButton.style.display = "none";

    seconds = "0";
    minutes = "0";
    hour = "0";
});









