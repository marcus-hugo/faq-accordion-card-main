
const btn = document.querySelectorAll('.btn');

for (i=0; i<btn.length; i++) {

    btn[i].addEventListener('click', function() {
        
    const panel = this.nextElementSibling;
    const icon = this.firstElementChild;

    this.classList.toggle('active');
    panel.classList.toggle('active');
    icon.classList.toggle('active');

    });
    
}