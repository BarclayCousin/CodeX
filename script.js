/* Hamburger JS */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

/* Login Page */

function pageChange() {
  window.location.href="homepage.html";  
}

/* FAQ Page */

let header = document.querySelectorAll(".headerfaq");

for (let i = 0; i < header.length; i++){
      header [i].addEventListener ("click", function(){
          let ddd = this.nextElementSibling;
          ddd.classList.toggle("active");

          if(this.firstElementChild.innerText === '►'){
              this.firstElementChild.innerText = "▼"
          }else{
              this.firstElementChild.innerText = "►"
        }
      })
}
