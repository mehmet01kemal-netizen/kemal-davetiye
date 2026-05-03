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
    // Set wedding date to September 15, 2026
    const weddingDate = new Date('September 15, 2026 19:00:00').getTime();
    
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
    
    // 3. RSVP Form Submission Handling
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values (just for demonstration)
            const name = document.getElementById('name').value;
            const status = document.getElementById('attendance').value;
            
            // Simple feedback to user
            const btn = rsvpForm.querySelector('.submit-btn');
            const originalText = btn.innerText;
            
            btn.innerText = 'TEŞEKKÜRLER!';
            btn.style.backgroundColor = '#4CAF50';
            btn.style.color = 'white';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                rsvpForm.reset();
            }, 3000);
        });
    }
});
