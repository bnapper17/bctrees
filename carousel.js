const track = document.getElementsByClassName('track_container')[0];
const slides = Array.from(track.children);
const prevButton = document.getElementsByClassName('slide_selector--left')[0];
const nextButton = document.getElementsByClassName('slide_selector--right')[0];
const dotNav = document.getElementsByClassName('carousel_nav')[0];
const dots = Array.from(dotNav.children)
const slideWidth = slides[0].getBoundingClientRect().width;


// function for moving slide to either the left or right
const moveCarousel = (track, currentSlide, targetSlide) => {
    const dotIndex = slides.indexOf(currentSlide);
    const dotTargetIndex = slides.indexOf(targetSlide);
    const currentDot = dots[dotIndex];
    let targetDot = dots[dotTargetIndex];
    
    if(!targetSlide) {
        track.style.transform = 'translateX(0px)';
        targetSlide = slides[0];
        targetDot = dots[0];
    }
    
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    currentDot.classList.remove('current_slide--indicator');
    targetDot.classList.add('current_slide--indicator');

}


// automatically move slides
let carouselInterval = setInterval(() => {
    const currentSlide = track.getElementsByClassName('current_slide')[0];
    let nextSlide = currentSlide.nextElementSibling;

    moveCarousel(track, currentSlide, nextSlide);
}, 6500);

//set slides in position
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);




//When clicking next button move to the next slide and stop auto moving
nextButton.onclick = e => {
    const currentSlide = track.getElementsByClassName('current_slide')[0];
    let nextSlide = currentSlide.nextElementSibling; 
    
    //function to move carousel to selected slide
    moveCarousel(track, currentSlide, nextSlide);


    //stop auto moving
    clearInterval(carouselInterval);
    
    
}

// When clickin previous button move to the previous slide and stop auto moving
prevButton.onclick = e => {
    const currentSlide = track.getElementsByClassName('current_slide')[0];
    const prevSlide = currentSlide.previousElementSibling;

    // function to move carousel to selected slide
    moveCarousel(track, currentSlide, prevSlide);

    //stop auto moving
    clearInterval(carouselInterval);

};


// when cliking slide indicartor move to equivalent slide and stop auto moving

dotNav.onclick = e => {
    const targetDot = e.target.closest('button');
    const targetIndex = dots.indexOf(targetDot);
    const currentSlide = track.getElementsByClassName('current_slide')[0];
    const targetSlide = slides[targetIndex];

    //if indicator isn't clicked stop event listener
    if(!targetDot) return;

    // function to move carousel to selected slide
    moveCarousel(track, currentSlide, targetSlide);
    
    //stop auto moving
    clearInterval(carouselInterval);
}