const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img');

    document.querySelectorAll('.enlargeable').forEach(image => {
      image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightbox.style.display = 'flex';
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightboxImage.src = '';
    });


    const fontSelect = document.getElementById('font-select');

    fontSelect.addEventListener('change', (event) => {
      document.body.className = event.target.value;
    });   


    
    anime({
      targets: '.car-card img',
      translateY: [100, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(200)
    });

    document.querySelectorAll('.car-card button').forEach(button => {
      button.addEventListener('mouseenter', () => {
        anime({
          targets: button,
          scale: 1.1,
          easing: 'easeOutExpo',
          duration: 300
        });
      });
      button.addEventListener('mouseleave', () => {
        anime({
          targets: button,
          scale: 1,
          easing: 'easeOutExpo',
          duration: 300
        });
      });
    });

    function blurSection(sectionId) {
      const sections = document.querySelectorAll('.car-section');
      sections.forEach(section => {
        if (section.id !== sectionId) {
          anime({
            targets: section,
            filter: 'blur(5px)',
            easing: 'easeOutExpo',
            duration: 300
          });
        } else {
          anime({
            targets: section,
            filter: 'blur(0)',
            easing: 'easeOutExpo',
            duration: 300
          });
        }
      });

      window.addEventListener('scroll', () => {
        sections.forEach(section => {
          anime({
            targets: section,
            filter: 'blur(0)',
            easing: 'easeOutExpo',
            duration: 300
          });
        });
      }, { once: true });
    }

    function startPulsate(target) {
      anime({
        targets: target,
        backgroundColor: [
          { value: '#398cd7', duration: 2000 },
          { value: '#5BB5C2', duration: 2000 }
        ],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      });
    }

    document.querySelectorAll('.navbar a').forEach(link => {
      if (link.classList.contains('active')) {
        startPulsate(link);
      }
    });