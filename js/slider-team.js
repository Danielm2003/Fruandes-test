
/*-------SLIDER---------*/
const slider = document.querySelector("#slider-team");
let sliderSection = document.querySelectorAll(".card");
let sliderSectionLast = sliderSection[sliderSection.length-1];


const btnLeft = document.querySelector("#slider-left");
const btnRight = document.querySelector("#slider-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll(".card")[0];
    slider.style.marginLeft = "-488px";
    slider.style.transition = "all .5s";
    btnRight.style.display = "none";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-244px";
        btnRight.style.display = "block";
    }, 500);
};
function prev(){
    let sliderSection = document.querySelectorAll(".card");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .5s";
    btnLeft.style.display = "none";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-244px";
        btnLeft.style.display = "block";
    }, 500);
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
