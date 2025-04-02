document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");
  const successMessage = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value;
      const message = document.getElementById("message").value.trim();

      // Validation of input fields
      if (!name || !email || !date) {
        alert("Please fill in all required fields");
        return;
      }

      // Create appointment object
      const appointment = {
        name,
        email,
        date,
        message: message || "No additional message",
      };

      // Save to database
      saveAppointment(appointment);

      // Show success message
      successMessage.style.display = "block";
      form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);

      // Optional: Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});
