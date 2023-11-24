// navigation



var mainNav = document.querySelector ("#mainNav");
var burgerBtn = document.querySelector("#burger button")
console.log(burgerBtn);
var signInUpButtons = document.querySelector("#sign-in-up-buttons")

var canYouSeeMainNav = false;
var canYouSeeButtons = false;

//select all section tags in the html document, add then to the sectionTags variable 
//var sectionTags = document.querySelectorAll("section");
//function is for repeadly calling a repetative task, also just like python
function showNav(){
    console.log("button clicked");
    if(canYouSeeMainNav === false){
    mainNav.classList.add("showmainNav");
    signInUpButtons.classList.add("showSignIn");
    canYouSeeMainNav = true;

}
else{
    mainNav.classList.remove("showmainNav");
    signInUpButtons.classList.remove(showSignIn)
    canYouSeeMainNav = false;
}
}

burgerBtn.addEventListener("click", showNav);
//this calls a function, just like python
//showNav()


//Signin

var signInBtn = document.querySelector ("#sign-in");
var signInContainer = document.querySelector ("#signin-container");
var closeSignUpModalBtn = document.querySelector ("#close-sign-up-modal-btn");

function showSignInModal() {
    //console.log("click show");
    signInContainer.classList.add("show-signIn-container")
    mainNav.classList.remove("showmainNav");
    signInUpButtons.classList.remove(showSignIn)

}

function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container")
    //hide the navigation on open
    
}

signInBtn.addEventListener("click", showSignInModal);
closeSignUpModalBtn.addEventListener("click", hideSignInModal);
signInContainer.addEventListener("click", hideSignInModal)