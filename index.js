const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const logoutLink = document.getElementById("logout-link")
const logoutBtn = document.getElementById('logout-btn')
const dashboardLink = document.getElementById('dashboard-link')

const currentUser = JSON.parse(localStorage.getItem('CurrentUser'));





if(currentUser && currentUser.role === false   ||  !currentUser){

    dashboardLink.style.display = 'none';
     
}



if (currentUser){
    registerLink.style.display = 'none';
    loginLink.style.display ='none';
    logoutLink.style.display = 'block';


}else{

    registerLink.style.display = 'block';
    loginLink.style.display = 'block';
    logoutLink.style.display = 'none';


}


logoutBtn.addEventListener("click",function(e){
    
    e.preventDefault();

    localStorage.removeItem("CurrentUser");
    window.location.reload();

   
})