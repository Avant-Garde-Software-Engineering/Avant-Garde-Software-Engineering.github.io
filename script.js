document.addEventListener('DOMContentLoaded', function () {
    const participants = document.querySelectorAll('.participant');
    let currentIndex = 0;

    function displayParticipant(index) {
        participants.forEach((participant, i) => {
            if (i === index) {
                participant.style.display = 'block';
                setTimeout(() => {
                    participant.style.opacity = 0;
                    setTimeout(() => {
                        participant.style.display = 'none';
                        displayParticipant(currentIndex);
                    }, 500); // 500ms for fading out
                }, 4500); // 4500ms for displaying
            } else {
                participant.style.display = 'none';
            }
            currentIndex = (currentIndex + 1) % participants.length;
        });
    }

    // Display the first name initially
    displayParticipant(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % participants.length;
        displayParticipant(currentIndex);
    }, 5000); // Change name every 5 seconds (including fade-out time)
});
