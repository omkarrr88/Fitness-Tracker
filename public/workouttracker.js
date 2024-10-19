document.addEventListener('DOMContentLoaded', () => {
    const logWorkoutButton = document.getElementById('log-workout');
    const workoutLogContainer = document.getElementById('workout-log');
    const workoutDateInput = document.getElementById('workout-date');
    const logDateInput = document.getElementById('log-date');
    const viewWorkoutsButton = document.getElementById('view-workouts');

    workoutDateInput.addEventListener('change', loadWorkouts);
    viewWorkoutsButton.addEventListener('click', loadWorkouts);

    logWorkoutButton.addEventListener('click', () => {
        const exerciseType = document.getElementById('exercise-type').value;
        const time = document.getElementById('time').value;
        const reps = document.getElementById('reps').value;
        const sets = document.getElementById('sets').value;
        const weight = document.getElementById('weight').value;
        const date = workoutDateInput.value; // Use selected date

        const totalCalories = calculateCalories(exerciseType, reps, sets);

        const token = localStorage.getItem('token');
        fetch('/api/workout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ date, exerciseType, time, reps, sets, weight, totalCalories })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Workout logged successfully');
                loadWorkouts(); // Refresh the workout log
                location.reload(); // Refresh the page to clear inputs
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error logging workout:', error);
        });
    });

    function calculateCalories(exerciseType, reps, sets) {
        const caloriesPerRep = {
            running: 0.1,
            cycling: 0.08,
            swimming: 0.13,
            benchpress: 0.05,
            inclinepress: 0.06,
            pushups: 0.04,
            chestfly: 0.05,
            cablecross: 0.06,
            dumbbellpress: 0.05,
            pecdeck: 0.05,
            deadlift: 0.07,
            pullups: 0.06,
            latpulldown: 0.05,
            barbellrow: 0.06,
            dumbbellrow: 0.05,
            tbarrow: 0.06,
            hyperextension: 0.04
        };

        return reps * sets * (caloriesPerRep[exerciseType] || 0);
    }

    function loadWorkouts() {
        const date = logDateInput.value; // Use selected date for filtering
        const token = localStorage.getItem('token');
        fetch(`/api/workout?date=${date}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                workoutLogContainer.innerHTML = data.workouts.map(workout => `
                    <div class="workout-entry">
                        <p><strong>Exercise:</strong> ${workout.exerciseType}</p>
                        <p><strong>Time:</strong> ${workout.time || 'N/A'} minutes</p>
                        <p><strong>Reps:</strong> ${workout.reps || 'N/A'}</p>
                        <p><strong>Sets:</strong> ${workout.sets || 'N/A'}</p>
                        <p><strong>Weight:</strong> ${workout.weight || 'N/A'} kg</p>
                        <p><strong>Calories Burned:</strong> ${workout.totalCalories || 'N/A'} kcal</p>
                        <button class="delete-btn" onclick="deleteWorkout('${workout._id}')">Delete</button>
                    </div>
                `).join('');
            } else {
                workoutLogContainer.innerHTML = '<p>No workouts logged for this date.</p>';
                alert('No workout data available for the selected date.');
            }
        })
        .catch(error => {
            console.error('Error loading workouts:', error);
        });
    }

    window.deleteWorkout = (workoutId) => {
        const token = localStorage.getItem('token');
        fetch(`/api/workout/${workoutId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Workout deleted successfully');
                loadWorkouts(); // Refresh the workout log
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error deleting workout:', error);
        });
    };            

    // Load workouts for the current date on page load
    workoutDateInput.value = new Date().toISOString().split('T')[0];
    loadWorkouts();
});
