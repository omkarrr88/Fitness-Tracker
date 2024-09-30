function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height && weight) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById('bmi-value').textContent = `Your BMI is ${bmi}`;
        
        let condition = '';
        if (bmi < 18.5) {
            condition = 'Underweight';
        } else if (bmi < 24.9) {
            condition = 'Normal weight';
        } else if (bmi < 29.9) {
            condition = 'Overweight';
        } else {
            condition = 'Obesity';
        }
        document.getElementById('bmi-condition').textContent = `Condition: ${condition}`;
    } else {
        alert('Please enter both height and weight.');
    }
}

function resetBMI() {
    document.getElementById('bmi-form').reset();
    document.getElementById('bmi-value').textContent = '';
    document.getElementById('bmi-condition').textContent = '';
}
