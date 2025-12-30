const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.querySelector('.name');
const lastNameInput = document.querySelector('.lastname');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');
const errorDisplay = document.getElementById('error-message');

submitBtn.onclick = (event) => {
    event.preventDefault();

    const nameVal = nameInput.value.trim();
    const lastVal = lastNameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const msgVal = messageInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error message display
    errorDisplay.innerText = "";

    if (nameVal.length < 2) {
        errorDisplay.innerText = "Name is too short (min 2 chars)";
    } 
    else if (lastVal.length < 2) {
        errorDisplay.innerText = "Lastname is too short (min 2 chars)";
    } 
    else if (!emailRegex.test(emailVal)) {
        errorDisplay.innerText = "Please enter a valid email address";
    } 
    else if (msgVal.length < 10) {
        errorDisplay.innerText = "Message must be at least 10 characters";
    } 
    else {
        // Success Case
        alert("Message Sent Successfully!");
        
        // Clear fields and error display
        errorDisplay.innerText = "";
        nameInput.value = "";
        lastNameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
};