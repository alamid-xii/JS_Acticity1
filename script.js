const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const profile = document.querySelector('.profile');
const textElements = document.querySelectorAll('.section, .campus, .address'); 

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '.5s';
        profile.style.border = '1px solid black';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '.5s';
        profile.style.border = '1px solid white';
        textElements.forEach(element => {
            element.style.color = 'grey'; 
        });
    }
});