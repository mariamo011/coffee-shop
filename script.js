const navLinks =document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton =document.querySelector("#menu-open-button");
const menuCloseButton =document.querySelector("#menu-close-button");


//Open/close mobile menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu when the nav link is clicked
navLinks.forEach(link =>{
    link.addEventListener("click", () => menuOpenButton.click());
});



//ვიღებთ contact-form-ს
const form = document.querySelector(".contact-form");

//აჩერებს form-ის default submit-ს
form.addEventListener("submit", function (e) {
    e.preventDefault();

    //გამოაქვს შეტყობინება
    alert("Message sent successfully!");
    //არესეტებს ფორმას
    form.reset();
});

