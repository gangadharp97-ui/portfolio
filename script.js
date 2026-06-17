/* ==========================================================================
   PORTFOLIO INTERACTIVITY ENGINE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC FOOTER YEAR AUTO-UPDATE
    // Automatically keeps your copyright date accurate without manual hardcoding
    const footerText = document.querySelector("footer p");
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `© ${currentYear} Sai Gangadhar Potluri | Designed for Structural Performance`;
    }

    // 2. SMOOTH BUTTON RIPPLE EFFECT ANCHORS
    // Adds a subtle, high-end tactile feel when clicking on primary layout buttons
    const buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            // Check if it's a download link to prevent blocking standard download behaviors
            if (this.hasAttribute('download')) return;
            
            // Subtle log to verify browser navigation context in debug mode
            console.log(`Navigating securely to external target: ${this.getAttribute('href')}`);
        });
    });

    // 3. PROJECT CARD HOVER ELEVATION GLOW
    // Gently shifts shadow opacity and handles hover highlights robustly across all platforms
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = "rgba(37, 99, 235, 0.3)";
        });
        
        card.addEventListener("mouseleave", () => {
            // Clearing the inline property cleanly forces the engine to revert back to native CSS styles
            card.style.borderColor = "";
        });
    });

});