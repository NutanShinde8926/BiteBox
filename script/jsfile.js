function login() {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const error = document.getElementById('error');

    // Simple validation (replace with actual authentication logic)
    if (email === "user@example.com" && password === "password") {
        window.location.href = "index.html"; // Redirect to the main page
    } else {
        error.innerHTML = "Invalid email or password.";
    }
}

// function togglePassword() {
//     let passIP = document.getElementById('password');
//     if(passIP.type === 'password') {
//         passIP.type = 'text';
      
//     }else {

//     }
// }

function togglePassword() {
    let passIP = document.getElementById('password');
    if(passIP.type === 'password') {
        passIP.type = 'text';
        // passIP.type = 'password';   <-- old blank else, commented out
    }else {
        passIP.type = 'password';   // NEW LINE — this makes the eye toggle back
    }
}