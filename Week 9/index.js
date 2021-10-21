console.log("hello world");

let meals = ["lunch", "dinner", "brunch"];
let images = ["lunch.jpg", "dinner.jpg", "brunch.jpg"];
let prevmeal;

for (i = 0; i<document.getElementsByClassName("meal").length; i++){
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>";
  document.getElementsByClassName("meal")[i].addEventListener("click", setActive, false);
  document.getElementsByClassName("meal")[i].id = meals[i];
}

// for (i = 0; i<document.getElementsByClassName("meal").length; i++){
//   document.getElementbyId("one").addEventListener("click", setActiveButton, false);
//   document.getElementbyId("two").addEventListener("click", setActiveButton, false);
// }

document.getElementbyId("lunch").classList.toggle("active");
// document.getElementbyId("image").innerHTML = "<img src= 'assets/" + images[0] + "'>"

function setActive(e){
console.log( document.getElementsByClassName("active")[0])
  prevmeal = document.getElementsByClassName("active")[0].id;
  //console.log("made it inside setActive!");
  if(prevmeal != undefined){
    document.getElementbyId(prevmeal).classList.toggle("active");
    document.getElementbyId(prevmeal + "menu").style.display = "none";
  }


  // prevmeal.classList.toggle("active");
  // console.log(e.target.innerHTML);

  if (e.target.tagName == "H2"){
    console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");
  }else{
    console.log("div clicked");
    e.target.classList.toggle("active");
  }
}

// function setActiveButton(e){
//   e.target.classList.toggle("active");
// }
