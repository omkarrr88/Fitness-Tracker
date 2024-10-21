const userId = 'USER_ID_FROM_LOGIN'; // Replace with actual user ID from login

const foodData = {
    veg: [
        { name: 'Paneer Tikka', carbs: 10, fats: 15, proteins: 20 },
        { name: 'Aloo Gobi', carbs: 15, fats: 5, proteins: 5 },
        { name: 'Chole Bhature', carbs: 30, fats: 20, proteins: 10 },
        { name: 'Palak Paneer', carbs: 12, fats: 18, proteins: 15 },
        { name: 'Dal Makhani', carbs: 20, fats: 10, proteins: 15 },
        { name: 'Rajma', carbs: 25, fats: 5, proteins: 10 },
        { name: 'Baingan Bharta', carbs: 10, fats: 5, proteins: 5 },
        { name: 'Bhindi Masala', carbs: 12, fats: 8, proteins: 5 },
        { name: 'Kadhi Pakora', carbs: 15, fats: 10, proteins: 8 },
        { name: 'Aloo Paratha', carbs: 35, fats: 15, proteins: 10 },
        { name: 'Paneer Butter Masala', carbs: 15, fats: 25, proteins: 20 },
        { name: 'Matar Paneer', carbs: 18, fats: 15, proteins: 15 },
        { name: 'Gobi Paratha', carbs: 30, fats: 10, proteins: 8 },
        { name: 'Veg Biryani', carbs: 40, fats: 15, proteins: 10 },
        { name: 'Veg Pulao', carbs: 35, fats: 10, proteins: 8 },
        { name: 'Methi Malai Matar', carbs: 20, fats: 20, proteins: 15 },
        { name: 'Aloo Matar', carbs: 25, fats: 8, proteins: 8 },
        { name: 'Chana Masala', carbs: 20, fats: 5, proteins: 15 },
        { name: 'Dum Aloo', carbs: 30, fats: 15, proteins: 10 },
        { name: 'Veg Korma', carbs: 25, fats: 15, proteins: 10 },
        { name: 'Paneer Bhurji', carbs: 10, fats: 20, proteins: 20 },
        { name: 'Aloo Jeera', carbs: 20, fats: 10, proteins: 5 },
        { name: 'Mix Veg', carbs: 15, fats: 10, proteins: 8 },
        { name: 'Veg Kofta', carbs: 20, fats: 15, proteins: 10 },
        { name: 'Paneer Tikka Masala', carbs: 15, fats: 25, proteins: 20 }
    ],
    'non-veg': [
        { name: 'Chicken Curry', carbs: 5, fats: 20, proteins: 30 },
        { name: 'Butter Chicken', carbs: 10, fats: 25, proteins: 35 },
        { name: 'Mutton Biryani', carbs: 45, fats: 30, proteins: 25 },
        { name: 'Fish Curry', carbs: 5, fats: 15, proteins: 25 },
        { name: 'Egg Curry', carbs: 5, fats: 10, proteins: 20 },
        { name: 'Chicken Biryani', carbs: 40, fats: 20, proteins: 30 },
        { name: 'Prawn Curry', carbs: 5, fats: 15, proteins: 25 },
        { name: 'Mutton Curry', carbs: 10, fats: 30, proteins: 35 },
        { name: 'Fish Fry', carbs: 5, fats: 20, proteins: 25 },
        { name: 'Egg Bhurji', carbs: 5, fats: 15, proteins: 20 },
        { name: 'Chicken Tikka', carbs: 5, fats: 20, proteins: 30 },
        { name: 'Mutton Korma', carbs: 10, fats: 35, proteins: 30 },
        { name: 'Fish Biryani', carbs: 40, fats: 20, proteins: 25 },
        { name: 'Egg Biryani', carbs: 35, fats: 15, proteins: 20 },
        { name: 'Chicken 65', carbs: 5, fats: 25, proteins: 30 },
        { name: 'Prawn Biryani', carbs: 40, fats: 20, proteins: 25 },
        { name: 'Mutton Rogan Josh', carbs: 10, fats: 35, proteins: 30 },
        { name: 'Fish Tikka', carbs: 5, fats: 20, proteins: 25 },
        { name: 'Egg Fried Rice', carbs: 50, fats: 15, proteins: 15 },
        { name: 'Chicken Korma', carbs: 10, fats: 30, proteins: 30 },
        { name: 'Prawn Fry', carbs: 5, fats: 20, proteins: 25 },
        { name: 'Mutton Fry', carbs: 10, fats: 35, proteins: 30 },
        { name: 'Fish Curry Rice', carbs: 45, fats: 20, proteins: 25 },
        { name: 'Egg Curry Rice', carbs: 40, fats: 15, proteins: 20 },
        { name: 'Chicken Curry Rice', carbs: 45, fats: 20, proteins: 30 }
    ],
    jain: [
        { name: 'Jain Dal', carbs: 15, fats: 5, proteins: 10 },
        { name: 'Jain Paneer', carbs: 10, fats: 15, proteins: 20 },
        { name: 'Jain Biryani', carbs: 40, fats: 15, proteins: 10 },
        { name: 'Jain Pulao', carbs: 35, fats: 10, proteins: 8 },
        { name: 'Jain Chole', carbs: 25, fats: 5, proteins: 10 },
        { name: 'Jain Rajma', carbs: 25, fats: 5, proteins: 10 },
        { name: 'Jain Aloo', carbs: 20, fats: 5, proteins: 5 },
        { name: 'Jain Bhindi', carbs: 12, fats: 8, proteins: 5 },
        { name: 'Jain Kadhi', carbs: 15, fats: 10, proteins: 8 },
        { name: 'Jain Paratha', carbs: 35, fats: 15, proteins: 10 },
        { name: 'Jain Kofta', carbs: 20, fats: 15, proteins: 10 },
        { name: 'Jain Mix Veg', carbs: 15, fats: 10, proteins: 8 },
        { name: 'Jain Korma', carbs: 25, fats: 15, proteins: 10 },
        { name: 'Jain Tikka', carbs: 10, fats: 15, proteins: 20 },
        { name: 'Jain Butter Masala', carbs: 15, fats: 25, proteins: 20 },
        { name: 'Jain Matar', carbs: 18, fats: 15, proteins: 15 },
        { name: 'Jain Gobi', carbs: 30, fats: 10, proteins: 8 },
        { name: 'Jain Malai', carbs: 20, fats: 20, proteins: 15 },
        { name: 'Jain Aloo Matar', carbs: 25, fats: 8, proteins: 8 },
        { name: 'Jain Chana', carbs: 20, fats: 5, proteins: 15 },
        { name: 'Jain Dum Aloo', carbs: 30, fats: 15, proteins: 10 },
        { name: 'Jain Bhurji', carbs: 10, fats: 20, proteins: 20 },
        { name: 'Jain Jeera', carbs: 20, fats: 10, proteins: 5 },
        { name: 'Jain Veg', carbs: 15, fats: 10, proteins: 8 },
        { name: 'Jain Paneer Masala', carbs: 15, fats: 25, proteins: 20 }
    ]
};

