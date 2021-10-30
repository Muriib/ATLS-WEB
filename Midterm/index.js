console.log("hello world");

var prevSelected = "";

document.getElementById("one").addEventListener("click", oneClicked);
document.getElementById("two").addEventListener("click", twoClicked);
document.getElementById("three").addEventListener("click", threeClicked);
document.getElementById("four").addEventListener("click", fourClicked);
document.getElementById("five").addEventListener("click", fiveClicked);
document.getElementById("six").addEventListener("click", sixClicked);
document.getElementById("seven").addEventListener("click", sevenClicked);

function oneClicked(){
  prevSelected = "one";
  if (prevSelected != ""){
    document.getElementById("two").style.backgroundColor = "#173F5F";
    document.getElementById("three").style.backgroundColor = "#173F5F";
    document.getElementById("four").style.backgroundColor = "#173F5F";
    document.getElementById("five").style.backgroundColor = "#173F5F";
    document.getElementById("six").style.backgroundColor = "#173F5F";
    document.getElementById("seven").style.backgroundColor = "#173F5F";
  }

  document.getElementById("text").innerHTML = "<ul id='list'> <li>Exercise</li> <li>Dinner with roommates</li> <li>Journal</li> </ul>";
  document.getElementById("image").innerHTML = "<img src='assets/mon.jpg' alt='Sharing dinner'>";
  document.getElementById("one").style.backgroundColor = "#20639B";
}

function twoClicked(){
  prevSelected = "two";
  if (prevSelected != ""){
    document.getElementById("one").style.backgroundColor = "#173F5F";
    document.getElementById("three").style.backgroundColor = "#173F5F";
    document.getElementById("four").style.backgroundColor = "#173F5F";
    document.getElementById("five").style.backgroundColor = "#173F5F";
    document.getElementById("six").style.backgroundColor = "#173F5F";
    document.getElementById("seven").style.backgroundColor = "#173F5F";
  }

  document.getElementById("text").innerHTML = "<ul id='list'> <li>Make a nice breakfast</li> <li>Catch up on Netflix</li> <li>Journal</li> </ul>";
  document.getElementById("image").innerHTML = "<img src='assets/tue.jpg' alt='Netlfix logo'>";
  document.getElementById("two").style.backgroundColor = "#20639B";
}

function threeClicked(){
  prevSelected = "three";
  if (prevSelected != ""){
    document.getElementById("one").style.backgroundColor = "#173F5F";
    document.getElementById("two").style.backgroundColor = "#173F5F";
    document.getElementById("four").style.backgroundColor = "#173F5F";
    document.getElementById("five").style.backgroundColor = "#173F5F";
    document.getElementById("six").style.backgroundColor = "#173F5F";
    document.getElementById("seven").style.backgroundColor = "#173F5F";
  }

  document.getElementById("text").innerHTML = "<ul id='list'> <li>Exercise</li> <li>BSA meeting</li> <li>Journal</li> </ul>";
  document.getElementById("image").innerHTML = "<img src='assets/wed.jpg' alt='Exercising'>";
  document.getElementById("three").style.backgroundColor = "#20639B";
}

function fourClicked(){
  prevSelected = "four";
  if (prevSelected != ""){
    document.getElementById("one").style.backgroundColor = "#173F5F";
    document.getElementById("two").style.backgroundColor = "#173F5F";
    document.getElementById("three").style.backgroundColor = "#173F5F";
    document.getElementById("five").style.backgroundColor = "#173F5F";
    document.getElementById("six").style.backgroundColor = "#173F5F";
    document.getElementById("seven").style.backgroundColor = "#173F5F";
  }

  document.getElementById("text").innerHTML = "<ul id='list'> <li>Morning stretching</li> <li>NSBE & ASA meetings</li> <li>Journal</li> </ul>";
  document.getElementById("image").innerHTML = "<img src='assets/thur.jpg' alt='Stretching'>";
  document.getElementById("four").style.backgroundColor = "#20639B";
}

function fiveClicked(){
  prevSelected = "five";
  if (prevSelected != ""){
    document.getElementById("one").style.backgroundColor = "#173F5F";
    document.getElementById("two").style.backgroundColor = "#173F5F";
    document.getElementById("three").style.backgroundColor = "#173F5F";
    document.getElementById("four").style.backgroundColor = "#173F5F";
    document.getElementById("six").style.backgroundColor = "#173F5F";
    document.getElementById("seven").style.backgroundColor = "#173F5F";
  }

  document.getElementById("text").innerHTML = "<ul id='list'> <li>Exercise</li> <li>Read a book</li> <li>Journal</li> </ul>";
  document.getElementById("image").innerHTML = "<img src='assets/fri.jpg' alt='Reading books'>"
  document.getElementById("five").style.backgroundColor = "#20639B";
}

function sixClicked(){
  prevSelected = "six";
  if (prevSelected != ""){
    document.getElementById("one").style.backgroundColor = "#173F5F";
    document.getElementById("two").style.backgroundColor = "#173F5F";
    document.getElementById("three").style.backgroundColor = "#173F5F";
    document.getElementById("four").style.backgroundColor = "#173F5F";
    document.getElementById("five").style.backgroundColor = "#173F5F";
    document.getElementById("seven").style.backgroundColor = "#173F5F";
  }

  document.getElementById("text").innerHTML = "<ul id='list'> <li>Bike Ride</li> <li>Go out with friends</li> <li>Journal</li> </ul>";
  document.getElementById("image").innerHTML = "<img src='assets/sat.jpg' alt='Bike ride'>";
  document.getElementById("six").style.backgroundColor = "#20639B";
}

function sevenClicked(){
  prevSelected = "seven";
  if (prevSelected != ""){
    document.getElementById("one").style.backgroundColor = "#173F5F";
    document.getElementById("two").style.backgroundColor = "#173F5F";
    document.getElementById("three").style.backgroundColor = "#173F5F";
    document.getElementById("four").style.backgroundColor = "#173F5F";
    document.getElementById("five").style.backgroundColor = "#173F5F";
    document.getElementById("six").style.backgroundColor = "#173F5F";
  }

  document.getElementById("text").innerHTML = "<ul id='list'> <li>Cook</li> <li>Hang out with friends</li> <li>Journal</li> </ul>";
  document.getElementById("image").innerHTML = "<img src='assets/sun.jpg' alt='Cooking'>"
  document.getElementById("seven").style.backgroundColor = "#20639B";
}
