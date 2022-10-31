// this is completely my original code. It takes the number which committed, find average of them, 
// and save on local storage of the result and committed points of last calculation.
// when page refresh, it takes that data from local storage and show it on the screen with
// fit strings. The user can continue the calculation with easily commit one number and 
// press or touch the points which committed before reload and press commit again. By that query,
// could calculate too many points even if page were reload.

// That whole project would work both smartphones and pc's.

let allPage = document.querySelector("body");
let writeBox = document.querySelector("input");
let deleteLastAddedNumber = document.querySelector(".deletelastnumber");
let savePointButton = document.querySelector(".savepoint");
let getAveragePointButton = document.querySelector(".getaveragepoint");
let resetButton = document.querySelector(".resetbutton");
let outputOfAveragePoint = document.querySelector(".outputofaveragepoint");
let outputOfPointsParagraph = document.querySelector(".outputofpointsparagraph");

let allPoints = [];

let writeNotesDown = document.createElement("p");
writeNotesDown.classList.add("stringofpoints");
writeNotesDown.textContent = "Recently Committed Points By Order: ";
outputOfPointsParagraph.append(writeNotesDown);

savePointButton.addEventListener("pointerdown", function(){
    let convertInputToNumber = Number(writeBox.value);
    allPoints.push(convertInputToNumber);

    if(convertInputToNumber === 0){
        allPoints.pop();
        writeBox.value = "";
    };

    if(convertInputToNumber !== 0){
        writeNotesDown.innerHTML += `<span class='spanclass'>${convertInputToNumber}</span>`;

        localStorage.setItem("Committed Points", [...allPoints]);

        writeBox.value = "";

    };

    Array.from(document.querySelectorAll(".spanclass")).forEach(function(parameter){
        parameter.addEventListener("pointerdown", function(){
            writeBox.value = Number(parameter.textContent);
        });
    });

});

deleteLastAddedNumber.addEventListener("pointerdown", function(){
    allPoints.pop();

    localStorage.setItem("Committed Points", [...allPoints]);

    writeNotesDown.lastChild.remove();
});

let writeNotesToScreen = document.createElement("p");

getAveragePointButton.addEventListener("pointerdown", function(){
    let findAverage = allPoints.reduce(function(parameterOne, parameterTwo){
        return parameterOne + parameterTwo;
    }, 0);

    let finalAverage = findAverage / allPoints.length;


    writeNotesToScreen.textContent = `Average Point: ${finalAverage}`;
    outputOfAveragePoint.append(writeNotesToScreen);

    localStorage.setItem("Last Shown Average Point", finalAverage);
});

let showLocalStorageData = document.createElement("p");
let showAllPoints = document.createElement("p");

function getUnresetDatasFromLocalStorage(){
    let getLastDataFromLocalStorage = localStorage.getItem("Last Shown Average Point");
    let takeCommittedPointsFromLocalStorage = localStorage.getItem("Committed Points");

    let makeAnArrayFromCommittedPoints = takeCommittedPointsFromLocalStorage.split(",");

    showAllPoints.innerHTML = "Points including committed on last time: ";

    makeAnArrayFromCommittedPoints.forEach(function(parameter){
        showAllPoints.innerHTML += `<span class="spanclass">${parameter}</span>`;   
    });

    showAllPoints.innerHTML += "You can put that points to the input field by pressing on them. Before done that, be sure you already committed at least one point.";

    Array.from(document.querySelectorAll(".spanclass")).forEach(function(parameter){
        parameter.addEventListener("pointerdown", function(){
            writeBox.value = parameter.textContent;
        });
    });

    outputOfPointsParagraph.append(showAllPoints);

    if(showAllPoints.textContent.includes("null")){
        showAllPoints.remove();
    };

    showLocalStorageData.textContent = `Founded point on last calculation: ${getLastDataFromLocalStorage}`;
    outputOfAveragePoint.append(showLocalStorageData);

    if(showLocalStorageData.textContent.includes("null")){
        showLocalStorageData.remove();
    };

};

getUnresetDatasFromLocalStorage();

function resetTheDatas(){
    localStorage.removeItem("Committed Points");
    localStorage.removeItem("Last Shown Average Point");
};


resetButton.addEventListener("pointerdown", function(){
    allPoints.splice(0, ...allPoints);

    writeNotesDown.remove();

    writeNotesToScreen.remove();

    resetTheDatas();

    location.reload();
});







