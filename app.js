const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY >0)
});




const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// responsive
let menu=document.querySelector('#menu-icon');
let navmenu=document.querySelector('.navmenu');

menu.onclick = ()=>{
  menu.classList.toggle('bx-x');
  navmenu.classList.toggle('open');

}