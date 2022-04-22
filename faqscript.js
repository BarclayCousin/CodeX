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