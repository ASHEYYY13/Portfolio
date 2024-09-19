const heroimage = document.getElementById("hero-image");

const tl = document.querySelector("#grid-top-left");
const tr = document.querySelector("#grid-top-right");
const bl = document.querySelector("#grid-bottom-left");
const br = document.querySelector("#grid-bottom-right");

const tlBtn = document.querySelector("#grid-top-left-btn");
const trBtn = document.querySelector("#grid-top-right-btn");
const blBtn = document.querySelector("#grid-bottom-left-btn");
const brBtn = document.querySelector("#grid-bottom-right-btn");

const tlContent = document.querySelector("#grid-top-left-content");
const trContent = document.querySelector("#grid-top-right-content");
const blContent = document.querySelector("#grid-bottom-left-content");
const brContent = document.querySelector("#grid-bottom-right-content");

const project1 = document.querySelector(".p-1");
const project2 = document.querySelector(".p-2");
// const project3 = document.querySelector(".p-3");

const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";


let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

let activecorner ="";


window.addEventListener("resize",windowResize);

function windowResize() {
        switch(activecorner) {
            case "top-left": 
             if(window.innerWidth<=1100) {
                tlActive = "translateX(0) translateY(0)";
                tlContent.style.transform = "translateX(0) translateY(0)";
                tlContent.style.width = "100vw";
                tlContent.style.height = "100vh";
                tlContent.style.top = "0";
                tlContent.style.display = "flex";
                tlContent.style.alignItems = "center";
                tlContent.style.justifyContent = "center";
                tlContent.style.background = "var(--bg-transparent)";
                tlContent.style.zIndex = "200";
                tlBtn.style.zIndex = "300";
                trBtn.style.zIndex ="100";
                blBtn.style.zIndex ="100";
                brBtn.style.zIndex ="100";

             }
             else {
                tlActive = "translateX(5vw) translateY(0)";
                tlContent.style.transform = "translateX(5vw) translateY(0)";
                tlContent.style.width = "30vw";
                tlContent.style.height = "0";
                tlContent.style.top = "10vh";
                tlContent.style.display = "block";
             }

             break;


             case "top-right": 
             if(window.innerWidth<=1100) {
                trActive = "translateX(0) translateY(0)";
                trContent.style.transform = "translateX(0vw) translateY(0)";
                trContent.style.width = "100vw";
                trContent.style.height = "100vh";
                trContent.style.top = "0";
                trContent.style.display = "flex";
                trContent.style.alignItems = "center";
                trContent.style.justifyContent = "center";
                trContent.style.background = "var(--bg-transparent)";
                trContent.style.zIndex = "200";
                trBtn.style.zIndex = "300";
                tlBtn.style.zIndex ="100";
                blBtn.style.zIndex ="100";
                brBtn.style.zIndex ="100";

             }
             else {
                trActive = "translateX(-5vw) translateY(0)";
                trContent.style.transform = "translateX(-5vw) translateY(0)";
                trContent.style.width = "30vw";
                trContent.style.height = "0";
                trContent.style.top = "10vh";
                trContent.style.display = "block";
             }

             break;


             case "bottom-left": 
             if(window.innerWidth<=600) {
               blActive = "translateX(0)translateY(0)";
               blContent.style.transform = "translateX(0vw) translateY(0)";
               blContent.style.width = "100vw";
               blContent.style.height = "110vh";
               blContent.style.top = "0";
               blContent.style.display = "flex";
               blContent.style.alignItems = "center";
               blContent.style.justifyContent = "center";
               blContent.style.background = "var(--bg-transparent)";
               blContent.style.zIndex = "200";
               blBtn.style.zIndex = "300";
                tlBtn.style.zIndex ="100";
                project1.style.width ="70%";
                project2.style.width ="70%";
                // project3.style.width ="70%";
                project1.style.margin="auto auto 0.5rem";
                project2.style.margin="auto auto 0.5rem";
                // project3.style.margin="auto auto 0.5rem";
                brBtn.style.zIndex ="100";

             }
             else if(window.innerWidth<=1100){
                blActive = "translateX(0)translateY(0)";
                blContent.style.transform = "translateX(0vw) translateY(0)";
                blContent.style.width = "100vw";
                blContent.style.height = "100vh";
                blContent.style.top = "0";
                blContent.style.display = "flex";
                blContent.style.alignItems = "center";
                blContent.style.justifyContent = "center";
                blContent.style.background = "var(--bg-transparent)";
                blContent.style.zIndex = "200";
                blBtn.style.zIndex = "300";
                 tlBtn.style.zIndex ="100";
                 trBtn.style.zIndex ="100";
                 project1.style.width ="40%";
                 project2.style.width ="40%";
                //  project3.style.width ="40%";
                 project1.style.margin="auto auto 0.5rem";
                 project2.style.margin="auto auto 0.5rem";
                //  project3.style.margin="auto auto 0.5rem";
                 brBtn.style.zIndex ="100";
             }

             else {
                blActive = "translateX(10vw) translateY(7vh)";
                 blContent.style.transform = "translateX(10vw) translateY(7vh)";
                 blContent.style.width = "15rem";
                 blContent.style.height = "0";
                 blContent.style.top = "30vh";
                 blContent.style.display = "block";
                 project1.style.width ="100%";
                 project2.style.width ="100%";
                //  project3.style.width ="100%";
              }

             break;
             case "bottom-right": 
             if(window.innerWidth<=1100) {
                brActive = "translateX(0) translateY(0)";
                brContent.style.transform = "translateX(0vw) translateY(0)";
                brContent.style.width = "100vw";
                brContent.style.height = "100vh";
                brContent.style.bottom = "0";
                brContent.style.display = "flex";
                brContent.style.flexDirection = "column";
                brContent.style.alignItems = "center";
                brContent.style.justifyContent = "center";
                brContent.style.background = "var(--bg-transparent)";
                brContent.style.zIndex = "200";
                brBtn.style.zIndex = "300";
                tlBtn.style.zIndex ="100";
                blBtn.style.zIndex ="100";
                trBtn.style.zIndex ="100";

             }
             else {
                brActive = "translateX(-5vw) translateY(0)";
                brContent.style.transform = "translateX(-5vw) translateY(0)";
                brContent.style.width = "30vw";
                brContent.style.height = "0";
                brContent.style.bottom = "30vh";
                brContent.style.display = "block";
             }

             break;

          default:
        }
}

