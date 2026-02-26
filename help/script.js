// Set the current year in the footer dynamically
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Function to copy the Google Apps Script code to clipboard
function copyCode() {
    const codeText = document.getElementById("scriptCode").innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.querySelector(".btn-download");
        const originalText = btn.innerText;

        // Visual feedback for the user
        btn.innerText = "✓ Copied to Clipboard!";
        btn.style.background = "#059669"; // Darker green

        // Reset button after 2.5 seconds
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "#10b981"; // Original green
        }, 2500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy. Please select the text and copy manually.');
    });
}

console.log("DuoLines SEO-Optimized Help Page Loaded Successfully.");
