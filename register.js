const submitForm = document.getElementById("form");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("error-message");

const nameLastnameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

const adminUser = {
    name :"admin",
    lastname : "admin lastname",
    email: "admin1@gmail.com",
    password:"Testing123!",
    confirmPassword : "Testing123!",
    role : true
}


let users=[];

const usersFromLocalStorage = JSON.parse(localStorage.getItem("Users"));

/*  OR
let users = JSON.parse(localStorage.getItem("Users")) || [];   */

if(usersFromLocalStorage){
    users  = usersFromLocalStorage;
}

if(!users.some(function(u){    // check if the admin email already exists in the localStorage.
    return u.email === adminUser.email
})){
    users.push(adminUser);   // if not, then create/ push that admin user to the users array
    localStorage.setItem("Users", JSON.stringify(users));
    //Makes sure to save the admin to localStorage after adding it, or it will not persist across page reloads.
}




submitForm.addEventListener("submit", function(e){
   e.preventDefault();

   const name = nameInput.value.trim();
   const lastname = lastnameInput.value.trim();
   const email = emailInput.value.trim();
   const password = passwordInput.value.trim();
   const confirmPassword = confirmPasswordInput.value.trim();


   if(name === "" || lastname === "" || email ==="" || password === "" || confirmPassword ===""){

    errorMessage.textContent = "All fields are required !"
    return;

   }

   if(name.length < 2){
    errorMessage.textContent = "Name must be a least 2 characters"
    return;
   }

   if(lastname.length <2){
       errorMessage.textContent = "lastname must be a least 2 characters"
       return;

   }
    if(password.length <8){
       errorMessage.textContent = "password must be a least 8 characters"
       return;

   }

   if(!nameLastnameRegex.test(name)){
     errorMessage.textContent = "name must contain only letters"
     return;
   }
    
   if( !nameLastnameRegex.test(lastname)){
     errorMessage.textContent = "lastname must contain only letters"
     return;

   }
   if(!emailRegex.test(email)){

        errorMessage.textContent = "Invalid email address"
        return;

   }

   if(!passwordRegex.test(password)){

    errorMessage.textContent = "Password must be at least 8 characters and include a letter, a number, and a special character";
    return;

   }

   if(confirmPassword !== password){
    errorMessage.textContent = "Passwords do not match";
    return;

   }


   if(users.some(u => u.email === email)){
     errorMessage.textContent = "Email is already registered";
     return;
   }


/* 
    Or  

    if(users.some(function(u){
         return u.email === email;

    })) {
         errorMessage.textContent = "Email already registered"
         return;
         
         }
*/



   const user = {

    name :name,
    lastname : lastname,
    email: email,
    password:password,
    confirmPassword : confirmPassword,
    role : false
   }

   users.push(user);
   console.log(users);

   localStorage.setItem("Users", JSON.stringify(users));


   errorMessage.textContent = "";

   submitForm.reset();

   alert("user registered");
})



