'use strict';
const destInput = document.getElementById("destination-inp")
destInput.addEventListener("input", ()=>{
    console.log("listening to input")
    destInput.setCustomValidity("")
    destInput.checkValidity()
})
destInput.addEventListener("invalid", ()=>{
    console.log("invalid input")
    if( destInput.value === "" ) destInput.setCustomValidity("please fill out this field")
    else {
        destInput.setCustomValidity("Please lengthen this text to 2 characters or more (your are curently using 1 character)")
        isValid = false
    }
})    
