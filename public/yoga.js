document.addEventListener('DOMContentLoaded', () => {
    const yogaVideos = [
        {
            name: 'Vrikshasana',
            description: 'Also known as the Tree Pose, it enhances balance and strengthens legs and spine',
            link: 'https://www.youtube.com/watch?v=QeYhMXJWpJg'
        },
        {
            name: 'Trikonasana',
            description: 'The Triangle Pose stretches the sides of the body and improves flexibility.',
            link: 'https://www.youtube.com/watch?v=FSdVBFpT6i4'
        },
        {
            name: 'Ardha Chakrasana',
            description: 'The Half Wheel Pose opens the chest, strengthens the back, and enhances spinal flexibility.',
            link: 'https://www.youtube.com/watch?v=i6EPVHHlFNk'
        },
        {
            name: 'Bhadrasan',
            description: 'Known as the Gracious Pose, it improves flexibility of the inner thighs and groin.',
            link: 'https://www.youtube.com/watch?v=9WDAW2yA2Og'
        },
        {
            name: 'Ustrasana',
            description: 'The Camel Pose stretches the front body and strengthens the back and shoulders.',
            link: 'https://www.youtube.com/watch?v=dwVMKOmHAXY'
        },
        {
            name: 'Vajrasana',
            description: 'The Thunderbolt Pose improves digestion and enhances mindfulness during meditation.',
            link: 'https://www.youtube.com/watch?v=tFIrxireDAo'
        },
        {
            name: 'Shashankasana',
            description: 'The Rabbit Pose deeply relaxes the back and relieves stress.',
            link: 'https://www.youtube.com/watch?v=9FL5WlTXo-0'
        },
        {
            name: 'Vakrasana',
            description: 'The Twisted Pose increases spinal flexibility and improves digestion.',
            link: 'https://www.youtube.com/watch?v=z0XHmCRIdyE'
        },
        {
            name: 'Bhujangasana',
            description: 'The Cobra Pose strengthens the spine and opens up the chest and lungs',
            link: 'https://www.youtube.com/watch?v=99RR2vRvgi8'
        },
        {
            name: 'Shalabhasana',
            description: 'The Locust Pose strengthens the lower back, glutes, and legs.',
            link: 'https://www.youtube.com/watch?v=mJv68rV86j8'
        },
        {
            name: 'Pawanmuktasana',
            description: 'The Wind-Relieving Pose relieves gas and improves digestion',
            link: 'https://www.youtube.com/watch?v=tKS0OO58IZQ'
        },
        {
            name: 'Setubandhasana',
            description: 'The Bridge Pose strengthens the spine and opens the chest and hips.',
            link: 'https://www.youtube.com/watch?v=Exyjk7hNs4c'
        },
        {
            name: 'Nadi Shodhan Pranayam',
            description: 'Alternate Nostril Breathing calms the mind and balances the nervous system.',
            link: 'https://www.youtube.com/watch?v=vLJcIibEQwU'
        },
        {
            name: 'Dhyana',
            description: 'Meditation that promotes mental clarity and emotional calm.',
            link: 'https://www.youtube.com/watch?v=YPFEOUZTT8g'
        },
        {
            name: 'Tadasana',
            description: 'The Mountain Pose improves posture and balance while strengthening the legs.',
            link: 'https://www.youtube.com/watch?v=drBqFWcLEcE'
        },
        // Add 13 more yoga videos here
    ];

    const yogaVideosContainer = document.getElementById('yoga-videos');
    yogaVideos.forEach(video => {
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
        yogaVideosContainer.appendChild(videoElement);
    });
});
