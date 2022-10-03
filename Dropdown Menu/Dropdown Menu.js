// On screens with more larger than 767px, This is a dropdown menu which opens with putting the pointer 
// on dropdown menu and it has another inner dropdown menu which works the same way.

// On the screens with narrower than that this is a dropdown menu which opening by touching the
// hamburger menu and it could be closed by retouch or if its activated, pressing the close button. 

// this is my original code almost completely.

// -------------------------------------------- First Dropdown Menu ------------------------------------

let dropDownMenuButton = document.querySelector(".dropdownmenu");
let dropDownList = document.querySelector(".dropdownlist");
let dropDownUnits = document.querySelectorAll(".dropdownunits");

dropDownMenuButton.addEventListener("mouseover", function(){
    dropDownList.style.scale = 1;
});

dropDownMenuButton.addEventListener("mouseout", function(){
    dropDownList.style.scale = 0;
});

dropDownUnits.forEach(function(parameter){
    parameter.addEventListener("mouseover", function(){
        dropDownList.style.scale = 1;
    });

    parameter.addEventListener("mouseout", function(){
        dropDownList.style.scale = 0;
    });
});

// ------------------------------------------- Second Dropdown Menu --------------------------------

let secondDropDownMenuButton = document.querySelector(".dropdownmenutwo");
let secondDropDownList = document.querySelector(".dropdownlisttwo");
let secondDropDownUnits = document.querySelectorAll(".dropdownunitstwo");

secondDropDownMenuButton.addEventListener("mouseover", function(){
    secondDropDownList.style.scale = 1;
});

secondDropDownMenuButton.addEventListener("mouseout", function(){
    secondDropDownList.style.scale = 0;
});

secondDropDownUnits.forEach(function(parameter){
    parameter.addEventListener("mouseover", function(){
        secondDropDownList.style.scale = 1;
        dropDownList.style.scale = 1;
    });

    parameter.addEventListener("mouseout", function(){
        secondDropDownList.style.scale = 0;
        dropDownList.style.scale = 0;
    });
});

// -------------------------------------- Mobile Dropdown Menu ------------------------

// if you want that menu with close button, just comment self-closing function and uncomment close-button
// function. But at the same time be sure about uncomment the close button tag in html.

let mobileDropDownMenuButton = document.querySelector(".mobiledropdownmenu");
let mobileDropDownList = document.querySelector(".mobiledropdownlist");
let closeButton = document.querySelector(".closingmobileddmenu");

// self-closing function

mobileDropDownMenuButton.addEventListener("touchstart", function(){
  mobileDropDownList.classList.toggle("mobiledropdownmenuopening");
});

//close-button functions.

/*
mobileDropDownMenuButton.addEventListener("touchstart", function(){
  mobileDropDownList.style.scale = 1;
});

closeButton.addEventListener("touchstart", function(){
    mobileDropDownList.style.scale = 0;
});*/

