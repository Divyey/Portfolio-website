// JavaScript for Dynamic Background Color Change
document.addEventListener("scroll", function () {
    const body = document.querySelector("body");
    const scrollPosition = window.scrollY;
    const maxScroll = 1000; // Adjust this value based on how far you want the color transition to happen

    // Calculate the percentage of scroll
    const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);

    // Define the initial and final colors
    const initialColor = [0, 0, 0]; // Black (RGB: #000)
    const finalColor = [51, 51, 51]; // Gray (RGB: #333)

    // Interpolate between the initial and final colors based on scroll percentage
    const currentColor = initialColor.map((channel, index) => {
        return Math.round(channel + (finalColor[index] - channel) * scrollPercentage);
    });

    // Apply the new background color
    body.style.background = `rgb(${currentColor.join(",")})`;
});

// Optional: Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Optional: Form Submission Handling
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    // You can add AJAX or backend integration here
});