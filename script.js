document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contactButton');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');
    const contactForm = document.getElementById('contactForm');

    contactButton.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch('https://getform.io/f/bkkgnpmb', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                contactForm.reset();
                popup.style.display = 'none';
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});


document.addEventListener('DOMContentLoaded',function (){
    const cardsContainer = document.querySelector('.cards');
    const cardData = [
        {
            imgSrc: './assets/card1.png',
            heading: 'Clarified Vision & Target',
            paragraph:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
            imgSrc: './assets/card2.png',
            heading: 'High Performance',
            paragraph:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
            imgSrc: './assets/card3.png',
            heading: 'Maintain Security',
            paragraph:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
            imgSrc: './assets/card4.png',
            heading: 'Better Strategy & Quality',
            paragraph:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
    ];
    cardData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = data.imgSrc;
        img.alt = data.heading;

        const heading = document.createElement('h3');
        heading.textContent = data.heading;

        const paragraph = document.createElement('p');
        paragraph.textContent = data.paragraph;

        card.appendChild(img);
        card.appendChild(heading);
        card.appendChild(paragraph);
        cardsContainer.appendChild(card);
    });
})

document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.querySelector('.projects');
    const projectImage = document.getElementById('project-image');
    const projectData = [
        {
            id: 1,
            imgSrc: './assets/image@2x.png',
            title: 'Genderless Kei – Japan’s Hot',
            paragraph: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of'
        },
        {
            id: 2,
            imgSrc: './assets/landscape1.jpg',
            title: 'Better Strategy & Quality',
            paragraph: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of'
        },
        {
            id: 3,
            imgSrc: './assets/landscape2.jpg',
            title: 'Genderless Kei – Japan’s Hot',
            paragraph: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of'
        }
    ];

    let selectedProject = null;

    projectData.forEach((data, index) => {
        const project = document.createElement('div');
        project.className = 'project';
        const title = document.createElement('h3');
        title.textContent = data.title;
        const paragraph = document.createElement('p');
        paragraph.textContent = data.paragraph;
        project.addEventListener('click', () => {
            selectProject(project, data.imgSrc);
        });
        project.appendChild(title);
        project.appendChild(paragraph);
        projectsContainer.appendChild(project);

        if (data.id === 1) {
            selectProject(project, data.imgSrc);
        }
    });

    function selectProject(project, imgSrc) {
        if (selectedProject) {
            selectedProject.classList.remove('selected');
        }
        project.classList.add('selected');
        selectedProject = project;
        swipeProjectsToRight(imgSrc);
    }

    function swipeProjectsToRight(imgSrc) {
        projectsContainer.style.transform = 'translateX(10px)';
            projectImage.src = imgSrc;
            projectImage.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-containers');
    const dots = document.querySelectorAll('.dots .dot');

    images.forEach((image, index) => {
        image.addEventListener('mouseenter', () => {
            updateDots(index);
        });
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = dot.getAttribute('data-index');
            updateImages(index);
            updateDots(index);
        });
    });

    function updateImages(index) {
        images.forEach((image, i) => {
            image.style.display = i == index ? 'block' : 'none';
        });
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i == index);
        });
    }
});

