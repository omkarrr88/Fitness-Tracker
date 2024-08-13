document.getElementById('createAccountForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const messageDiv = document.getElementById('message');
    
    if (password !== confirmPassword) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Passwords do not match!';
        return;
    }
    
    const response = await fetch('/auth/create-account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, gender, dob, email, phone, password })
    });
    
    const result = await response.json();
    
    if (result.success) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Account created successfully!';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = result.message;
    }
});
