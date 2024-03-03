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

// remove_class_active_hamburger
// window.addEventListener('click', function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove('hamburger-active');
//     navMenu.classList.add('hidden');
//   }
// });

// darktoggle
const darkModeToggle = document.querySelector('#darktoggle');
const html = document.querySelector('html');
darkModeToggle.addEventListener('click', function () {
  if (darkModeToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light'
  }
});

// darktoggle_localstorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkModeToggle.checked = true;
} else {
  darkModeToggle.checked = false;
}

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

// visitor_counter
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

// tobottom
window.addEventListener('scroll', function() {
  const goToBottom = document.getElementById('tobottom');
  const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  // const totalHeight = document.body.scrollHeight;
  // const windowHeight = window.innerHeight;

  // if (scrollPosition + windowHeight >= totalHeight || scrollPosition === 0) {
  //     goToBottom.style.display = 'none';
  // } else {
  //     goToBottom.style.display = 'block';
  // }
  if (scrollPosition === 0) {
    goToBottom.style.display = 'none';
} else {
    goToBottom.style.display = 'block';
}
});