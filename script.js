// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Fade-in Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if(elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check and scroll event listener
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    
    // 2. Countdown Timer Logic
    // Set wedding date to July 5, 2026 13:00
    const weddingDate = new Date('July 5, 2026 13:00:00').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<h2>MUTLULUKLAR!</h2>';
            return;
        }
        
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output results
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    };
    
    // Update every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    
});
