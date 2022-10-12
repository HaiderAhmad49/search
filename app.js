const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");

const getUser = async(username) => {

const response = await fetch(APIURL + username);

const data = await response.json()



const card = `<div class=" p-5 shadow  m-auto row bg-white col-12   ">
<div class="col-4">
<img src="${data.avatar_url}" class="mt-3 img-fluid" height="200px" width="200px" alt="">
</div>
<div class="col-8 user-info ">
  <h2>${data.name}</h2>
<p>${data.bio}</p>

<ul class="info row justify-content-between list-unstyled">
  <li class="">${data.followers} <strong>Followers</strong></li>
  <li>${data.following} <strong>Following</strong></li>
  <li>${data.public_repos} <strong>Repos</strong></li>
</ul>

<div id="repos">
  
</div>
</div>
</div>`

main.innerHTML = card;

getRepos(username)
}



// getUser("HaiderAhmad49")


const getRepos = async(username) => {

    const main = document.querySelector("#repos");

    const response = await fetch(APIURL + username + "/repos")
    
    const data = await response.json()

    data.forEach(
        (item) => {
        
            const elem = document.createElement("a")
            elem.classList.add("repo")
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            elem.className = "text-decoration-none mr-2 btn btn-secondary btn-sm py-0"
            repos.appendChild(elem)




    });

}


const formSubmit = () =>{
 const searchbox = document.querySelector("#search")

 if (searchbox.value != ""){

    getUser(searchbox.value);

    searchbox.value = ""
 }

return false;



}