// fixed_navbar
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// toggle_class_active_hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// input_name
const inputElement = document.getElementById("name");
inputElement.addEventListener("input", function () {
  let inputValue = inputElement.value;
  let cleanValue = inputValue.replace(/[^a-zA-Z]/g, "");
  inputElement.value = cleanValue;
});

// input_number
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});