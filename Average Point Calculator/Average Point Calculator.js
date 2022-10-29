let writingBox = document.querySelector("input");
let deleteLastNumber = document.querySelector(".deletelastnumber");
let savePoints = document.querySelector(".savepoints");
let getAveragePoint = document.querySelector(".getaverage");
let resetButton = document.querySelector(".resetbutton");
let outputs = document.querySelector(".outputs");
let stringOfAveragePoint = document.querySelector(".string-of-average-point");
let stringOfPoints = document.querySelector(".string-of-points");

let allPoints = [];

let writePointsDown = document.createElement("p");
writePointsDown.classList.add("stringofpoints");
writePointsDown.textContent = "Currently written points are: ";
stringOfPoints.append(writePointsDown);

savePoints.addEventListener("click", function(){
    let convertValueToNumber = Number(writingBox.value);
    allPoints.push(convertValueToNumber);

    if(convertValueToNumber === 0){
        allPoints.pop();
        writingBox.value = "";
    };

    if(convertValueToNumber !== 0){
        writePointsDown.textContent += `${convertValueToNumber}, `;

        localStorage.setItem("Points", [...allPoints]);

        writingBox.value = "";

    };

});

deleteLastNumber.addEventListener("click", function(){
    allPoints.pop();

    writePointsDown.textContent += `(last number was deleted), `;
});

let writePointsOnScreen = document.createElement("p");

getAveragePoint.addEventListener("click", function(){
    let findAverage = allPoints.reduce(function(parameterOne, parameterTwo){
        return parameterOne + parameterTwo;
    }, 0);

    let finalAverage = findAverage / allPoints.length;


    writePointsOnScreen.textContent = `Average Of All Points: ${finalAverage}`;
    stringOfAveragePoint.append(writePointsOnScreen);

    localStorage.setItem("Average Point Of Last Time", finalAverage);
});

let showLocalStorageItem = document.createElement("p");
let showAllOfThePoints = document.createElement("p");

function getUnresetDatasFromLocalStorage(){
    let getDataFromLocalStorage = localStorage.getItem("Average Point Of Last Time");
    let getPointsFromLocalStorage = localStorage.getItem("Points");

    showAllOfThePoints.textContent = `All written points before: ${getPointsFromLocalStorage}. you can continue your calculation with write and send that points again.`;
    stringOfPoints.append(showAllOfThePoints);

    if(showAllOfThePoints.textContent.includes("null")){
        showAllOfThePoints.remove();
    };

    showLocalStorageItem.textContent = `Most recent point which you found: ${getDataFromLocalStorage}`;
    stringOfAveragePoint.append(showLocalStorageItem);

    if(showLocalStorageItem.textContent.includes("null")){
        showLocalStorageItem.remove();
    };

};

 getUnresetDatasFromLocalStorage();

function resetTheDatas(){
    localStorage.removeItem("Points");
    localStorage.removeItem("Average Point Of Last Time");
};


resetButton.addEventListener("click", function(){
    allPoints.splice(0, ...allPoints);

    writePointsDown.remove();

    //writePointsOnScreen.remove();

    resetTheDatas();

    location.reload();
});







