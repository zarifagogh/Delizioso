let section_home = document.querySelector('.section-home');
let section_salad = document.querySelector('.section-salad');
let section_menu = document.querySelector('.section-menu');
let section_reserve = document.querySelector('.section-reserve');
let section_chef = document.querySelector('.section-chef');
let section_customers = document.querySelector('.section-customers');
let section_info = document.querySelector('.section-info');
 function menuPage(){
    section_home.style.display='none';
    section_salad.style.display='none';
    section_reserve.style.display='none';
    section_chef.style.display='none';
    section_customers.style.display='none';
    section_info.style.display='none';
}
function homePage(){
    window.open('index.html',"_self");
}
function aboutPage(){
    window.open('about.html',"_self");
}
function contactPage(){
    window.open('contact.html',"_self");
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".dropbtn").addEventListener("click", function() {
      document.querySelector(".dropdown-content").classList.toggle("show");
    });
  });
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  