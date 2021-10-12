console.log("what's good");
//Math.Random() returns a random number between 0 & 1
//console.log(Math.random()*3); //random number between 1 & 3
//console.log(Math.floor (Math.random()*3)); //random integer between 1 & 3

//console.log(document.getElementsByClassName("options"));
//console.log(document.getElementsByClassName("options")[0].innerHTML);

const images = ["bball.jpg", "fball.jpg", "soccer.jpg"];
const title = ["Basketball", "Football", "Soccer"];

for(i=0; i<document.getElementsByClassName("options").length; i++){
  document.getElementsByClassName("label")[i].innerHTML = title[i];
  //console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' ">';

  //set the id of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  //call changeColor with the ID of the section when clicked
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
