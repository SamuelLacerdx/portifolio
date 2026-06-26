const navbar = document.querySelector("nav");
const header = document.querySelector("header")
let ultimoScroll = 0;

window.addEventListener("scroll", () => {
    const atualScroll = window.scrollY;
    
    if(atualScroll > ultimoScroll && atualScroll > 700){
        navbar.classList.add('hidden')
        header.classList.add('hidden')
}
else{
    navbar.classList.remove('hidden')
    header.classList.remove('hidden')
    navbar.style.transition = "1s"
    header.style.transition = "1s"
}

ultimoScroll = atualScroll
})