document.addEventListener('DOMContentLoaded', () => {
    const waterElement = document.getElementById('water');
    const waterDrunkElement = document.getElementById('waterDrunk');
    let waterDrunk = localStorage.getItem('waterDrunk') ? parseInt(localStorage.getItem('waterDrunk')) : 0;
    const dailyMilestone = 3000;

    function resetWaterIntakeDaily() {
        const lastReset = localStorage.getItem('lastReset');
        const today = new Date().toISOString().split('T')[0];
        if (lastReset !== today) {
            waterDrunk = 0;
            localStorage.setItem('waterDrunk', waterDrunk);
            localStorage.setItem('lastReset', today);
        }
    }

    function updateWaterLevel() {
        const percentage = (waterDrunk / dailyMilestone) * 100;
        waterElement.style.height = `${percentage}%`;
        waterDrunkElement.textContent = waterDrunk;
    }

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
            loadWaterIntakeChart('7'); // Default to past 7 days
        })
        .catch(error => {
            console.error('Error saving water intake:', error);
        });
    }

    function loadWaterIntakeChart(days) {
        const token = localStorage.getItem('token');
        fetch(`/api/water-intake?days=${days}`, {
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

    window.addWater = function(amount) {
        waterDrunk += amount;
        updateWaterLevel();
        saveWaterIntake(waterDrunk);
        localStorage.setItem('waterDrunk', waterDrunk); // Save to local storage
    };

    resetWaterIntakeDaily();
    updateWaterLevel(); // Update the water level on page load
    loadWaterIntakeChart('7'); // Load the chart on page load with default 7 days
});
