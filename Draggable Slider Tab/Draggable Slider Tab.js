// I took average of that query from a youtuber, CodingNepal and i mutated many things of it. For example, the first declared ,
// function is completely my query. I also write html and css with more different way.

let buttons = document.querySelector(".buttons");

let slideToLeftButton = document.querySelector(".sliding-buttons:first-of-type");
let slideToRightButton = document.querySelector(".sliding-buttons:last-of-type");

let isDraggingTrue = false;

let buttonsWillClick = document.querySelectorAll("button");

let draggingPoints = []; 

function removeTheArrowOfTheFinishedSide(){
    draggingPoints.push(buttons.scrollLeft);
    let reverseDraggingPoints = draggingPoints.reverse();

    if((reverseDraggingPoints[0] !== reverseDraggingPoints[1])){
        slideToLeftButton.style.visibility = "visible";
    }

    if(Math.round(reverseDraggingPoints[0]) + buttons.clientWidth === buttons.scrollWidth){
        slideToRightButton.style.visibility = "hidden";
    }

    if(Math.round(reverseDraggingPoints[0]) + buttons.clientWidth !== buttons.scrollWidth){
        slideToRightButton.style.visibility = "visible";
    }

    if(draggingPoints[0] === 0 && (reverseDraggingPoints[1] - reverseDraggingPoints[0]) < 400){
        slideToLeftButton.style.visibility = "hidden";
    }
}

buttons.addEventListener("pointerdown", function(){
    isDraggingTrue = true;
});

document.addEventListener("pointerup", function(){
    isDraggingTrue = false;

    buttons.classList.remove("dragging-bug-fix");
});

buttons.addEventListener("pointermove", function(parameter){
    if(!isDraggingTrue) return;
    buttons.classList.add("dragging-bug-fix");

    buttons.scrollLeft -= parameter.movementX;

    removeTheArrowOfTheFinishedSide();
    
})

slideToLeftButton.addEventListener("pointerdown", function(){
    buttons.scrollLeft -= 325;

    removeTheArrowOfTheFinishedSide()
});

slideToRightButton.addEventListener("pointerdown", function(){
    buttons.scrollLeft += 325;

    removeTheArrowOfTheFinishedSide();
});

buttons.addEventListener("wheel", function(parameter){
    console.log(parameter);

    if(parameter.wheelDeltaY > 0){
        buttons.scrollLeft -= 200;
    } else if(parameter.wheelDeltaY < 0){
        buttons.scrollLeft += 200;
    }

    removeTheArrowOfTheFinishedSide();
});

buttonsWillClick.forEach(function(parameter){

        let isPressingTrue = true;

        buttons.addEventListener("scroll", () => isPressingTrue = false);

        if(!isPressingTrue){
            buttons.classList.add("event-cant-occur");

            buttons.addEventListener("pointerup", () => isPressingTrue = true);
        }

        buttons.addEventListener("pointerdown", () => isPressingTrue = true);

        if(isPressingTrue){
            buttons.classList.remove("event-cant-occur");
        }

        console.log(isPressingTrue);


    parameter.addEventListener("pointerup", function(){
        
        if(isPressingTrue){
            buttons.querySelector(".clicked").classList.add("unclicked");
            buttons.querySelector(".clicked").classList.remove("clicked");
    
            parameter.classList.add("clicked");
            parameter.classList.remove("unclicked");
        }
    });
});

