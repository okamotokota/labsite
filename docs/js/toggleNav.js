// Toggle mobile nav menu
const menu = document.getElementById("navbar");
const contents = document.getElementsByClassName("main-content").item(0);
const footer = document.getElementsByTagName("footer").item(0);
const navBtn = document.getElementsByClassName("mobile-nav-button").item(0);

const closeNav = () => {
  menu.classList.remove("show");
  navBtn.classList.remove("close");

  contents.classList.remove("mobile-menu-open");
  footer.classList.remove("mobile-menu-open");

  contents.removeEventListener("click", closeNav);
  navBtn.removeEventListener("click", closeNav);
};

const toggleNav = () => {
  const displayed = !!menu.style.display;
  if (displayed) {
    menu.classList.remove("show");
    navBtn.classList.remove("close");
    // remove blur
    contents.classList.remove("mobile-menu-open");
    footer.classList.remove("mobile-menu-open");
  } else {
    menu.classList.add("show");
    navBtn.classList.add("close");

    // blur
    contents.classList.add("mobile-menu-open");
    footer.classList.add("mobile-menu-open");

    contents.addEventListener("click", closeNav);
    navBtn.addEventListener("click", closeNav);
  }
};
