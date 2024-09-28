document.getElementById('send-otp').addEventListener('click', function() {
    const email = document.getElementById('email').value;

    fetch('/auth/send-otp', {
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
            document.getElementById('otp-group').style.display = 'block';
        } else {
            alert('Email not found');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('verify-otp').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;

    fetch('/auth/verify-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('OTP verified. You can now reset your password.');
            document.getElementById('password-group').style.display = 'block';
            document.getElementById('confirm-password-group').style.display = 'block';
        } else {
            alert('Invalid OTP');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('reset-password').addEventListener('click', function() {
    console.log('Reset password button clicked'); // Debugging log
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-new-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    fetch('/auth/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('API Response:', data); // Debugging log
        if (data.success) {
            alert('Password reset successful');
            window.location.href = '/login.html';
        } else {
            alert('Error resetting password');
        }
    })
    .catch(error => console.error('Error:', error));
});