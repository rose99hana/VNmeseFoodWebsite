window.onload = function () {
    startSlides();
};

function startSlides() {
    var slider, slidesNumber, slides, width, indexSlide, x;
    indexSlide = 0;
    width = 0;
    slider = document.getElementById("slider");
    slides = document.getElementsByClassName("slide");
    x = slider.querySelectorAll("img");
    slidesNumber = slides.length;
    setInterval(function () {
        if (indexSlide == (slidesNumber)) {
            indexSlide = 0;
            slider.style.marginLeft = "0px";
            width = 0;
        }
        slider.style.transition = "1s ease";
        slider.style.marginLeft = width + "px";
        width = width - x[indexSlide].width;
        indexSlide++;
    }, 2000);
}

