let i = document.querySelectorAll("i");
let link = document.querySelectorAll("link");

console.log(i);
console.log(link[1].href);


function darklightmood(){
    if(i[0].classList.contains("fa-moon")){
        i[0].classList.replace("fa-moon","fa-sun")
        link[1].href="./css/light.css"
    }else{
        i[0].classList.replace("fa-sun","fa-moon")
        link[1].href="./css/main.css"
    }
}
i[0].onclick = darklightmood;



