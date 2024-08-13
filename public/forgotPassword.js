document.getElementById('send-otp').addEventListener('click', sendOTP);
document.getElementById('reset-password').addEventListener('click', resetPassword);

function sendOTP() {
    const email = document.getElementById('email').value;
    fetch('/auth/send-otp', { // Ensure the correct route is used
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('OTP sent to your email');
        } else {
            alert('Email not found');
        }
    })
    .catch(error => console.error('Error:', error));
}

function resetPassword() {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    fetch('/auth/verify-otp', { // Ensure the correct route is used
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('OTP verified. Redirecting to reset password page.');
            window.location.href = '/resetPassword.html';
        } else {
            alert('Invalid OTP');
        }
    })
    .catch(error => console.error('Error:', error));
}
