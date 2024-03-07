const modal =  document.querySelector('dialog');

function showModal() {
    modal.style.display  = "flex";
    modal.showModal()
}

function removeModal() {
    modal.style.display  = "none";
    modal.close()
}