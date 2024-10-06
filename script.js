/// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Modal functionality for project details
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modal.style.display = "block";

    if (projectId === 'project1') {
        modalText.innerHTML = "<h3>Interactive Cybersecurity Platform</h3><p>This project focuses on educating users about cybersecurity in smart cities. It was developed using modern front-end technologies including HTML, CSS, and JavaScript.</p>";
    } else if (projectId === 'project2') {
        modalText.innerHTML = "<h3>Hospital Finder</h3><p>This web application helps users find hospitals and check the availability of beds, doctors, and ICU facilities, using JavaScript and MySQL on the backend.</p>";
    } else if (projectId === 'project3') {
        modalText.innerHTML = "<h3>UsabilityHub Clone</h3><p>A clone of the UsabilityHub website, designed with a focus on front-end user interactions. Built using HTML, CSS, and JavaScript.</p>";
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

