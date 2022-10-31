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

savePointButton.addEventListener("click", function(){
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
        parameter.addEventListener("click", function(){
            writeBox.value = Number(parameter.textContent);
        });
    });

});

deleteLastAddedNumber.addEventListener("click", function(){
    allPoints.pop();

    localStorage.setItem("Committed Points", [...allPoints]);

    writeNotesDown.lastChild.remove();
});

let writeNotesToScreen = document.createElement("p");

getAveragePointButton.addEventListener("click", function(){
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
        parameter.addEventListener("click", function(){
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


resetButton.addEventListener("click", function(){
    allPoints.splice(0, ...allPoints);

    writeNotesDown.remove();

    writeNotesToScreen.remove();

    resetTheDatas();

    location.reload();
});







