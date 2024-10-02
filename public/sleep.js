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
            if (!data.success) {
                alert(data.message); // Show error message if sleep data for the same date already exists
            } else {
                console.log('Sleep data saved:', data);
                window.location.reload(); // Refresh the page to update the graph
            }
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
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                color: 'rgb(255, 99, 132)'
                            }
                        },
                        tooltip: {
                            enabled: true,
                            mode: 'index',
                            intersect: false,
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date',
                                color: '#911',
                                font: {
                                    family: 'Comic Sans MS',
                                    size: 15,
                                    weight: 'bold',
                                    lineHeight: 1.2,
                                },
                                padding: {top: 20, left: 0, right: 0, bottom: 0}
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Sleep',
                                color: '#191',
                                font: {
                                    family: 'Comic Sans MS',
                                    size: 15,
                                    weight: 'bold',
                                    lineHeight: 1.2,
                                },
                                padding: {top: 30, left: 0, right: 0, bottom: 0}
                            },
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
