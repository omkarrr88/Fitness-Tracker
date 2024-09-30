document.addEventListener('DOMContentLoaded', () => {
    const doctors = [
        {
            name: 'Dr. John Doe',
            degree: 'MD, Cardiology',
            address: '123 Heart St, Wellness City',
            website: 'http://johndoe.com',
            photo: 'doctor1.jpeg'
        },
        {
            name: 'Dr. Jane Smith',
            degree: 'MD, Neurology',
            address: '456 Brain Ave, Health Town',
            website: 'http://janesmith.com',
            photo: 'doctor2.avif'
        },
        {
            name: 'Dr. Emily Johnson',
            degree: 'MD, Pediatrics',
            address: '789 Child Rd, Care City',
            website: 'http://emilyjohnson.com',
            photo: 'doctor3.avif'
        },
        {
            name: 'Dr. Michael Brown',
            degree: 'MD, Orthopedics',
            address: '101 Bone St, Fit Town',
            website: 'http://michaelbrown.com',
            photo: 'doctor4.avif'
        },
        {
            name: 'Dr. Sarah Davis',
            degree: 'MD, Dermatology',
            address: '202 Skin Ave, Glow City',
            website: 'http://sarahdavis.com',
            photo: 'doctor5.jpeg'
        },
        {
            name: 'Dr. David Wilson',
            degree: 'MD, Psychiatry',
            address: '303 Mind St, Peace Town',
            website: 'http://davidwilson.com',
            photo: 'doctor6.webp'
        },
        {
            name: 'Dr. Laura Martinez',
            degree: 'MD, Gynecology',
            address: '404 Women Rd, Care City',
            website: 'http://lauramartinez.com',
            photo: 'doctor7.jpg'
        },
        {
            name: 'Dr. James Anderson',
            degree: 'MD, Oncology',
            address: '505 Cancer St, Hope Town',
            website: 'http://jamesanderson.com',
            photo: 'doctor8.webp'
        },
        {
            name: 'Dr. Patricia Thomas',
            degree: 'MD, Endocrinology',
            address: '606 Hormone Ave, Balance City',
            website: 'http://patriciathomas.com',
            photo: 'doctor9.avif'
        },
        {
            name: 'Dr. Robert Jackson',
            degree: 'MD, Gastroenterology',
            address: '707 Digestive Rd, Health Town',
            website: 'http://robertjackson.com',
            photo: 'doctor10.avif'
        }
    ];

    const doctorList = document.getElementById('doctorList');
    const searchBar = document.getElementById('searchBar');

    function displayDoctors(doctors) {
        doctorList.innerHTML = '';
        doctors.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.classList.add('doctor-card');
            doctorCard.innerHTML = `
                <img src="${doctor.photo}" alt="${doctor.name}">
                <div class="doctor-info">
                    <h2>${doctor.name}</h2>
                    <p>${doctor.degree}</p>
                    <p>${doctor.address}</p>
                    <p><a href="${doctor.website}" target="_blank">Visit Website</a></p>
                </div>
            `;
            doctorList.appendChild(doctorCard);
        });
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredDoctors = doctors.filter(doctor => 
            doctor.name.toLowerCase().includes(searchTerm) ||
            doctor.degree.toLowerCase().includes(searchTerm) ||
            doctor.address.toLowerCase().includes(searchTerm)
        );
        displayDoctors(filteredDoctors);
    });

    displayDoctors(doctors);
});
