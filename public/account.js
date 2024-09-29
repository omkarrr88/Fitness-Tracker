document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multi-step-form');
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const steps = document.querySelectorAll('.form-step');
    const progress = document.getElementById('progress');
    const progressSteps = document.querySelectorAll('.progress-step');

    let formStepNum = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const currentStep = steps[formStepNum];
            const inputs = currentStep.querySelectorAll('input, select');
            let allValid = true;

            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    allValid = false;
                }
            });

            if (!allValid) {
                return;
            }

            if (formStepNum === 0) {
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;

                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }

                const response = await fetch('/auth/check-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                const result = await response.json();
                if (response.status === 400) {
                    alert(result.message);
                    return;
                }
            }

            formStepNum++;
            updateFormSteps();
            updateProgressBar();
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            formStepNum--;
            updateFormSteps();
            updateProgressBar();
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Ensure all required fields are included
        const requiredFields = [
            'name', 'gender', 'dob', 'email', 'phone', 'password', 'confirmPassword', 'age', 'heightCm', 'weight',
            'fitnessGoal', 'goalTime', 'dietType', 'mealsPerDay', 'waterIntake', 'activityLevel', 'regularActivity',
            'workoutType', 'workoutFrequency', 'sleepHours', 'sleepTime', 'sleepTrouble', 'healthCondition',
            'dailySteps', 'breakfastTime', 'lunchTime', 'dinnerTime', 'overallWellness', 'dailyFeeling'
        ];

        for (const field of requiredFields) {
            if (!data[field]) {
                alert(`Please fill out the ${field} field.`);
                return;
            }
        }

        const response = await fetch('/auth/create-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.status === 400) {
            alert(result.message);
            return;
        }

        if (response.status === 201) {
            alert('Account created successfully');
            window.location.href = '/login.html'; // Redirect to login page
        } else {
            alert('Error creating account');
        }
    });

    function updateFormSteps() {
        steps.forEach(step => {
            step.classList.contains('form-step-active') && step.classList.remove('form-step-active');
        });
        steps[formStepNum].classList.add('form-step-active');
    }

    function updateProgressBar() {
        progressSteps.forEach((step, idx) => {
            if (idx < formStepNum + 1) {
                step.classList.add('progress-step-active');
            } else {
                step.classList.remove('progress-step-active');
            }
        });

        const progressActive = document.querySelectorAll('.progress-step-active');
        progress.style.width = (progressActive.length - 1) / (progressSteps.length - 1) * 100 + '%';
    }
});
