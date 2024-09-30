document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
            }
        });

        const result = await response.json();
        if (result.success) {
            document.getElementById('name').textContent = result.user.name;
            document.getElementById('gender').textContent = result.user.gender;
            document.getElementById('dob').textContent = new Date(result.user.dob).toLocaleDateString();
            document.getElementById('email').textContent = result.user.email;
            document.getElementById('phone').textContent = result.user.phone;
            document.getElementById('age').textContent = result.user.age;
            document.getElementById('height').textContent = result.user.heightCm + ' cm';
            document.getElementById('weight').textContent = result.user.weight + ' kg';
        } else {
            alert('Failed to fetch profile information');
        }
    } catch (error) {
        console.error('Error fetching profile information:', error);
    }
});

document.getElementById('edit-profile').addEventListener('click', () => {
    window.location.href = '/editprofile.html'; // Redirect to edit profile page
});

document.getElementById('change-password').addEventListener('click', () => {
    window.location.href = '/forgotPassword.html'; // Redirect to change password page
});
