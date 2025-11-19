// Welcome Name
let userName = prompt("Enter your name:");
document.getElementById("username").textContent = userName;


// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;


    if (!name || !email || !phone || !message) {
        alert("Please fill all fields");
        return false;
    }


    document.getElementById("result").innerHTML = `
<strong>Submitted Data:</strong><br>
Name: ${name} <br>
Email: ${email} <br>
Phone: ${phone} <br>
Message: ${message}
`;


    return false; // prevent page reload
}