const uri = "http://localhost:3000/destinos";
const main = document.querySelector('main');
const card = document.querySelector('#card');
var itens = [];

function loadItens() {
    main.textContent = ''
    itens = [];
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        renderItens();
        console.log(itens);
    });
};

function renderItens() {

    itens.forEach((item) => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.setAttribute('data-idD', item.id);
        cardNew.querySelector('#cidade').textContent = item.nome;
        cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        cardNew.querySelector('#data').textContent = item.data;
        cardNew.querySelector('#hoteis').textContent = item.hoteis.length;
        cardNew.querySelector('#pontos').textContent = item.pontos.length;

        cardNew.querySelector('#remove').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = card.getAttribute('data-idD');
            del(itemId);
        });
        
        cardNew.querySelector('#edit').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = card.getAttribute('data-idD');
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

async function delData(id) {
    await fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
    
    loadItens();
};