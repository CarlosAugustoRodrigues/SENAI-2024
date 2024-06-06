const uri = "http://localhost:3000/pontos_turisticos";
const main = document.querySelector('main');
const card = document.querySelector('#card');
const form_ponto = document.querySelector('#form-ponto');
var itens = [];

form_ponto.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = {
        nome: form_ponto.nome.value,
        endereco: form_ponto.endereco.value,
        telefone: form_ponto.telefone.value,
        valor: form_ponto.valor.value,
        id_destino: form_ponto.destino.value
    }

    await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    window.location.reload();
});
function loadItens(){
    main.textContent = ''
    itens = [];
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