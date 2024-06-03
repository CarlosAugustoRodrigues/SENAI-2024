const uri = "http://localhost:3000/pontos_turisticos";
const main = document.querySelector('main');
const card = document.querySelector('#card');
var itens = [];

function loadItens(){
    itens = [];
    main.textContent = ''
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
        cardNew.setAttribute('data-idP', item.id);
        cardNew.querySelector('#ponto_turistico').textContent = item.nome;
        item.valor == 0 ? cardNew.querySelector('#valor').textContent = 'Gratuito' : cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        cardNew.querySelector('#endereco').textContent = item.endereco;
        item.telefone == '' ? cardNew.querySelector('#telefone').textContent =  'Não informado' : cardNew.querySelector('#telefone').textContent = item.telefone;

        cardNew.querySelector('#remove').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = card.getAttribute('data-idP');
            del(itemId);
        });
        
        cardNew.querySelector('#edit').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = card.getAttribute('data-idP');
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