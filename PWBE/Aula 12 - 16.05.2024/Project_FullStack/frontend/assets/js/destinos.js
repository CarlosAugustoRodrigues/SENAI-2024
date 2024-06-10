const uri = "http://localhost:3000/destinos";
const main = document.querySelector('main');
const card = document.querySelector('#card');
const form_desitno = document.querySelector('#form-destino');
const edit_dialog = document.querySelector('#model-edit-dialog')
var itens = [];

form_desitno.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data= {
        nome: form_desitno.destino.value,
        valor: form_desitno.valor.value,
        data: form_desitno.data.value
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

async function loadItens() {
    main.textContent = ''
    itens = [];
    await fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        renderItens();
    });
};

function renderItens() {

    itens.forEach((item) => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.setAttribute('data-idD', item.id);
        cardNew.querySelector('#cidade').textContent = item.nome;
        cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        let data = item.data.substring(0, 10)
        cardNew.querySelector('#data').textContent = data;
        cardNew.querySelector('#hoteis').textContent = item.hoteis.length;
        cardNew.querySelector('#pontos').textContent = item.pontos.length;

        cardNew.querySelector('#remove').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = Number(card.getAttribute('data-idD'));
            del(itemId);
        });
        
        cardNew.querySelector('#edit').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = Number(card.getAttribute('data-idD'));
            edit(itemId);
        });

        main.appendChild(cardNew);
    });
};

function edit(id) {
    const index = itens.findIndex(item => item.id === id)

    if(index !== -1) {
        const item = itens[index]
        edit_dialog.showModal()

    }
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