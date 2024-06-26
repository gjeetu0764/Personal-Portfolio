var navList = document.getElementById('navlist');
var closeicon = document.querySelector("nav .closeicon");
var openbtn= document.querySelector("nav .toggler-icon");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");


openbtn.addEventListener('click',
function() {  
    openbtn.style.display = "none"; 
    navList.style.left = "0px";  
    closeicon.style.display="block";  
})

closeicon.addEventListener( 'click',() => {
    navList.style.left = "-200px";
    closeicon.style.display="none";
    openbtn.style.display = "block";  
})
   

function opentab(event,tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.remove("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
