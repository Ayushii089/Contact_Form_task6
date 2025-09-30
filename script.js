document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop refresh

  let valid = true;

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required";
    valid = false;
  } else {
    document.getElementById("messageError").innerText = "";
  }

  // If valid, show success and submitted details
  if (valid) {
    document.getElementById("successMessage").innerText = "Form submitted successfully!";

    document.getElementById("submittedMessage").innerHTML = `
      <h4>📩 Submitted Details</h4>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    // Reset form fields
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("successMessage").innerText = "";
    document.getElementById("submittedMessage").innerHTML = "";
  }
});
