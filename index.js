function getRandomIP() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

function updateCheckingText() {
    const ipElement = document.getElementById('ip-address');
    let dots = 1;
    const interval = setInterval(() => {
        ipElement.textContent = `IP: checking${'.'.repeat(dots)}`;
        dots = (dots % 3) + 1;
    }, 500);
    return interval;
}

function checkIP() {
    const ipElement = document.getElementById('ip-address');
    ipElement.textContent = `Your IP Address: ${getRandomIP()}`;
}

function redirect() {
    window.location.href = 'https://app.meetefy.com'; // Replace with the actual URL you want to redirect to
}

// Initial IP check and redirect after 10 seconds
window.onload = () => {
    const interval = updateCheckingText();
    setTimeout(() => {
        clearInterval(interval);
        checkIP();
        setTimeout(redirect, 3000); // Show the IP for 3 seconds before redirecting
    }, 7000); // Show "checking..." animation for 7 seconds
};
