document.addEventListener('DOMContentLoaded', () => {
    function saveSleepData() {
        const sleepDate = document.getElementById('sleepDate').value;
        const sleepTime = document.getElementById('sleepTime').value;
        const wakeTime = document.getElementById('wakeTime').value;

        if (!sleepDate || !sleepTime || !wakeTime) {
            alert('Please fill in all fields.');
            return;
        }

        const sleepDateTime = new Date(`${sleepDate}T${sleepTime}`);
        const wakeDateTime = new Date(`${sleepDate}T${wakeTime}`);
        if (wakeDateTime < sleepDateTime) {
            wakeDateTime.setDate(wakeDateTime.getDate() + 1); // Handle overnight sleep
        }
        const sleepDuration = (wakeDateTime - sleepDateTime) / (1000 * 60 * 60); // Convert milliseconds to hours

        const token = localStorage.getItem('token');
        fetch('/api/sleep', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ sleepDate, sleepTime, wakeTime, sleepDuration })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sleep data saved:', data);
            loadSleepChart('7'); // Default to past 7 days
        })
        .catch(error => {
            console.error('Error saving sleep data:', error);
        });
    }

    function loadSleepChart(days) {
        const token = localStorage.getItem('token');
        fetch(`/api/sleep?days=${days}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data); // Debugging log
            const ctx = document.getElementById('sleepChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.dates,
                    datasets: [{
                        label: 'Sleep Duration (hours)',
                        data: data.durations,
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
            console.error('Error loading sleep chart:', error);
        });
    }

    window.saveSleepData = saveSleepData;
    window.loadSleepChart = loadSleepChart;

    loadSleepChart('7'); // Load the chart on page load with default 7 days
});
