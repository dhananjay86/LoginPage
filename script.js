// Get form elements
const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

const togglePassword = document.getElementById("togglePassword");


// Show / Hide Password
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";
        togglePassword.textContent = "Show";

    }

});


// Form Validation
loginForm.addEventListener("submit", function (event) {

    // Prevent form submission
    event.preventDefault();

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // Email Validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent =
            "Email is required.";

        isValid = false;

    } else if (!emailPattern.test(email.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // Password Validation
    if (password.value.trim() === "") {

        passwordError.textContent =
            "Password is required.";

        isValid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        isValid = false;
    }


    // Successful Validation
    if (isValid) {

        successMessage.textContent =
            "Login successful!";

        // Clear form
        loginForm.reset();

        // Reset password button
        password.type = "password";
        togglePassword.textContent = "Show";
    }

});