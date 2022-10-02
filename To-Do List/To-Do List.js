// This query is averagely my original code, from 18th to 42th lines is completely mine, ı took later
// lines mostly from net ninja, ı just fit them to my other codes and made some little changes.
// css and html styles are completely mine.

// Selecting All the items which we need.

let divOfAll = document.querySelector(".todolist-container");
let searchBox = document.querySelector("form input");

let toDoItemContainer = document.querySelector(".todo-item-container");
let deletePictures = document.querySelectorAll("img");

let toDoItemWriteInput = document.querySelector("textarea");
let toDoAppender = document.querySelector(".todo-item-appender button");

// Create and append new To-Do items.

toDoAppender.addEventListener("click", function(parameter){
    let newDiv = document.createElement("div");
    newDiv.classList.add("item-self");
    toDoItemContainer.append(newDiv);

    let newDivsNewParagraph = document.createElement("p");
    let toDoWritings = toDoItemWriteInput.value.trim();
    newDivsNewParagraph.innerText = toDoWritings;
    newDivsNewParagraph.classList.add("todo-item");
    newDiv.append(newDivsNewParagraph);

    if(toDoWritings < 1){
        parameter.setAttribute("onclick", newDiv.remove());
    } 

    toDoItemWriteInput.value = "";

    let newDeletePicture = document.createElement("img");
    newDeletePicture.classList.add("symbol");
    newDeletePicture.classList.add("trash");
    newDeletePicture.setAttribute("src", "delete.svg");
    newDeletePicture.style.maxWidth = "30px";
    newDiv.append(newDeletePicture);

});

// deleting all existing To-Do items:

divOfAll.addEventListener("click", function(parameter){
    if(parameter.target.classList.contains("symbol")){
        parameter.target.parentElement.remove();
    };
});

// Searching the To Do Items.

let toDoListFiltering = function(parameter){
    Array.from(toDoItemContainer.children).filter(function(parameterTwo){
        return !parameterTwo.textContent.includes(parameter);
    }).forEach(function(parameterThree){  
        parameterThree.style.display = "none";
    });

    Array.from(toDoItemContainer.children).filter(function(parameterTwo){
        return parameterTwo.textContent.includes(parameter);
    }).forEach(function(parameterThree){  
        parameterThree.style.display = "flex";
    });
};

searchBox.addEventListener("keyup", function(){
    let searchWritings = searchBox.value.trim();

    toDoListFiltering(searchWritings);
});

