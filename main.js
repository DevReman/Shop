const slider = document.querySelector('.slider');
setInterval(() => {
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0; 
    } else {
        slider.scrollLeft += slider.offsetWidth;
    }
}, 3000);

// reuse existing 'slider' declared earlier
const images = document.querySelectorAll('.slider img');
let index = 0;

function autoPlay() {
    index++;
    
    //back
    if (index >= images.length) {
        index = 0;
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        
        const offset = images[index].offsetLeft;
        slider.scrollTo({ left: offset, behavior: 'smooth' });
    }
}

//play every 4s
let play = setInterval(autoPlay, 4000);


slider.addEventListener('mouseenter', () => clearInterval(play));
slider.addEventListener('mouseleave', () => play = setInterval(autoPlay, 4000));

//select the list
const sections = document.querySelectorAll('section'); 
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});