const layer1 = document.querySelector('.header__layer-1');
const layer2 = document.querySelector('.header__layer-2');
const layer3 = document.querySelector('.header__layer-3');
const layer4 = document.querySelector('.header__layer-4');
const layer5 = document.querySelector('.header__layer-5');
const layer6 = document.querySelector('.header__layer-6');
const layer7 = document.querySelector('.header__layer-7');


window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition <= 550) {
        layer1.style.transform = `translateY(${scrollPosition * .99}px)`
        layer2.style.transform = `translateY(${scrollPosition * .9}px)`
        layer3.style.transform = `translateY(${scrollPosition * .7}px)`
        layer4.style.transform = `translateY(${scrollPosition * .55}px)`
        layer5.style.transform = `translateY(${scrollPosition * .15}px)`
        layer6.style.transform = `translateY(${scrollPosition * .05}px)`
        layer7.style.transform = `translateY(${scrollPosition * -.15}px)`
    }
})

