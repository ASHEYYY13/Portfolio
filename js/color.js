
const togglebutton=document.querySelector("#toggle-button");

const root = document.querySelector(":root");
const storekey = "color-mode";
const defaultkey = "light-mode";

function loadcolormode() {
    const colormode = localStorage.getItem(storekey);
    root.classList.add(colormode || defaultkey);
    updateTogglebutton();
}
loadcolormode();
togglebutton.addEventListener("click" ,()=>{
   savecolormode();
});

function savecolormode() {
    //check if the root element has a class of dark mode if yes the change current mode will be changed to
    //light mode vise versa
    const currentmode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode"; 
     root.classList.remove("light-mode","dark-mode");
     root.classList.add(currentmode);
     localStorage.setItem(storekey,currentmode);
     updateTogglebutton();
}

function updateTogglebutton() {
  if(root.classList.contains("dark-mode")) {
        togglebutton.style.backgroundImage = "var(--moon)";
  }
  else {
    togglebutton.style.backgroundImage = "var(--sun)";
  }
}