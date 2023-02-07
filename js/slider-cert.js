/*-------SLIDER---------*/
const slider = document.querySelector("#slider-certification");
let sliderSection = document.querySelectorAll(".btn-certifications");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#slider-leftCert");
const btnRight = document.querySelector("#slider-rightCert");

let widthScreen = window.screen.width;
if(widthScreen <= 540){
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
}

function next(){
    widthScreen = window.screen.width;

    if(widthScreen == 540){
        let sliderSectionFirst = document.querySelectorAll(".btn-certifications")[0];
        slider.setAttribute( 'style', 'margin-left: -330px !important');
        slider.style.transition = "all .5s";
        btnRight.setAttribute( 'style', 'display: none !important');
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement("beforeend", sliderSectionFirst);
            slider.setAttribute( 'style', 'margin-left: -165px !important');
            btnRight.style.display = "block"
        }, 500);
    }

    if(widthScreen <= 280){
        let sliderSectionFirst = document.querySelectorAll(".btn-certifications")[0];
        slider.setAttribute( 'style', 'margin-left: -400px !important');
        slider.style.transition = "all .5s";
        btnRight.setAttribute( 'style', 'display: none !important');
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement("beforeend", sliderSectionFirst);
            slider.setAttribute( 'style', 'margin-left: -200px !important');
            btnRight.style.display = "block"
        }, 500);
    }

    if(widthScreen >= 281 && widthScreen <= 539){
        console.log("hola")
        let sliderSectionFirst = document.querySelectorAll(".btn-certifications")[0];
        slider.style.marginLeft = "-330px";
        slider.style.transition = "all .5s";
        btnRight.setAttribute( 'style', 'display: none !important');
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement("beforeend", sliderSectionFirst);
            slider.style.marginLeft = "-165px";
            btnRight.style.display = "block"
        }, 500);
    }
};

function prev(){
    widthScreen = window.screen.width;

    if(widthScreen == 540){
        let sliderSection = document.querySelectorAll(".btn-certifications");
        let sliderSectionLast = sliderSection[sliderSection.length-1];
        slider.setAttribute( 'style', 'margin-left: 0px !important');
        slider.style.transition = "all .5s";
        btnLeft.setAttribute( 'style', 'display: none !important');
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement("afterbegin", sliderSectionLast);
            slider.setAttribute( 'style', 'margin-left: -165px !important');
            btnLeft.style.display = "block"
        }, 500);
    }

    if(widthScreen <= 280){
        let sliderSection = document.querySelectorAll(".btn-certifications");
        let sliderSectionLast = sliderSection[sliderSection.length-1];
        slider.style.marginLeft = "0px";
        slider.style.transition = "all .5s";
        btnLeft.setAttribute( 'style', 'display: none !important');
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement("afterbegin", sliderSectionLast);
            slider.style.marginLeft = "-200px";
            btnLeft.style.display = "block"
        }, 500);
    }

    if(widthScreen >= 281 && widthScreen <= 539){
        let sliderSection = document.querySelectorAll(".btn-certifications");
        let sliderSectionLast = sliderSection[sliderSection.length-1];
        slider.style.marginLeft = "0px";
        slider.style.transition = "all .5s";
        btnLeft.setAttribute( 'style', 'display: none !important');
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement("afterbegin", sliderSectionLast);
            slider.style.marginLeft = "-165px";
            btnLeft.style.display = "block"
        }, 500);
    }
};

btnRight.addEventListener('click', function(){
    next();
});
btnLeft.addEventListener('click', function(){
    prev();
});

// setInterval(function(){
//     next();
// }, 5000)
