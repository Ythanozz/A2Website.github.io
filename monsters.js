let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    
    const audio = document.querySelector('audio');
    if (audio) {
        audio.volume = 0.1;
        audio.muted = true;
        
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setTimeout(() => {
                    audio.muted = false;
                }, 1000);
            }).catch(error => {
                const unmuteOnInteraction = () => {
                    audio.muted = false;
                    audio.play().catch(e => console.log("Audio play failed:", e));
                    document.removeEventListener('click', unmuteOnInteraction);
                    document.removeEventListener('keydown', unmuteOnInteraction);
                    document.removeEventListener('touchstart', unmuteOnInteraction);
                };
                
                document.addEventListener('click', unmuteOnInteraction, { once: true });
                document.addEventListener('keydown', unmuteOnInteraction, { once: true });
                document.addEventListener('touchstart', unmuteOnInteraction, { once: true });
            });
        }
    }
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("monsterslide");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slides[slideIndex-1].classList.add("active");
}