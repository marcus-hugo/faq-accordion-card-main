
// https://codepen.io/kathykato/pen/MoZJom

const buttons = document.querySelectorAll('.btn');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

buttons.forEach(button => button.addEventListener('click', toggleAccordion));



// for (i=0; i<btn.length; i++) {

//     btn[i].addEventListener('click', function() {
        
//     const panel = this.nextElementSibling;
//     const icon = this.firstElementChild;

//     this.classList.toggle('active');
//     panel.classList.toggle('active');
//     icon.classList.toggle('active');

//     });
    
// }