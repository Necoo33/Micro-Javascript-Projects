// this code completely belongs to me.

let imagesTag = document.querySelector(".images-tag");

let leftSlideButton = document.querySelector(".slide-buttons:first-of-type");
let rightSlideButton = document.querySelector(".slide-buttons:last-of-type");

let isPointerDown = false;

let recordsOfDraggingToLeft = [];

let imagesToClick = document.querySelectorAll("img");

function deleteTheArrowOfLastingSide(){
    recordsOfDraggingToLeft.push(imagesTag.scrollLeft);
    let reverseRecordsOfDraggingToLeft = recordsOfDraggingToLeft.reverse();

    if((reverseRecordsOfDraggingToLeft[0] !== reverseRecordsOfDraggingToLeft[1])){
        leftSlideButton.style.visibility = "visible";
        console.log(imagesTag.scrollWidth);
    }

    console.log(reverseRecordsOfDraggingToLeft);

    if(Math.round(reverseRecordsOfDraggingToLeft[0]) + imagesTag.clientWidth === imagesTag.scrollWidth){
        rightSlideButton.style.visibility = "hidden";
    }

    if(Math.round(reverseRecordsOfDraggingToLeft[0]) + imagesTag.clientWidth !== imagesTag.scrollWidth){
        rightSlideButton.style.visibility = "visible";
    }

    if(recordsOfDraggingToLeft[0] === 0 && (reverseRecordsOfDraggingToLeft[1] - reverseRecordsOfDraggingToLeft[0]) < 300){
        leftSlideButton.style.visibility = "hidden";
    }
}

rightSlideButton.addEventListener("pointerdown", function(){
    imagesTag.scrollLeft += 300;
    
    deleteTheArrowOfLastingSide();
});

leftSlideButton.addEventListener("pointerdown", function(){
    imagesTag.scrollLeft -= 300;
    
    deleteTheArrowOfLastingSide();
});

imagesTag.addEventListener("pointerdown", function(){
    isPointerDown = true;
    imagesTag.classList.remove("dragging-bug-fix");
    
    deleteTheArrowOfLastingSide();
});

imagesTag.addEventListener("pointerup", () => isPointerDown = false);

imagesTag.addEventListener("pointermove", function(parameter){
    if(!isPointerDown) return;

    imagesTag.classList.add("dragging-bug-fix");

    imagesTag.scrollLeft -= parameter.movementX;
});

imagesTag.addEventListener("wheel", function(parameter){
    console.log(parameter);

    if(parameter.wheelDeltaY > 0){
        imagesTag.scrollLeft -= 200;
    } else if(parameter.wheelDeltaY < 0){
        imagesTag.scrollLeft += 200;
    }

    deleteTheArrowOfLastingSide();

})

imagesToClick.forEach(function(parameter){
    
    let isImagesPressed = true;

    imagesTag.addEventListener("scroll", () => isImagesPressed = false);

    if(!isImagesPressed){
        imagesTag.classList.add("events-cannot-occur");

        imagesTag.addEventListener("pointerup", () => isImagesPressed = true);
    };

    imagesTag.addEventListener("pointerdown", () => isImagesPressed = true);

    if(isImagesPressed){
        imagesTag.classList.remove("events-cannot-occur");
    };

    parameter.addEventListener("pointerup", function(){
        if(isImagesPressed){ 
            parameter.classList.add("is-pressed");
            parameter.classList.remove("is-not-pressed");
        };
    });
});
