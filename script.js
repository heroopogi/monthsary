document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.querySelector('.buttons');
    const bgMusic = document.getElementById('bgMusic');
    const musicControl = document.getElementById('musicControl');
    
    // Function to handle music
    function initializeMusic() {
        // Try to play music automatically (might be blocked by browser)
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicControl.classList.add('playing');
            }).catch(error => {
                console.log("Autoplay prevented by browser");
            });
        }
    }
    
    // Music control button click handler
    musicControl.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicControl.classList.add('playing');
        } else {
            bgMusic.pause();
            musicControl.classList.remove('playing');
        }
    });

    // Initialize music when document is clicked (better user experience)
    document.addEventListener('click', function initClick() {
        initializeMusic();
        document.removeEventListener('click', initClick);
    }, { once: true });

    // Function to get random position within the visible area
    function getRandomPosition() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = windowWidth - buttonWidth - 20;
        const maxY = windowHeight - buttonHeight - 20;

        return {
            x: Math.random() * maxX,
            y: Math.random() * maxY
        };
    }

    // When hovering over or clicking the "No" button
    noBtn.addEventListener('mouseover', function() {
        const pos = getRandomPosition();
        noBtn.style.position = 'fixed';
        noBtn.style.left = pos.x + 'px';
        noBtn.style.top = pos.y + 'px';
    });

    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const pos = getRandomPosition();
        noBtn.style.position = 'fixed';
        noBtn.style.left = pos.x + 'px';
        noBtn.style.top = pos.y + 'px';
    });

    // When clicking the "Yes" button
    yesBtn.addEventListener('click', function() {
        // Remove the no button
        noBtn.remove();
        
        // Change the content to show details
        const invitation = document.querySelector('.invitation');
        invitation.innerHTML = `
            <h1>Yay! I'm so excited! </h1>
            <div class="heart"></div>
            <h2>Our Special Evening Details</h2>
            
            <div class="details-card">
                <h3>🕕 Date & Time</h3>
                <p>November 5th, 2025 at 6:30 PM</p>
            </div>
            
            <div class="details-card">
                <h3>🍽️ Venue</h3>
                <p>Maria Kusina Familia</p>
                <p>24th Street Lacson, Bacolod City</p>
                <a href="#" class="map-link" onclick="window.open('https://www.google.com/maps/dir/''/MXP4%2B5FM,+24th+St,+Bacolod,+Negros+Occidental/@10.6851652,122.9564566,161m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x33aed10f56067f95:0x329a88e3dac6c8cc!2m2!1d122.9561779!2d10.6854651!1m5!1m1!1s0x33aed10f56067f95:0x329a88e3dac6c8cc!2m2!1d122.9561779!2d10.6854651?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D', '_blank')">View on Map</a>
            </div>
            
            <div class="details-card">
                <h3>Dress Code</h3>
                <p>Something White</p>
            </div>

            <div class="details-card">
                <h3>What to Expect</h3>
                <p>A romantic dinner</p>
                <p>Some surprises prepared just for you</p>
            </div>
            
            <p class="final-note">I can't wait to make more beautiful memories with you!</p>
            <p class="love-note">I love you always and in all ways! </p>
        `;

        // Add the new styles to the existing ones
        const style = document.createElement('style');
        style.textContent = `
            .details-card {
                background: rgba(255, 255, 255, 0.9);
                border-left: 4px solid #ff4b6e;
                padding: 1.5rem;
                margin: 1.5rem 0;
                border-radius: 0 10px 10px 0;
                text-align: left;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }

            .details-card h3 {
                color: #ff4b6e;
                margin-bottom: 0.8rem;
                font-size: 1.3rem;
            }

            .details-card p {
                margin: 0.5rem 0;
                color: #666;
            }

            .map-link {
                display: inline-block;
                margin-top: 0.5rem;
                color: #4CAF50;
                text-decoration: none;
                font-weight: bold;
            }

            .map-link:hover {
                text-decoration: underline;
            }

            .dress-note {
                font-style: italic;
                color: #ff758c !important;
            }

            .final-note {
                margin-top: 2rem !important;
                font-size: 1.3rem !important;
                color: #ff4b6e !important;
            }

            .love-note {
                margin-top: 1rem !important;
                font-weight: bold;
                color: #ff4b6e !important;
            }
        `;
        document.head.appendChild(style);
    });
});
