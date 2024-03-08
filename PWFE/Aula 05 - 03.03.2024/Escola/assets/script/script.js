const modal =  document.querySelectorAll('dialog');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('main button');


// Modal Contato
function openModal() {
    body.style.overflowY = 'hidden'
    modal[0].showModal()
}
function closeModal() {
    modal[0].close()
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const btnId = button.getAttribute('data-button-id')

        if(btnId === '1'){
            body.style.overflow = 'hidden';
            modal[1].showModal();
        } else if (btnId === '2'){
            body.style.overflow = 'hidden';
            modal[2].showModal();
        } else if(btnId === '3'){
            body.style.overflow = 'hidden';
            modal[3].showModal();
        } else  if(btnId === '4'){
            body.style.overflow = 'hidden';
            modal[4].showModal();
        } else {
            body.style.overflow = 'hidden';
            modal[5].showModal();
        }
    })
});


modal.forEach((e) => {
    e.addEventListener('close', () => {
        body.style.overflowY = 'auto'
    });
});