document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    
    const messageDiv = document.getElementById('message');
    if (result.success) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
        localStorage.setItem('token', result.token); // Store the token
        window.location.href = 'dashboard.html'; // Ensure this path is correct
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = result.message;
    }
});
