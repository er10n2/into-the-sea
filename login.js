const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password")
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");



const usersFromLocalStorage = JSON.parse(localStorage.getItem("Users")) || [];


form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    if(email === "" || password === ""){

        errorMessage.textContent = "All fields are required!";
        return;


    }


    const userWhoWantsToLogin = usersFromLocalStorage.find(u =>u.email === email && u.password === password);

    if(!userWhoWantsToLogin){

        errorMessage.textContent = "Invalid email or password!";
        form.reset();
        return;
    }


    localStorage.setItem("CurrentUser", JSON.stringify(userWhoWantsToLogin));


    form.reset();

 window.location.href = "../../index.html";




})