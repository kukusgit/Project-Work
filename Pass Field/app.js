let pswrd = document.querySelector(".pass");
let btn = document.querySelector("button");

let word = pswrd.getAttribute("type");

btn.addEventListener("click",()=>{
    let attr = pswrd.getAttribute("type");
    if (attr=="password"){
        pswrd.setAttribute("type", "text");
        btn.innerText="Hide"
    }else{
        pswrd.setAttribute("type", "password");
        btn.innerText="Show"
    }
});
