function meuPopup() {
    var popup = document.querySelector(".popup__texto");
    popup.classList.toggle("show")
}

function meuModal() {
    var modal = document.querySelector("#modal");

    if (typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function meuModalFechar() {
    var modal = document.querySelector("#modal");

    if (typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}