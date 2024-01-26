function toogleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
}

function toogleEngine() {
    const body = document.body;
    const desktop = document.querySelector("#desktop-nav")
    const profile = document.querySelector("#profile")
    const about = document.querySelector("#about")
    const hamburger = document.querySelector("#hamburger-nav")
    const experience = document.querySelector("#experience")
    const projects = document.querySelector("#projects")
    const contact = document.querySelector("#contact")
    const footer = document.querySelector("#footer")
 
    // Alternar la clase 'dark-mode' en el body
    body.classList.toggle("dark-mode");
    desktop.classList.toggle("dark-mode");
    profile.classList.toggle("dark-mode");
    about.classList.toggle("dark-mode");
    hamburger.classList.toggle("dark-mode");
    experience.classList.toggle("dark-mode");
    projects.classList.toggle("dark-mode");
    contact.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    
  }

window.addEventListener("load", function () {
  var btn = document.querySelector(".engine");
  btn.addEventListener("click", function () {
    this.className = this.className.match("active")
      ? "engine"
      : "engine active";
    });
});

