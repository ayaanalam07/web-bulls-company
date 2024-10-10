 AOS.init();
    
    // Subscribe Section Animation
    window.addEventListener('scroll', function() {
        const subscribeSection = document.getElementById('subscribe-section');
        const sectionPosition = subscribeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            subscribeSection.classList.add('appear');
        }
    });


    
