document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // You can add code here to handle form submission, such as sending data to a server.
            // For this example, we'll just display a confirmation message.
            alert("Message sent successfully!");
            contactForm.reset();
        });
    }
});
