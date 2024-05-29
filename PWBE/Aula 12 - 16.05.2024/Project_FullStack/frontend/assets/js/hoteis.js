const uri = "http://localhost:3000/hoteis";
const main = document.querySelector('main');
const card = document.querySelector('#card');
let itens = [];

function loadItens(){
    itens = []
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        console.log(itens);
        renderItens();
    });
};

function renderItens() {
    
    itens.forEach( (item) => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.setAttribute('data-idH', item.id);
        cardNew.querySelector('#hotel').textContent = item.nome
        cardNew.querySelector('#valor').textContent = `R$${item.valor}`
        cardNew.querySelector('#endereco').textContent = item.endereco
        cardNew.querySelector('#email').textContent = item.email
        cardNew.querySelector('#site').textContent = item.site
        cardNew.querySelector('#telefone').textContent = item.telefones.length

        switch(item.avaliacao) {
            case 1:
                cardNew.querySelector('.info-at img').setAttribute('src', '../img/1estrela.png')
                break;
            case 2:
                cardNew.querySelector('.info-at img').setAttribute('src', '../img/2estrelas.png')
                break;
            case 3:
                cardNew.querySelector('.info-at img').setAttribute('src', '../img/3estrelas.png')
                break;
            case 4:
                cardNew.querySelector('.info-at img').setAttribute('src', '../img/4estrelas.png')
                break;
            case 5:
                cardNew.querySelector('.info-at img').setAttribute('src', '../img/5estrelas.png')
                break;
        }

        cardNew.querySelector('#remove').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = card.getAttribute('data-idH');
            del(itemId);
        });
        
        cardNew.querySelector('#edit').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = card.getAttribute('data-idH');
            edit(itemId);
        });
        
        main.appendChild(cardNew);
    });
};

function edit(id) {
};

function del(id) {
    if(confirm('Deseja excluir?')) {
        delData(id);
    };
};

function delData(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
    
    loadItens();
};