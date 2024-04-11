const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const sectionBtn = document.getElementById('section-btn');
const rocks = document.getElementById('rocks'); 
const header = document.querySelector('header'); 
const span = document.querySelector('span'); 

window.addEventListener( 'scroll', function (){
     var value = this.window.scrollY;
     text.style.top = 35 + value * -0.25+'%';
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left = value * 2 + 'px';
     bird2.style.top = value * -1.5 + 'px';
     bird2.style.left = value * -5 + 'px';
     forest.style.top = value * 0.25 + 'px';
    sectionBtn.style.marginTop = value * 1.5 + 'px'; 
     rocks.style.top = value * -0.12 + 'px';
     header.style.top = value * 0.5 + 'px';
     if (window.scrollY > 2) {
          text.style.color = "#018b90";
          text.style.lineHeight = '0.55'+"em";
          span.style.color = "#666600";
     } else {
          text.style.color = "#666600";
          text.style.lineHeight = '0.85'+"em"
     }
})