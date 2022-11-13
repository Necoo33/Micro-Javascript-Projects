// This is my original and simple form with my own RegEx. Especially ı worked hard on password RegEx. In the
// end, it acts as described in affiliated section of html(most of the time).

let formItself = document.querySelector("form");

let nameInput = document.querySelector("#full-name");
let passwordInput = document.querySelector("#password-first");
let passwordInputTwo = document.querySelector("#password-second");
let eMailInput = document.querySelector("#e-mail");
let telInput = document.querySelector("#telephone");
let submitButton = document.querySelector("input:last-of-type");

let nameInformation = document.querySelector(".nameinformation");
let passwordInformation = document.querySelector(".firstpasswordinformation");
let secondPasswordInformation = document.querySelector(".secondpasswordinformation");
let eMailInformation = document.querySelector(".emailinformation");
let telInformation = document.querySelector(".telephoneinformation");

let validClass = document.querySelector(".valid");
let invalidClass = document.querySelector(".invalid");

let nameRegEx = /^[A-ZIĞÜÇÖŞa-zığüçöş]$/;
let passwordRegEx = /([A-ZIĞÜÇÖŞ]{1,16}[a-zığüçöş]{1,16}[\d]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16})|([A-ZIĞÜÇÖŞ]{1,16}[\d]{1,16}[a-zığüçöş]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16})|([A-ZIĞÜÇÖŞ]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[a-zığüçöş]{1,16}[\d]{1,16})|([A-ZIĞÜÇÖŞ]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[\d]{1,16}[a-zığüçöş]{1,16})|([A-ZIĞÜÇÖŞ]{1,16}[a-zığüçöş]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[\d]{1,16})|([A-ZIĞÜÇÖŞ]{1,16}[\d]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[a-zığüçöş]{1,16})|([a-zığüçöş]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[\d]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16})|([a-zığüçöş]{1,16}[\d]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16})|([a-zığüçöş]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[\d]{1,16})|([a-zığüçöş]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[\d]{1,16}[A-ZIĞÜÇÖŞ]{1,16})|([a-zığüçöş]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[\d]{1,16})|([a-zığüçöş]{1,16}[\d]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[A-ZIĞÜÇÖŞ]{1,16})|([\d]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[a-zığüçöş]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16})|([\d]{1,16}[a-zığüçöş]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16})|([\d]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[a-zığüçöş]{1,16})|([\d]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[a-zığüçöş]{1,16}[A-ZIĞÜÇÖŞ]{1,16})|([\d]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[a-zığüçöş]{1,16})|([\d]{1,16}[a-zığüçöş]{1,16}[!<>'£^#$+%½&{}=_*~]{1,16}[A-ZIĞÜÇÖŞ]{1,16})|([!<>'£^#$+%½&{}=_*~]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[a-zığüçöş]{1,16}[\d]{1,16})|([!<>'£^#$+%½&{}=_*~]{1,16}[a-zığüçöş]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[\d]{1,16})|([!<>'£^#$+%½&{}=_*~]{1,16}[\d]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[a-zığüçöş]{1,16})|([!<>'£^#$+%½&{}=_*~]{1,16}[A-ZIĞÜÇÖŞ]{1,16}[\d]{1,16}[a-zığüçöş]{1,16})|([!<>'£^#$+%½&{}=_*~]{1,16}[A-ZIÜÇÖŞ]{1,16}[a-zığüçöş]{1,16}[\d]{1,16})|([!<>'£^#$+%½&{}=_*~]{1,16}[\d]{1,16}[a-zığüçöş]{1,16}[A-ZIĞÜÇÖŞ]{1,16}){6,16}/g;
let eMailRegEx = /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let telRegEx = /^[0-9]{11}$/;

nameInput.addEventListener("keyup", function(){
    if(nameInput.value.match(nameRegEx)){
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
    } else{
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
    };

    if(nameInput.value.length >= 2 && nameInput.value.length <= 30){
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
    } else{
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
    };
})

passwordInput.addEventListener("keyup", function(){
    if(passwordInput.value.match(passwordRegEx)){
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");
    } else{
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
    };

    passwordInputTwo.addEventListener("keyup", function(){
        if(passwordInputTwo.value === passwordInput.value){
            passwordInputTwo.classList.add("valid");
            passwordInputTwo.classList.remove("invalid");
        } else{
            passwordInputTwo.classList.add("invalid");
            passwordInputTwo.classList.remove("valid");
        };
    })
});

eMailInput.addEventListener("keyup", function(){
    if(eMailInput.value.match(eMailRegEx)){
        eMailInput.classList.add("valid");
        eMailInput.classList.remove("invalid");
    } else{
        eMailInput.classList.add("invalid");
        eMailInput.classList.remove("valid");
    };
});

telInput.addEventListener("keyup", function(){
    if(telInput.value.match(telRegEx)){
        telInput.classList.add("valid");
        telInput.classList.remove("invalid");
    } else{
        telInput.classList.add("invalid");
        telInput.classList.remove("valid");
    };
});

formItself.addEventListener("submit", function(parameter){
    if(nameInput.classList.contains("valid") && passwordInput.classList.contains("valid") && passwordInputTwo.classList.contains("valid") && eMailInput.classList.contains("valid") && telInput.classList.contains("valid")){
        parameter.preventDefault();
        localStorage.setItem("İsim", nameInput.value);
        localStorage.setItem("Şifre", JSON.stringify(passwordInput.value));
        localStorage.setItem("E Posta", JSON.stringify(eMailInput.value));
        localStorage.setItem("Telefon", JSON.stringify(telInput.value));
        location.assign("Sample Of Success Of Register Form.html");
    };

    if(!nameInput.classList.contains("valid")){
        parameter.preventDefault();
        let nameInputFailText = document.createElement("p");
        nameInputFailText.textContent = "Your Name is not valid.";
        nameInformation.append(nameInputFailText);
    };

    if(!passwordInput.classList.contains("valid")){
        parameter.preventDefault();
        let passwordInputFailText = document.createElement("p");
        passwordInputFailText.textContent = "Your Password is not valid.";
        passwordInformation.append(passwordInputFailText);
    };

    if(!passwordInputTwo.classList.contains("valid")){
        parameter.preventDefault();
        let passwordInputFailTextTwo = document.createElement("p");
        passwordInputFailTextTwo.textContent = "Your iterating password not same with previous one.";
        secondPasswordInformation.append(passwordInputFailTextTwo);
    };

    if(!eMailInput.classList.contains("valid")){
        parameter.preventDefault();
        let eMailInputFailText = document.createElement("p");
        eMailInputFailText.textContent = "Your E-Mail is not valid.";
        eMailInformation.append(eMailInputFailText);
    };

    if(!telInput.classList.contains("valid")){
        parameter.preventDefault();
        let telInputFailText = document.createElement("p");
        telInputFailText.textContent = "Your phone number is not valid.";
        telInformation.append(telInputFailText);
    };
});
