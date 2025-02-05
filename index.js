function showSection(sectionId) {
    var sections = document.querySelectorAll(".content");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});