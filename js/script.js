const contactButton = document.querySelector(".contact");
const collaborateButton = document.querySelector(".banner-button")
const changeColorButton = document.querySelector(".change-color");
const h1Page = document.querySelectorAll("h1");
const paragraphTag = document.querySelectorAll("p");
const bannerContainerParagraph = document.querySelector(".banner-container");
const phoneNumberColor = document.querySelector(".phone-number");

console.log(phoneNumberColor);

//Função para mudar a cor da página

changeColorButton.addEventListener("click", () => {

    document.body.classList.toggle("phone-number-color");
    document.body.classList.toggle("change-color-body");
    document.body.classList.toggle("change-color-h1");
    document.body.classList.toggle("paragraph-color");

    paragraphTag.forEach((paragraphTag) => {
        paragraphTag.classList.toggle("change-color-paragraph");
    });
    
});

changeColorButton.addEventListener("click", () => {
    
})


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
});