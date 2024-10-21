document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    if (!token) {
        console.error('Token not found. Please log in.');
        return;
    }

    // Fetch and display data for each tracker
    loadCalorieData();
    loadWorkoutData();
    loadSleepData();
    loadWaterIntakeData();

    function loadCalorieData() {
        fetch('/calories/weekly-insights', {
            headers: {
                'Authorization': `Bearer ${token}` // Corrected syntax
            }
        })
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('calorieChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.dates,
                    datasets: [{
                        label: 'Calories Consumed',
                        data: data.amounts,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
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
        .catch(error => console.error('Error loading calorie data:', error));
    }

    function loadWorkoutData() {
        // Implement similar logic to fetch and display workout data
    }

    function loadSleepData() {
        fetch('/api/sleep?days=7', {
            headers: {
                'Authorization': `Bearer ${token}` // Corrected syntax
            }
        })
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('sleepChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.dates,
                    datasets: [{
                        label: 'Sleep Duration (hours)',
                        data: data.durations,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2
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
        .catch(error => console.error('Error loading sleep data:', error));
    }

    function loadWaterIntakeData() {
        fetch('/api/water-intake?days=7', {
            headers: {
                'Authorization': `Bearer ${token}` // Corrected syntax
            }
        })
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('waterIntakeChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.dates,
                    datasets: [{
                        label: 'Water Intake (ml)',
                        data: data.amounts,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderWidth: 2
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
        .catch(error => console.error('Error loading water intake data:', error));
    }
});
