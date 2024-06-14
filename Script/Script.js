// Function to hide and show personal information
function togglePersonalInfo() {
    const emailInput = document.getElementById('emailInput');
    const personalInfo = document.getElementById('personalInfo');
    const userEmail = 'sinhvien@funix.edu.vn'; // Set your email here

    if (emailInput.value === userEmail) {
        personalInfo.style.display = 'block';
    } else {
        alert('Please enter the correct email to view personal information.');
    }
}

// Function to toggle the visibility of sections
function toggleSection(button) {
    const content = button.previousElementSibling;
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = 'View Less';
    } else {
        content.style.display = 'none';
        button.textContent = 'View More';
    }
}

// Add event listeners for hover effect
document.querySelectorAll('.collapsible').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.querySelector('.toggle-button').style.display = 'block';
    });

    section.addEventListener('mouseleave', () => {
        if (section.querySelector('.content').style.display === 'none') {
            section.querySelector('.toggle-button').style.display = 'none';
        }
    });
});