function loadFoodItems() {
    const foodType = document.getElementById('food-type').value;
    const foodItemsDiv = document.getElementById('food-items');
    foodItemsDiv.innerHTML = '';

    foodData[foodType].forEach(food => {
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="checkbox" data-carbs="${food.carbs}" data-fats="${food.fats}" data-proteins="${food.proteins}">
            ${food.name}
        `;
        foodItemsDiv.appendChild(div);
    });
}

function calculateCalories() {
    const checkboxes = document.querySelectorAll('#food-items input[type="checkbox"]:checked');
    let totalCalories = 0;
    let totalCarbs = 0;
    let totalFats = 0;
    let totalProteins = 0;
    let selectedFoods = [];

    checkboxes.forEach(checkbox => {
        const carbs = parseInt(checkbox.getAttribute('data-carbs'));
        const fats = parseInt(checkbox.getAttribute('data-fats'));
        const proteins = parseInt(checkbox.getAttribute('data-proteins'));
        const foodName = checkbox.nextSibling.textContent.trim();

        selectedFoods.push(foodName);
        totalCarbs += carbs;
        totalFats += fats;
        totalProteins += proteins;
        totalCalories += (carbs * 4) + (fats * 9) + (proteins * 4);
    });

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    document.getElementById('total-calories').innerText = `Total Calories: ${totalCalories} (Carbs: ${totalCarbs}g, Fats: ${totalFats}g, Proteins: ${totalProteins}g)`;

    // Return the calculated data
    return { date, time, totalCalories, totalCarbs, totalFats, totalProteins, selectedFoods };
}

function submitCalorieData() {
    const { date, time, totalCalories, totalCarbs, totalFats, totalProteins, selectedFoods } = calculateCalories();

    if (totalCalories === undefined) {
        console.error('Total calories not calculated. Please check your selections.');
        return;
    }

    // Send data to server
    fetch('/calories/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, date, time, totalCalories, totalCarbs, totalFats, totalProteins, selectedFoods })
    })
    .then(response => {
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('Calorie data submitted successfully');
        loadStoredData(); // Refresh stored data
    })
    .catch(error => console.error('Error:', error));
}

function loadStoredData() {
    fetch(`/calories/history?userId=${userId}`)
    .then(response => response.json())
    .then(data => {
        const storedDataDiv = document.getElementById('stored-data');
        storedDataDiv.innerHTML = '';
        data.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.innerHTML = `
                <p>Date: ${entry.date}, Time: ${entry.time}, Calories: ${entry.totalCalories}</p>
                <button onclick="deleteEntry('${entry._id}')">Delete</button>
            `;
            storedDataDiv.appendChild(entryDiv);
        });
    })
    .catch(error => console.error('Error:', error));
}

function deleteEntry(entryId) {
    fetch(`/calories/delete/${entryId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        loadStoredData(); // Refresh stored data
    })
    .catch(error => console.error('Error:', error));
}

function loadWeeklyInsights() {
    fetch(`/calories/weekly-insights?userId=${userId}`)
    .then(response => response.json())
    .then(data => {
        const insightsDiv = document.getElementById('weekly-insights');
        insightsDiv.innerHTML = `<p>Weekly Insights: ${data.insights}</p>`;
    })
    .catch(error => console.error('Error:', error));
}

// Call this function on page load to fetch previous data
document.addEventListener('DOMContentLoaded', loadStoredData);
