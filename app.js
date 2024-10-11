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
    let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
        menuList.style.visibility = "visible";
    } else {
        menuList.style.maxHeight = "0px";
        menuList.style.visibility = "hidden";
    }
}

