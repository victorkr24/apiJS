const UrlApi = "https://jsonplaceholder.typicode.com/users/1";

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    //este es 
    if(this.readyState == 4 && this.status == 200 ){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app");
        const tpl = data.map((user) => `<li>${user.name} {user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }

}
xhr.addEventListener("load",onRequestHandler);
xhr.open("GET", `${UrlApi}/users`);
xhr.send();