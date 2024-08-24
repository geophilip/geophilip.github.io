 let wiggleAnimations = [];

    function updateDropdown(buttonId, element) {
      document.getElementById(buttonId).innerText = element.innerText;
      document.getElementById(buttonId).classList.add('selected');
      document.getElementById(buttonId).classList.remove('wiggle');

      // Stop the animation
      stopWiggle(buttonId);
    }

    // Wiggle animation using Anime.js
    function startWiggle(targets) {
      let animation = anime({
        targets: targets,
        translateX: [-5, 5],
        duration: 200,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
      });

      wiggleAnimations.push({ target: targets, animation: animation });
    }

    function stopWiggle(target) {
      wiggleAnimations.forEach(item => {
        if (item.target === `#${target}`) {
          item.animation.pause();
        }
      });
    }

    // Apply wiggle to buttons with class 'wiggle'
    document.querySelectorAll('.wiggle').forEach(button => {
      startWiggle(`#${button.id}`);
    });

    // Bounce animation for GO button on hover using Anime.js
    const goButton = document.getElementById('goButton');
    goButton.addEventListener('mouseenter', () => {
      anime({
        targets: goButton,
        scale: [1, 1.1],
        easing: 'easeOutElastic(1, .5)',
        duration: 300
      });
    });

    goButton.addEventListener('mouseleave', () => {
      anime({
        targets: goButton,
        scale: [1.1, 1],
        easing: 'easeOutElastic(1, .5)',
        duration: 300
      });
    });

    // Pulsating color animation for active navbar button
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

    // Apply pulsating animation to the active navbar button
    document.querySelectorAll('.navbar a').forEach(link => {
      if (link.classList.contains('active')) {
        startPulsate(link);
      }
    });