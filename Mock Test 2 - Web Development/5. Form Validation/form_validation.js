/*
5. Create a form with proper form validation using JavaScript (name, email, phone number, password, age, gender, date, color picker).
*/

function validateForm(event) {
  event.preventDefault();

  // Get form inputs
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var password = document.getElementById("password").value.trim();
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var date = document.getElementById("date").value;
  var color = document.getElementById("color").value;

  // Validation checks
  var valid = true;
  var errorMessages = [];

  if (name === "") {
    errorMessages.push("Name is required.");
    valid = false;
  }

  if (!isValidEmail(email)) {
    errorMessages.push("Invalid email address.");
    valid = false;
  }

  if (!isValidPhoneNumber(phone)) {
    errorMessages.push("Invalid phone number.");
    valid = false;
  }

  if (password.length < 6) {
    errorMessages.push("Password must be at least 6 characters long.");
    valid = false;
  }

  if (isNaN(age) || age < 1 || age > 150) {
    errorMessages.push("Invalid age.");
    valid = false;
  }

  if (gender === "") {
    errorMessages.push("Gender is required.");
    valid = false;
  }

  if (date === "") {
    errorMessages.push("Date is required.");
    valid = false;
  }

  if (color === "#000000") {
    errorMessages.push("Please select a color.");
    valid = false;
  }

  // Display validation errors or submit the form
  var errorContainer = document.getElementById("errorContainer");
  if (valid) {
    // Form is valid, submit the form
    errorContainer.innerHTML = "";
    document.getElementById("myForm").submit();
  } else {
    // Display error messages
    errorContainer.innerHTML = "";
    errorMessages.forEach(function (message) {
      var p = document.createElement("p");
      p.classList.add("error");
      p.textContent = message;
      errorContainer.appendChild(p);
    });
  }
}

function isValidEmail(email) {
  // Simple email validation regex pattern
  var pattern = /^\S+@\S+\.\S+$/;
  return pattern.test(email);
}

function isValidPhoneNumber(phone) {
  // Simple phone number validation regex pattern
  var pattern = /^\d{10}$/;
  return pattern.test(phone);
}
