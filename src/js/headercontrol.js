// **Rolagem da tela  //
window.addEventListener("scroll", function () {
  rolagemTela();
});

function rolagemTela() {
  let header = document.querySelector("#header");
  let logoImage = document.querySelector(".logo img");

  header.classList.toggle("rolagem", window.scrollY > 0);

  if (window.scrollY > 0) {
    logoImage.style.maxWidth = "65px";
  } else {
    logoImage.style.maxWidth = "70px";
  }
}
