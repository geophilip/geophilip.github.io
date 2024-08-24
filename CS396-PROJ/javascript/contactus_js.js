 document.addEventListener("DOMContentLoaded", () => {
      anime({
        targets: '.team-member',
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1000,
        delay: anime.stagger(200) 
      });
    });