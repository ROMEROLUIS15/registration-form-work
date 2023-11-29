
const form = document.getElementById("form");
const nameField = document.getElementById("name");
const lastNameField = document.getElementById("lastname");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const paragraph = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let getIn = false
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    paragraph.innerHTML = ""
    if(nameField.value.length <2){
        warnings += `Invalid name <br>`
        getIn = true
    }
    if(lastNameField.value.length <3){
        warnings += `Invalid last name <br>`
        getIn = true
    }
    if(!emailValidation.test(emailField.value)){
        warnings += `Invalid email <br>`
        getIn = true
    }
    if(passwordField.value.length <8){
        warnings += `Invalid password <br>`
        getIn = true
    }
    if(getIn){
        paragraph.innerHTML= `<p>${warnings}</p>`
        // paragraph.innerHTML= warnings
    }
})
