var mainNav=document.querySelector("#mainNav"),burgerBtn=document.querySelector("#burger button");console.log(burgerBtn);var signInUpButtons=document.querySelector("#sign-in-up-buttons"),canYouSeeMainNav=!1,canYouSeeButtons=!1;function showNav(){console.log("button clicked"),!1===canYouSeeMainNav?(mainNav.classList.add("showmainNav"),signInUpButtons.classList.add("showSignIn"),canYouSeeMainNav=!0):(mainNav.classList.remove("showmainNav"),signInUpButtons.classList.remove(showSignIn),canYouSeeMainNav=!1)}burgerBtn.addEventListener("click",showNav);var signInBtn=document.querySelector("#sign-in"),signInContainer=document.querySelector("#signin-container"),closeSignUpModalBtn=document.querySelector("#close-sign-up-modal-btn");function showSignInModal(){signInContainer.classList.add("show-signIn-container"),mainNav.classList.remove("showmainNav"),signInUpButtons.classList.remove(showSignIn)}function hideSignInModal(){signInContainer.classList.remove("show-signIn-container")}signInBtn.addEventListener("click",showSignInModal),closeSignUpModalBtn.addEventListener("click",hideSignInModal),signInContainer.addEventListener("click",hideSignInModal);