function altera_grid() {
    var elemento_container = document.querySelector(".conteiner");
    elemento_container.style.cssText = "display: grid; grid: repeat(4, 150px) / repeat(3, 1fr)";
}