function moon1(){
  var counter = 0;
  moon1Counter = counter + 1;
  alert("it works");
}

function pbtn(){
  alert("Thankyou for your purchase!");
  window.location.href = "ticket.html";
}

function moon1cart() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  function noshow(){
  popup.classList.toggle("noshow");
  }
  setTimeout(noshow, 2000);
  document.getElementById('hiddenmoon1').style.display = 'inline-block';
}

function moon2cart() {
  document.getElementById('hiddenmoon2').style.display = 'inline-block';
}
function mars1cart() {
  document.getElementById('mars1').style.display = 'contents';
}
function mars2cart() {
  document.getElementById('mars2').style.display = 'contents';
}
function merc1cart() {
  document.getElementById('merc1').style.display = 'contents';
}
function merc2cart() {
  document.getElementById('merc2').style.display = 'contents';
}
/*
function alert(moon1counter){
  if (moon1counter == 1){
    alert("hiiii");
  }
} 

var tag = document.getElementById('demo');
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('demo');*/



        



/*
//Javacript for responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    //Javacript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });
*/ 