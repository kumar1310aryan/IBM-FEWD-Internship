document.getElementById("showSignup").addEventListener("click", function () {
  const loginForm = document.getElementById("loginFormContainer");
  const signupForm = document.getElementById("signupFormContainer");

  loginForm.classList.remove("show");
  signupForm.classList.add("show");
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  requestAnimationFrame(() => {
    signupForm.classList.add("show");
  });
});

document.getElementById("showLogin").addEventListener("click", function () {
  const loginForm = document.getElementById("loginFormContainer");
  const signupForm = document.getElementById("signupFormContainer");

  signupForm.classList.remove("show");
  loginForm.classList.add("show");
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  requestAnimationFrame(() => {
    loginForm.classList.add("show");
  });
});

const users = JSON.parse(localStorage.getItem("users")) || {};

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const messageElement = document.getElementById("loginMessage");
    const loginFormContainer = document.getElementById("loginFormContainer");

    

    if (users[username] && users[username] === password) {
      window.location.href = "../main/home.html";
    } else {
      messageElement.style.color = "red";
      messageElement.textContent = "Invalid username or password.";

      loginFormContainer.classList.add("shake");

      setTimeout(() => {
        loginFormContainer.classList.remove("shake");
      }, 500);
    }
  });

// document
//   .getElementById("signupForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const username = document.getElementById("signupUsername").value;
//     const password = document.getElementById("signupPassword").value;
//     const messageElement = document.getElementById("signupMessage");

//     if (users[username]) {
//       messageElement.style.color = "red";
//       messageElement.textContent = "Username already exists.";
//     } else {
//       users[username] = password;
//       localStorage.setItem("users", JSON.stringify(users));
//       window.location.href = "signup_success_ngo.html";
//     }
//   });

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const messageElement = document.getElementById("signupMessage");
  const userType = document.getElementById("userType").value; // Get user type

  if (users[username]) {
    messageElement.style.color = "red";
    messageElement.textContent = "Username already exists.";
  } else {
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect based on user type
    if (userType === "donar") {
      window.location.href = "signup_success_donar.html";
    } else if (userType === "individual") {
      window.location.href = "signup_success_individual.html";
    } else if (userType === "ngo") {
      window.location.href = "signup_success_ngo.html";
    }
  }
});

