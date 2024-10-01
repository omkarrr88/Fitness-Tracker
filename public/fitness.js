document.addEventListener('DOMContentLoaded', () => {
    const fitnessVideos = [
        {
            name: 'Free Diet Plan for Weight Loss',
            description: 'A simple and effective meal plan designed to help you lose weight without spending money.',
            link: 'https://www.youtube.com/watch?v=k1p3z2KkUVw'
        },
        {
            name: 'HOW TO BURN BELLY FAT in 90 DAYS!',
            description: 'A step-by-step guide to reducing belly fat through diet and exercise over three months.',
            link: 'https://www.youtube.com/watch?v=6YQ_JEe8fAs'
        },
        {
            name: 'Get Required Protein Daily',
            description: 'Tips on meeting your daily protein needs to support muscle growth and overall health.',
            link: 'https://www.youtube.com/watch?v=BPQ8mNS3V5c'
        },
        {
            name: 'CARDIO VS WEIGHT TRAINING',
            description: 'A comparison of the benefits of cardio and weight training for fat loss and muscle building.',
            link: 'https://www.youtube.com/watch?v=KfTrvT60AXM'
        },
        {
            name: '5 Best Exercise For Shoulder',
            description: 'A list of the top five shoulder exercises to build strength and size.',
            link: 'https://www.youtube.com/watch?v=1iDb6KeolWU'
        },
        {
            name: 'Best Time For Protein',
            description: 'The optimal timing for protein intake to maximize muscle recovery and growth.',
            link: 'https://www.youtube.com/watch?v=UfyZuhKycvU'
        },
        {
            name: 'EPIC 6 MONTH NATURAL BODY TRANSFORMATION',
            description: 'A guide to achieving a full-body transformation naturally in six months with consistent training and nutrition.',
            link: 'https://www.youtube.com/watch?v=uADXDkjKFyQ'
        },
        {
            name: 'Cutting Vs Bulking',
            description: 'The difference between cutting fat and bulking up muscle, and when to do each.',
            link: 'https://www.youtube.com/watch?v=iJZZ85oh2DE'
        },
        {
            name: 'Calculate Maintenance Calories',
            description: 'A method to determine how many calories you need to maintain your current weight.',
            link: 'https://www.youtube.com/watch?v=I7Vyb4TqEuk'
        },
        {
            name: '5 Best Exercise For Chest',
            description: 'For Chest: The most effective exercises for building a strong and defined chest.',
            link: 'https://www.youtube.com/watch?v=cYRWt674KHU'
        },
        {
            name: 'Calculate Calories in Indian Foods',
            description: 'A guide to tracking calories in common Indian dishes to manage diet effectively.',
            link: 'https://www.youtube.com/watch?v=shp2wLXmCaI'
        },
        {
            name: 'Test Your Body Fat Percentage',
            description: 'Methods to measure and track your body fat percentage for better fitness goals',
            link: 'https://www.youtube.com/watch?v=TsxZGA6cD4Y'
        },
        // Add 13 more fitness videos here
    ];

    const fitnessVideosContainer = document.getElementById('fitness-videos');
    fitnessVideos.forEach(video => {
        const videoId = video.link.split('v=')[1];
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `
            <h2>${video.name}</h2>
            <p>${video.description}</p>
            <a href="${video.link}" target="_blank">
                <img src="${thumbnailUrl}" alt="${video.name} Thumbnail">
            </a>
        `;
        fitnessVideosContainer.appendChild(videoElement);
    });
});
