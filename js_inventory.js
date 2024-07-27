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