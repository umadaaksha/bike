// script.js

// Register user data in localStorage
function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully!');
}

// Login user
function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html'; // Redirect to homepage
    } else {
        alert('Incorrect username or password');
    }
}

// Check if user is logged in
function checkLoginStatus() {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
        document.getElementById('loginStatus').innerText = `Welcome, ${user}`;
    }
}

// Logout user
function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}
