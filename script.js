
//Popup boxes appear and disappear
  var popup1 = document.getElementById("ET");
  var popup2 = document.getElementById("LToP");
  var popup3 = document.getElementById("SoL");
  var popup4 = document.getElementById("StMB");
  var popup5 = document.getElementById("CtR");
  var popup6 = document.getElementById("AdT");
  var popup7 = document.getElementById("BhP");
  var popup8 = document.getElementById("C");
  var popup9 = document.getElementById("GGB");
  var popup10 = document.getElementById("GWoC");
  var popup11 = document.getElementById("MP");
  var popup12 = document.getElementById("TMh");

function firstImage() {
  popup1.classList.toggle("show");
}

function secondImage() {
  popup2.classList.toggle("show");
}

function thirdImage() {
  popup3.classList.toggle("show");
}

function fourthImage() {
  popup4.classList.toggle("show");
}

function fifthImage() {
  popup5.classList.toggle("show");
}

function sixthImage() {
  popup6.classList.toggle("show");
}

function seventhImage() {
  popup7.classList.toggle("show");
}

function eighthImage() {
  popup8.classList.toggle("show");
}

function ninthImage() {
  popup9.classList.toggle("show");
}

function tenthImage() {
  popup10.classList.toggle("show");
}

function eleventhImage() {
  popup11.classList.toggle("show");
}

function twelfthImage() {
  popup12.classList.toggle("show");
}

//The amount of places the user has visited is counted at the top right of the screen
		
var a = document.getElementById("a")
var b = 0;

function checkButton(){
	if (b == 0){
		yellow.disabled = true;
		blue.disabled = false;
	}
}
		
console.log(b);		

function addOne(){
	b++;
	a.innerHTML = b + " out of 12 places visited";
	console.log(b);
	checkEquivalence();
	
}

function subtractOne(){
	checkButton();
	b--;
	a.innerHTML = b +  " out of 12 places visited";
	console.log(b);
	checkEquivalence();
	
}

function checkEquivalence(){
	if (b == 12){
		document.getElementById("body").classList.add("airplane");
		flyForward();
		//document.getElementById("body").classList.add("fly-forward");
		//document.getElementById("body").classList.innerHTML = "You're Done!";
		//document.getElementById("body").classList.add("center-vertical");
		//document.getElementById("body").classList.add("contain-image");
	}
}	

var blue = document.getElementById("yes");
var yellow = document.getElementById("no");

function disableYellow(){
	yellow.disabled = true;
	blue.disabled = false;
}

function disableBlue(){
	blue.disabled = true;
	yellow.disabled = false;
}
	

function flyForward(){
	document.getElementById("body").classList.add("fly-forward");
}
