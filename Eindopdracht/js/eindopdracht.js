/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var project = document.querySelector("#project");
var stage = document.querySelector("#stage");
var projectRadio = document.querySelectorAll('[type="radio"')[0];
var stageRadio = document.querySelectorAll('[type="radio"')[1];

var check = function() {
    if (projectRadio.checked) {
        project.classList.remove("invisible");
        stage.classList.add("invisible");
    }

    else {
        stage.classList.remove("invisible");
        project.classList.add("invisible");
    }
};

projectRadio.addEventListener("click", check);
stageRadio.addEventListener("click", check);
