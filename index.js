let slideIndex = 1;
const slides = document.getElementsByClassName("weapon-item");

function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    Array.from(slides).forEach(slide => slide.classList.remove("active"));
    
    slides[slideIndex - 1]?.classList.add("active");
}

window.plusSlides = (n) => showSlides(slideIndex += n);
window.currentSlide = (n) => showSlides(slideIndex = n);

document.addEventListener('DOMContentLoaded', () => showSlides(slideIndex));

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    audio.volume = 0.1; 
    
    audio.muted = true;
    audio.play()
        .then(() => {
            setTimeout(() => {
                audio.muted = false;
            }, 1000); 
        })
        .catch(e => {
            const unmuteOnInteraction = () => {
                audio.muted = false;
                audio.play();
                document.removeEventListener('click', unmuteOnInteraction);
                document.removeEventListener('scroll', unmuteOnInteraction);
                document.removeEventListener('keydown', unmuteOnInteraction);
                document.removeEventListener('touchstart', unmuteOnInteraction);
            };
            
            document.addEventListener('click', unmuteOnInteraction, { once: true });
            document.addEventListener('scroll', unmuteOnInteraction, { once: true });
            document.addEventListener('keydown', unmuteOnInteraction, { once: true });
            document.addEventListener('touchstart', unmuteOnInteraction, { once: true });
        });
});

