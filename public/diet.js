document.addEventListener('DOMContentLoaded', () => {
    const diets = [
        {
            name: 'Ketogenic Diet (Keto)',
            description: 'The ketogenic diet is a high-fat, low-carbohydrate diet that forces the body to burn fats rather than carbohydrates. It is known for its potential benefits in weight loss and managing certain medical conditions.',
            link: 'https://en.wikipedia.org/wiki/Ketogenic_diet'
        },
        {
            name: 'Paleo Diet',
            description: 'The Paleo diet focuses on eating foods that were available to our prehistoric ancestors. This includes lean meats, fish, fruits, vegetables, nuts, and seeds, while avoiding processed foods, grains, and dairy.',
            link: 'https://en.wikipedia.org/wiki/Paleolithic_diet'
        },
        {
            name: 'Mediterranean Diet',
            description: 'The Mediterranean diet is based on the traditional foods that people used to eat in countries like Italy and Greece. It emphasizes fruits, vegetables, whole grains, legumes, nuts, and olive oil, with moderate consumption of fish and poultry.',
            link: 'https://en.wikipedia.org/wiki/Mediterranean_diet'
        },
        {
            name: 'Vegan Diet',
            description: 'The vegan diet excludes all animal products, including meat, dairy, and eggs. It focuses on plant-based foods such as fruits, vegetables, grains, nuts, and seeds.',
            link: 'https://en.wikipedia.org/wiki/Veganism'
        },
        {
            name: 'Vegetarian Diet',
            description: 'The vegetarian diet excludes meat but may include dairy and eggs. It emphasizes plant-based foods such as fruits, vegetables, grains, nuts, and seeds.',
            link: 'https://en.wikipedia.org/wiki/Vegetarianism'
        },
        {
            name: 'Low-Carb Diet',
            description: 'A low-carb diet restricts carbohydrate intake, typically for weight loss or to manage certain medical conditions. It focuses on proteins, fats, and vegetables.',
            link: 'https://en.wikipedia.org/wiki/Low-carbohydrate_diet'
        },
        {
            name: 'Intermittent Fasting',
            description: 'Intermittent fasting involves cycling between periods of eating and fasting. Common methods include the 16/8 method, where you fast for 16 hours and eat during an 8-hour window.',
            link: 'https://en.wikipedia.org/wiki/Intermittent_fasting'
        },
        {
            name: 'DASH Diet',
            description: 'The DASH diet (Dietary Approaches to Stop Hypertension) is designed to combat high blood pressure. It emphasizes fruits, vegetables, whole grains, and lean proteins while reducing salt intake.',
            link: 'https://en.wikipedia.org/wiki/DASH_diet'
        },
        {
            name: 'Gluten-Free Diet',
            description: 'A gluten-free diet excludes gluten, a protein found in wheat, barley, and rye. It is essential for people with celiac disease or gluten sensitivity.',
            link: 'https://en.wikipedia.org/wiki/Gluten-free_diet'
        },
        {
            name: 'Atkins Diet',
            description: 'The Atkins diet is a low-carb diet that emphasizes protein and fat intake while restricting carbohydrates. It is known for its potential benefits in weight loss and managing certain medical conditions.',
            link: 'https://en.wikipedia.org/wiki/Atkins_diet'
        },
        {
            name: 'Whole30 Diet',
            description: 'The Whole30 diet is a 30-day program that eliminates sugar, alcohol, grains, legumes, soy, and dairy. It focuses on whole foods such as meat, seafood, eggs, vegetables, fruits, and nuts.',
            link: 'https://en.wikipedia.org/wiki/Whole30'
        },
        {
            name: 'Zone Diet',
            description: 'The Zone diet aims to balance macronutrients (carbohydrates, proteins, and fats) in a specific ratio to control insulin levels and promote weight loss. It emphasizes lean proteins, healthy fats, and low-glycemic carbohydrates.',
            link: 'https://en.wikipedia.org/wiki/Zone_diet'
        }
    ];

    const dietList = document.getElementById('dietList');
    const searchBar = document.getElementById('searchBar');

    function displayDiets(diets) {
        dietList.innerHTML = '';
        diets.forEach(diet => {
            const dietCard = document.createElement('div');
            dietCard.classList.add('diet-card');
            dietCard.innerHTML = `
                <h2>${diet.name}</h2>
                <p>${diet.description}</p>
                <a href="${diet.link}" target="_blank">Read more on Wikipedia</a>
            `;
            dietList.appendChild(dietCard);
        });
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredDiets = diets.filter(diet => 
            diet.name.toLowerCase().includes(searchTerm) ||
            diet.description.toLowerCase().includes(searchTerm)
        );
        displayDiets(filteredDiets);
    });

    displayDiets(diets);
});
