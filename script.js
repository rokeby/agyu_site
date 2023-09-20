function showCredits() {
    const videoContainer = document.querySelector('.video-container');
    const credits = document.querySelector('#credits');
    const infoButton = document.querySelector('#info-button');
    const backButton = document.querySelector('#back-button'); // Added this line

    videoContainer.style.display = 'none';
    credits.style.display = 'block';
    infoButton.style.display = 'none';
    backButton.style.display = 'block'; // Added this line
}

function showVideo() {
    const videoContainer = document.querySelector('.video-container');
    const credits = document.querySelector('#credits');
    const infoButton = document.querySelector('#info-button');
    const backButton = document.querySelector('#back-button'); // Added this line

    videoContainer.style.display = 'block';
    credits.style.display = 'none';
    infoButton.style.display = 'block';
    backButton.style.display = 'none'; // Added this line
}
