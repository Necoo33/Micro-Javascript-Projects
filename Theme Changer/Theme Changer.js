let wholeBody = document.querySelector("body");
let logo = document.querySelector(".logo");
let heroQuote = document.querySelector(".hero p");
let buttons = document.querySelectorAll("button");
let buttonLinks = document.querySelectorAll("button a");
let stringTitle = document.querySelector("main h2");
let mainStrings = document.querySelectorAll("main p");
let lowerLinks = document.querySelectorAll("li a");
let footerString = document.querySelector("footer p");

let lightTheme = document.querySelector("#light");
let darkTheme = document.querySelector("#dark");
let pinkTheme = document.querySelector("#pink");

lightTheme.addEventListener("focus", function(){
    wholeBody.style.backgroundColor = "#c5c2c2";
    logo.style.color = "#181818";
    heroQuote.style.color = "#181818";
    stringTitle.style.color = "#181818";
    footerString.style.color = "#181818";

    buttons.forEach(function(parameter){
        parameter.style.backgroundColor = "#181818";
    });

    buttonLinks.forEach(function(parameter){
        parameter.style.color = "#c5c2c2";
    });

    mainStrings.forEach(function(parameter){
        parameter.style.color = "#181818";
    });

    lowerLinks.forEach(function(parameter){
        parameter.style.color = "#181818";
    });

    localStorage.setItem("checked", "light");
});

darkTheme.addEventListener("focus", function(){
    wholeBody.style.backgroundColor = "#181818";
    logo.style.color = "#c5c2c2";
    heroQuote.style.color = "#c5c2c2";
    stringTitle.style.color = "#c5c2c2";
    footerString.style.color = "#c5c2c2";

    buttons.forEach(function(parameter){
        parameter.style.backgroundColor = "#c5c2c2"
    });

    buttonLinks.forEach(function(parameter){
        parameter.style.color = "#181818";
    });

    mainStrings.forEach(function(parameter){
        parameter.style.color = "#c5c2c2";
    });

    lowerLinks.forEach(function(parameter){
        parameter.style.color = "#c5c2c2";
    });

    localStorage.setItem("checked", "dark");
});

pinkTheme.addEventListener("focus", function(){
    wholeBody.style.backgroundColor = "#f82097";
    logo.style.color = "#181818";
    heroQuote.style.color = "#181818";
    stringTitle.style.color = "#181818";
    footerString.style.color = "#181818";

    buttons.forEach(function(parameter){
        parameter.style.backgroundColor = "#181818";
    });

    buttonLinks.forEach(function(parameter){
        parameter.style.color = "#f82097";
    });

    mainStrings.forEach(function(parameter){
        parameter.style.color = "#181818";
    });

    lowerLinks.forEach(function(parameter){
        parameter.style.color = "#181818";
    });

    localStorage.setItem("checked", "pink");
});

function rememberWhichThemeSelected(){
    let getLocalStorageData = localStorage.getItem("checked");

    if(getLocalStorageData === "light"){
        lightTheme.focus();
        lightTheme.checked = true;
        lightTheme.blur();
    };

    if(getLocalStorageData === "dark"){
        darkTheme.focus();
        darkTheme.checked = true;
        darkTheme.blur();
    };

    if(getLocalStorageData === "pink"){
        pinkTheme.focus();
        pinkTheme.checked = true;
        pinkTheme.blur();
    };
};

rememberWhichThemeSelected();


