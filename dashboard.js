const postForm = document.getElementById('post-form');
const postTitle = document.getElementById('title');
const postContent = document.getElementById('content');
const errorMessage = document.getElementById('error-message');
let ulEl = document.getElementById("ulEl");
let pEl = document.getElementById('p-el');

let postsArray =[];
const titleRegex= /^[A-Za-z]+$/;

const postsFromLocalStorage = JSON.parse(localStorage.getItem("Posts"));

if(postsFromLocalStorage){

    postsArray = postsFromLocalStorage;
}


let Lihtml ="";
let Phtml ="";
for(let i =0; i<postsArray.length;i++){

    Lihtml += `

    <li> ${postsArray[i].title}</li>
     
    

    `

    Phtml += `
      ${postsArray[i].content} <br>

    `
}

ulEl.innerHTML = Lihtml;
pEl.innerHTML = Phtml;





postForm.addEventListener('submit', function(e){

    e.preventDefault();

    let title = postTitle.value.trim();
    let content = postContent.value.trim();

    if(title === '' || content === ''){

        errorMessage.textContent = "Please fill in all fields.";
        return;

    }

    if(title.length < 3 || content.length < 10){

        errorMessage.textContent = "Title must be at least 3 characters and content at least 10 characters long.";
        return;

    }

    if(!titleRegex.test(title)){

        errorMessage.textContent = "title must contain only letters."
  return;

    }


    const postTobeCreated  = {

        id : Date.now(),
        title : title,
        content : content
    }


    postsArray.push(postTobeCreated);

    localStorage.setItem("Posts", JSON.stringify(postsArray));

    postForm.reset();

    window.location.reload();



})