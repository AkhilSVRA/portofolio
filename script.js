// Handle form submission and display a confirmation message
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting
    alert("Thank you for reaching out! I will get back to you soon.");
});

// Toggle visibility of project content
function toggleContent(projectId) {
    const projectElement = document.getElementById(projectId); // Get the project element by ID
    const parentElement = projectElement.parentElement; // Access its parent element

    // Toggle the 'open' class to show/hide project content
    parentElement.classList.toggle("open");
}

// Add click event listeners to all skill elements
document.querySelectorAll(".skill").forEach(skillElement => {
    skillElement.addEventListener("click", () => {
        // Alert the skill name using the data-skill attribute
        const skillName = skillElement.dataset.skill || "this skill";
        alert(`You clicked on ${skillName}`);
    });
});
