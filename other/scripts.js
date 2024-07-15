document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselTrack = document.querySelector('.carousel-track');

    let items = document.querySelectorAll('.carousel-item');
    
    const itemCount = items.length;
    const multiplier = 20

    carouselTrack.style.animationDuration = `${multiplier * 30}s`;

    for (let i = 0; i < multiplier - 1; i++) {
      for (let j = 0; j < itemCount; j++) {
        const clone = items[j].cloneNode(true);
        clone.setAttribute('alt', `User feedback ${i*j}`);
        clone.setAttribute('width', clone.getAttribute('width'));
        clone.setAttribute('height', clone.getAttribute('height'));
        carouselTrack.appendChild(clone);
      }
    }

    items = document.querySelectorAll('.carousel-item');

    carousel.addEventListener('mouseover', () => {
      carousel.classList.add('paused');
    });

    carousel.addEventListener('mouseout', () => {
      carousel.classList.remove('paused');
    });

    carousel.addEventListener('touchstart', () => {
      carousel.classList.add('paused');
    });

    carousel.addEventListener('touchend', () => {
      carousel.classList.remove('paused');
    })
  });