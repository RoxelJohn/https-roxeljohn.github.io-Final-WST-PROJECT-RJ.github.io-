// Modal functionality
const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");

// Open modal when login button is clicked
loginBtn.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling
});

// Close modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Switch tabs
loginTab.addEventListener("click", function() {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

signupTab.addEventListener("click", function() {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

switchToSignup.addEventListener("click", function(e) {
  e.preventDefault();
  signupTab.click();
});

switchToLogin.addEventListener("click", function(e) {
  e.preventDefault();
  loginTab.click();
});

// SIGNUP
document.getElementById("signupSubmit").addEventListener("click", function() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords don't match");
    return;
  }

  // Save to localStorage
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully!");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  window.location.href = "home.html";
});

// LOGIN
document.getElementById("loginSubmit").addEventListener("click", function() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful!");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    window.location.href = "home.html"; // ✅ Redirect if credentials match
  } else {
    alert("Incorrect email or password.");
  }
});
