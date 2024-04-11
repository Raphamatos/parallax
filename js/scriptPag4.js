const bg = document.getElementById("bg");
const content = document.getElementById("content");
window.addEventListener('scroll', function(){
     bg.style.opacity = 1 - +window.scrollY/550+ ""
     bg.style.backgroundPositionY = - +this.window.scrollY+"px";
})