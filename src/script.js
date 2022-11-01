const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li a");
let body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("active");
  if (hamburger.classList.contains("open")) {
    body.classList.add("scrollHide");
    body.setAttribute("scroll", "no");
  }
});

for (const linkItem of links) {
  linkItem.addEventListener("click", () => {
    if (hamburger.classList.contains("open")) {
      hamburger.classList.toggle("open");
    }
    navLinks.classList.toggle("active");
    body.classList.remove("scrollHide");
    body.setAttribute("scroll", "yes");
  });
}

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const phoneNumber = document.querySelector(".phoneNumber");
  const message = document.querySelector(".message");
  alert("Selamat! " + name.value + "\nPesan Anda Telah Terkirim ");
  name.value = "";
  email.value = "";
  phoneNumber.value = "";
  message.value = "";
});
