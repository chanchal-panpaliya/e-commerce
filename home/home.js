var menu =  document.querySelector(".menu");

function menutoggale(){
  if(menu.style.maxHeight == "200px"){
    menu.style.maxHeight = "0px";  
  }else{
    menu.style.maxHeight = "200px";   
  }
}


/*scroll*/

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}