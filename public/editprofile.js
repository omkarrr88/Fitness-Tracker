document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('edit-profile-form');
    const formSteps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    let currentStep = 0;

    // Fetch user data
    try {
        const response = await fetch('/api/user/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();

        // Populate form with user data
        document.getElementById('name').value = userData.user.name;
        document.getElementById('email').value = userData.user.email;
        document.getElementById('phone').value = userData.user.phone;
        document.getElementById('heightCm').value = userData.user.heightCm;
        document.getElementById('weight').value = userData.user.weight;
        document.getElementById('fitnessGoal').value = userData.user.fitnessGoal;
        document.getElementById('goalTime').value = userData.user.goalTime;
        document.getElementById('dietType').value = userData.user.dietType;
        document.getElementById('mealsPerDay').value = userData.user.mealsPerDay;
        document.getElementById('waterIntake').value = userData.user.waterIntake;
        document.getElementById('activityLevel').value = userData.user.activityLevel;
        document.getElementById('regularActivity').value = userData.user.regularActivity;
        document.getElementById('workoutType').value = userData.user.workoutType;
        document.getElementById('workoutFrequency').value = userData.user.workoutFrequency;
        document.getElementById('sleepHours').value = userData.user.sleepHours;
        document.getElementById('sleepTime').value = userData.user.sleepTime;
        document.getElementById('sleepTrouble').value = userData.user.sleepTrouble;
        document.getElementById('healthCondition').value = userData.user.healthCondition;
        document.getElementById('dailySteps').value = userData.user.dailySteps;
        document.getElementById('breakfastTime').value = userData.user.breakfastTime;
        document.getElementById('lunchTime').value = userData.user.lunchTime;
        document.getElementById('dinnerTime').value = userData.user.dinnerTime;
        document.getElementById('overallWellness').value = userData.user.overallWellness;
        document.getElementById('dailyFeeling').value = userData.user.dailyFeeling;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Profile updated successfully');
                window.location.href = '/profile.html'; // Redirect to profile page
            } else {
                alert('Error updating profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        }
    });

    // Initial display
    showStep(currentStep);

    // Handle next button click
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep++;
            showStep(currentStep);
        });
    });

    // Handle previous button click
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    // Show the current step
    function showStep(step) {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('form-step-active', index === step);
        });
    }
});

// Function to show popup when email field is clicked
function showEmailChangePopup() {
    alert('You cannot change your email ID.');
}
