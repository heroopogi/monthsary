document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.querySelector('.buttons');

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
        
        // Change the content to show a sweet message
        const invitation = document.querySelector('.invitation');
        invitation.innerHTML = `
            <h1>Yay!</h1>
            <div class="heart"></div>
            <h2>I can't wait to celebrate with you!</h2>
            <p>Thank you for being the most amazing girlfriend and for making these 2 years absolutely magical and meaningful.</p>
            <p>I love you more and more each day!</p>
        `;
    });
});
