//Preloader
window.addEventListener('load', () => {
    document.querySelector('.loader').className += ' hidden'
    setTimeout(() => {
        document.querySelector('.header__textbox').classList.add('welcomeTitle');
    }, 200);
});

//Cursor effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', `top: ${e.pageY - 10}px; left:${e.pageX - 10}px`)
});

document.addEventListener('click', () => {
    cursor.classList.add('cursor__expand');
    setTimeout(() => {
        cursor.classList.remove('cursor__expand');
    }, 500)
});

//Header & projects animations
//--Variables
const layersToAnimation = [...document.querySelectorAll('.header__layer')];
const myProjectsArray = [...document.querySelectorAll('.project')];

//--Main Event Listener Function
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const screenResolution = window.innerHeight;

    if (scrollPosition <= 555) handleAllHeaderMovement(scrollPosition);

    if (scrollPosition > 400) {
        myProjectsArray.forEach(project => {
            handleProjectImageMovement(project, screenResolution, scrollPosition)
        })
    }
});

//--Function that handle layers animation on header
const handleAllHeaderMovement = (scrollPosition) => {
    // handleHeaderMovementLayer(layersToAnimation[0], 1.2, scrollPosition)
    // handleHeaderMovementLayer(layersToAnimation[1], 1.1, scrollPosition)
    handleHeaderMovementLayer(layersToAnimation[2], .9, scrollPosition)
    handleHeaderMovementLayer(layersToAnimation[3], .9, scrollPosition)
    handleHeaderMovementLayer(layersToAnimation[4], .7, scrollPosition)
    handleHeaderMovementLayer(layersToAnimation[5], .55, scrollPosition)
    handleHeaderMovementLayer(layersToAnimation[6], .15, scrollPosition)
    handleHeaderMovementLayer(layersToAnimation[7], .25, scrollPosition)
    handleHeaderMovementLayer(layersToAnimation[8], -.15, scrollPosition)
}

//--Function helper to calculate one layer animation
const handleHeaderMovementLayer = (layerToAnimation, speed, scrollPosition) => {
    layerToAnimation.style.transform = `translateY(${scrollPosition * speed}px)`
}

//--Function that animate single photo on project section
const handleProjectImageMovement = (project, screenResolution, scrollPosition) => {
    const distanceToTop = project.offsetTop - (screenResolution / 4);
    const projectHeight = project.offsetHeight;
    const distanceToBottom = project.offsetTop + projectHeight;

    if (scrollPosition > distanceToTop && scrollPosition < distanceToBottom) {
        project.querySelector('.project__background-image').style.transform = `translateY(${-(scrollPosition - distanceToTop) * - .17}px)`
    }
};

