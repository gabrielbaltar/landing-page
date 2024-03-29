const contactButton = document.querySelector(".contact");
const collaborateButton = document.querySelector(".banner-button")

console.log(collaborateButton);

//Função para adicionar gradiente quando o usuário passar o mouse por cima do botão;

contactButton.addEventListener("mouseover", () => {
    contactButton.classList.add("contact-button-active");
});

contactButton.addEventListener("mouseout", () => {
    contactButton.classList.remove("contact-button-active");
});


//Função para adicionar gradiente quando o usuário passar o mouse por cima do botão principal Collaborate;

collaborateButton.addEventListener("mouseover", () => {
    collaborateButton.classList.add("banner-button-gradient");
});

collaborateButton.addEventListener("mouseout", () => {
    collaborateButton.classList.remove("banner-button-gradient");
})