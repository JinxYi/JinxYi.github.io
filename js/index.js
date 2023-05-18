
const menu_icon = document.querySelector("#menu-bar-icon");
const nav_list = document.querySelector(".nav-list");

// responsive nav
document.onload = () => {
    
}

menu_icon.addEventListener("click", () => {
    nav_list.classList.toggle("show");
}); 