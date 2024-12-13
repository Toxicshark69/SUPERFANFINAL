// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// Transparent, Translucent, Opaque: https://www.mathsisfun.com/physics/images/transparent.svg
function changePicture1() {
  document.getElementById("AntiHero1").src = "images/SNEAKY GENJI .png";
}

function changePicture3() {
  document.getElementById("AntiHero3").src = "images/OW.png";
}

function changePicture2() {
  document.getElementById("youtube").classList.remove("hide");
  document.getElementById("AntiHero4").classList.add("hide");
}
function changeaudio() {
  document.getElementById("AntiHero2").play();
}

function changesound() {
  document.getElementById("Victory").play();
}
