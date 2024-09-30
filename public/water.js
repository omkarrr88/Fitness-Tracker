document.addEventListener('DOMContentLoaded', () => {
    const waterElement = document.getElementById('water');
    const waterDrunkElement = document.getElementById('waterDrunk');
    let waterDrunk = localStorage.getItem('waterDrunk') ? parseInt(localStorage.getItem('waterDrunk')) : 0;
    const dailyMilestone = 3000;

    function updateWaterLevel() {
        const percentage = (waterDrunk / dailyMilestone) * 100;
        waterElement.style.height = `${percentage}%`;
        waterDrunkElement.textContent = waterDrunk;
    }

    window.addWater = function(amount) {
        waterDrunk += amount;
        if (waterDrunk > dailyMilestone) {
            waterDrunk = dailyMilestone;
        }
        updateWaterLevel();
        saveWaterIntake(waterDrunk);
        localStorage.setItem('waterDrunk', waterDrunk); // Save to local storage
    };

    function saveWaterIntake(amount) {
        const token = localStorage.getItem('token');
        fetch('/api/water-intake', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ amount })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Water intake saved:', data);
            loadWaterIntakeChart();
        })
        .catch(error => {
            console.error('Error saving water intake:', error);
        });
    }
    

    function loadWaterIntakeChart() {
        const token = localStorage.getItem('token');
        fetch('/api/water-intake', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data); // Debugging log
            const ctx = document.getElementById('waterChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.dates,
                    datasets: [{
                        label: 'Water Intake (ml)',
                        data: data.amounts,
                        borderColor: 'blue',
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error loading water intake chart:', error);
        });
    }

    updateWaterLevel(); // Update the water level on page load
    loadWaterIntakeChart(); // Load the chart on page load
});
