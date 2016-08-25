////var howOften = 5; //number often in seconds to rotate
//var current = 0; //start the counter at 0
//var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
//var items = new Array();
//  items[0]="<a href='link.htm' ><img alt='image0 (9K)' src='Your_Brain_Fitness/Mother&Child.jpg' height='347' width='282' border='0' />"; //a linked image
//  items[1]="<a href='link.htm'><img alt='image1 (9K)' src='Your_Brain_Fitness/Soldiers.jpg' height='347' width='282' border='0' />"; //a linked image
//  items[2]="<a href='link.htm'><img alt='image2 (9K)' src='Your_Brain_Fitness/Final_Sunset.jpg' height='300' width='300' border='0' />"; //a linked image
// items[3]="<a href='link.htm'><img alt='image3 (9K)' src='/Images/image3.jpg' height='300' width='300' border='0' />"; //a linked image
//  items[4]="<a href='link.htm'><img alt='image4 (9K)' src='/Images/image4.jpg' height='300' width='300' border='0' />"; //a linked image
//function rotater() {
//  document.getElementById("placeholder").innerHTML = items[current];
/*  current = (current==items.length-1) ? 0 : current + 1;
  setTimeout("rotater()",howOften*1000);
}

function rotater() {
  if(document.layers) {
      document.placeholderlayer.document.write(items[current]);
      document.placeholderlayer.document.close();
  }
  if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
      if(document.all)
          placeholderdiv.innerHTML=items[current];

  current = (current==items.length-1) ? 0 : current + 1; //increment or reset
  setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
//-->*/

var slides = [{
  image: "Images/picture_banner/worker.jpg",
  title: "Become Your Best Self",
  caption: "'After a few neurofeedback sessions, I noticed significant improvement in the number and intensity of my headaches.' - 53 year-old female"//"Reduce stress, increase focus, perform better"//
}, {
  image: "Images/picture_banner/Mother&Child.jpg",
  title: "End Substance Dependency",
  caption: "'Neurofeedback was an important therapy in helping me recover from drugs and alcohol addiction.' - 30 year old sufferer of drug and alcohol addiction"
  //caption: "Refocus on what's most important in your life"//
}, {
  image: "Images/picture_banner/Shoes.jpg",
  title: "Recover from Injury",
  caption: "Alleviate concussion symptoms"
}, {
  image: "Images/picture_banner/Soldiers.jpg",
  title: "Fight PTSD",
  caption: "'I am amazed how the neurotherapy...has helped my daughter's PTSD...She is now less defiant, calmer, and more loving.' - Adoptive mother of a 12 year old"//"Pride in serving our veterans"//
}];

var slideIndex = 0;
var slideRotation = function() {
  var currentSlide = slides[slideIndex];
  document.getElementsByClassName("slide_picture")[0].src = currentSlide.image;
  document.getElementsByClassName("slide_title")[0].innerHTML = currentSlide.title;
  document.getElementsByClassName("slide_caption")[0].innerHTML = currentSlide.caption;
  slideIndex = (slideIndex + 1)%slides.length;
};
setInterval(slideRotation, 6000);
