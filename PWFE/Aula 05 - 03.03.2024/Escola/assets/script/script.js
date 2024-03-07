const modal =  document.querySelectorAll('dialog');
const body = document.querySelector('body')


// Modal Contato
function showModal() {
    body.style.overflowY = 'hidden'
    modal[0].showModal()
}
function removeModal() {
    modal[0].close()
}
modal[0].addEventListener('close', () => {
    body.style.overflowY = 'auto'
})