function toggleMenu() {
    // alert('clicked');
    var element = document.getElementById("nav");
    var navButton = document.getElementById("nav-button");
    var navList = document.getElementById("nav-ul");
    element.classList.toggle("is-active");
    navButton.classList.toggle("is-active");
    navList.classList.toggle("is-active");
}
