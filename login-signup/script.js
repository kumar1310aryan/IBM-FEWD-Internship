// Show signup form with animation
document.getElementById("showSignup").addEventListener("click", function () {
  const loginForm = document.getElementById("loginFormContainer");
  const signupForm = document.getElementById("signupFormContainer");

  loginForm.classList.remove("show");
  signupForm.classList.add("show");
  loginForm.style.display = "none"; // Hide login form immediately
  signupForm.style.display = "block"; // Show signup form
  requestAnimationFrame(() => {
    signupForm.classList.add("show"); // Trigger animation
  });
});

// Show login form with animation
document.getElementById("showLogin").addEventListener("click", function () {
  const loginForm = document.getElementById("loginFormContainer");
  const signupForm = document.getElementById("signupFormContainer");

  signupForm.classList.remove("show");
  loginForm.classList.add("show");
  signupForm.style.display = "none"; // Hide signup form immediately
  loginForm.style.display = "block"; // Show login form
  requestAnimationFrame(() => {
    loginForm.classList.add("show"); // Trigger animation
  });
});

// Retrieve users from local storage
const users = JSON.parse(localStorage.getItem("users")) || {};

// Login form submission handling
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const messageElement = document.getElementById("loginMessage");
    const loginFormContainer = document.getElementById("loginFormContainer");

    if (users[username] && users[username] === password) {
      window.location.href = "home.html";
    } else {
      messageElement.style.color = "red";
      messageElement.textContent = "Invalid username or password.";

      // Add shake effect
      loginFormContainer.classList.add("shake");

      // Remove shake class after animation ends
      setTimeout(() => {
        loginFormContainer.classList.remove("shake");
      }, 500); // Match the duration of the animation
    }
  });

// Signup form submission handling
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const messageElement = document.getElementById("signupMessage");

    if (users[username]) {
      messageElement.style.color = "red";
      messageElement.textContent = "Username already exists.";
    } else {
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "signup_success.html";
    }
  });
