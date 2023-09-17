const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    })
})
const nav = document.querySelector("nav");

const menu = document.querySelector("#menu-btn");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
})