let lastReverseAnimation = "";

function playAnimation(animation,reverseAnimation) {
    //remove all the animations from the heroimage
    heroimage.className = "";

  if(lastReverseAnimation !=="") {
            heroimage.classList.add(lastReverseAnimation);
            setTimeout(function() {
                heroimage.classList.remove(lastReverseAnimation);
                heroimage.classList.add(animation);
                lastReverseAnimation = reverseAnimation;
            }, 200);
  }
  else {
    heroimage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playCloseAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Skills";
  blBtn.innerHTML = "Projects"
  brBtn.innerHTML = "Contact"

switch (activecorner) {
    case "top-left":
        tlBtn.style.background = bgColor;
        tlBtn.style.color = textColor;
        tlContent.style.transform = tlHidden;
        break;
    case "top-right":
        trBtn.style.background = bgColor;
        trBtn.style.color = textColor;
        trContent.style.transform = trHidden;
        break;
    case "bottom-left":
        blBtn.style.background = bgColor;
        blBtn.style.color = textColor;
        blContent.style.transform = blHidden;
        break;
    case "bottom-right":
        brBtn.style.background = bgColor;
        brBtn.style.color = textColor;
        brContent.style.transform = brHidden;
        break;

    default:
}

heroimage.className ="";
lastReverseAnimation= "";
activecorner ="";
heroimage.classList.add(reverseAnimation);
setTimeout(function() {
    heroimage.classList.remove(reverseAnimation);
}, 200);

}
//this below is main drop down animation function first we assign a 
//onclick function and there is variable active corner which means 
//that that the animtion is alredy running that is one of the four drop is already 
//open so need to close that.
tlBtn.onclick = function() {
    if(activecorner === "top-left") {
        playCloseAnimation("reverse-animate-top-left");
    }
    //otherwise we need to set active corner to top-left and adding an arrow
    //with the text and calling the windowResize function and the the starting 
    //amimation function which will do the drop down animation.
    else {
        trBtn.innerHTML = "Skills";
        blBtn.innerHTML = "Projects";
        brBtn.innerHTML = "Contact";


        activecorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br/>About";
        windowResize();
       //here two value passed which is the css animation and with that
       //some background and text colors will change thats what we are doing
        playAnimation("animate-top-left","reverse-animate-top-left");

        tlBtn.style.background =bgColorAlt;
        trBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        brBtn.style.background = bgColor;

        tlBtn.style.color=textColorAlt;
        trBtn.style.color=textColor;       
        blBtn.style.color=textColor;     
       brBtn.style.color=textColor;

       tlContent.style.transform=tlActive;
       trContent.style.transform=trHidden;       
       blContent.style.transform=blHidden;     
       brContent.style.transform=brHidden;
    }
};

// top-right
trBtn.onclick = function() {
    if(activecorner === "top-right") {
        playCloseAnimation("reverse-animate-top-right");
    }
    //otherwise we need to set active corner to top-left and adding an arrow
    //with the text and calling the windowResize function and the the starting 
    //amimation function which will do the drop down animation.
    else {
        tlBtn.innerHTML = "About";        
        blBtn.innerHTML = "Projects";        
        brBtn.innerHTML = "Contact";        

        activecorner = "top-right";
        trBtn.innerHTML = "&uarr;<br/>Skills";
        windowResize();
       //here two value passed which is the css animation and with that
       //some background and text colors will change thats what we are doing
        playAnimation("animate-top-right","reverse-animate-top-right");

        tlBtn.style.background = bgColor;
        trBtn.style.background = bgColorAlt;
        blBtn.style.background = bgColor;
        brBtn.style.background = bgColor;

        tlBtn.style.color=textColor;
        trBtn.style.color=textColorAlt;       
        blBtn.style.color=textColor;     
       brBtn.style.color=textColor;

       tlContent.style.transform=tlHidden;
       trContent.style.transform=trActive;       
       blContent.style.transform=blHidden;     
       brContent.style.transform=brHidden;
    }
};

//Bottom left
blBtn.onclick = function() {
    if(activecorner === "bottom-left") {
        playCloseAnimation("reverse-animate-bottom-left");
    }
    //otherwise we need to set active corner to top-left and adding an arrow
    //with the text and calling the windowResize function and the the starting 
    //amimation function which will do the drop down animation.
    else {
        tlBtn.innerHTML = "About";        
        trBtn.innerHTML = "Skills";        
        brBtn.innerHTML = "Contact";        

        activecorner = "bottom-left";
        blBtn.innerHTML = "Projects <br/> &darr;";
        windowResize("reverse-animate-bottom-left");
       //here two value passed which is the css animation and with that
       //some background and text colors will change thats what we are doing
        playAnimation("animate-bottom-left","reverse-animate-bottom-left");

        tlBtn.style.background = bgColor;
        trBtn.style.background = bgColor;
        blBtn.style.background = bgColorAlt;
        brBtn.style.background = bgColor;

        tlBtn.style.color=textColor;
        trBtn.style.color=textColor;       
        blBtn.style.color=textColorAlt;     
       brBtn.style.color=textColor;

       tlContent.style.transform=tlHidden;
       trContent.style.transform=trHidden;       
       blContent.style.transform=blActive;     
       brContent.style.transform=brHidden;
    }
};

//bottom-right

brBtn.onclick = function() {
    if(activecorner === "bottom-right") {
        playCloseAnimation("reverse-animate-bottom-right");
    }
    //otherwise we need to set active corner to top-right and adding an arrow
    //with the text and calling the windowResize function and the the starting 
    //amimation function which will do the drop down animation.
    else {
        tlBtn.innerHTML = "About";        
        trBtn.innerHTML = "Skills";        
        blBtn.innerHTML = "Projects";        

        activecorner = "bottom-right";
        brBtn.innerHTML = "Contact <br/> &darr;";
        windowResize("reverse-animate-bottom-right");
       //here two value passed which is the css animation and with that
       //some background and text colors will change thats what we are doing
        playAnimation("animate-bottom-right","reverse-animate-bottom-right");

        tlBtn.style.background = bgColor;
        trBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        brBtn.style.background = bgColorAlt;

        tlBtn.style.color=textColor;
        trBtn.style.color=textColor;       
        blBtn.style.color=textColor;     
       brBtn.style.color=textColorAlt;

       tlContent.style.transform=tlHidden;
       trContent.style.transform=trHidden;       
       blContent.style.transform=blHidden;     
       brContent.style.transform=brActive;
    }
}


