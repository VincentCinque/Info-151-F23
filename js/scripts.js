

var mainNav = document.querySelector ("#mainNav");

var burgerBtn = document.querySelector("#burger button")
console.log(burgerBtn);

//select all section tags in the html document, add then to the sectionTags variable 
//var sectionTags = document.querySelectorAll("section");

//function is for repeadly calling a repetative task, also just like python
function showNav(){
    console.log("button clicked");
    mainNav.classList.add("showmainNav");
}

burgerBtn.addEventListener("click", showNav);
//this calls a function, just like python
//showNav()

