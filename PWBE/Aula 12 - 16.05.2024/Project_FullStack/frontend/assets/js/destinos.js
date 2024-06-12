const uri = "http://localhost:3000/destinos";
const main = document.querySelector('main');
const card = document.querySelector('#card');
const form_edit = document.querySelector('#form-edit');
const edit_dialog = document.querySelector('#model-edit-dialog');
var itens = [];

async function loadItens() {
    main.textContent = '';
    itens = [];
    await fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        renderItens();
        console.log(itens)
    });
}

function renderItens() {

    itens.forEach((item) => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.setAttribute('data-idD', item.id);
        cardNew.querySelector('#cidade').textContent = item.nome;
        cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        cardNew.querySelector('#data').textContent = item.data.substring(0, 10).replaceAll('-', '/');
        cardNew.querySelector('#hoteis').textContent = item.hoteis.length;
        cardNew.querySelector('#pontos').textContent = item.pontos.length;
        cardNew.querySelector('#id-card').textContent = item.id;

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
}

function edit(id) {
    const index = itens.findIndex(item => item.id === id);

    if(index !== -1) {
        const item = itens[index];
        edit_dialog.showModal();
        document.querySelector('body').style.overflowY = 'hidden'

        form_edit.id_destino.value = item.id;
        form_edit.destino.value = item.nome;
        form_edit.valor.value = item.valor;
        form_edit.data.value = item.data.substring(0, 10);

    } else {
        alert('Item não encontrado!');
    }

    form_edit.addEventListener('submit', async (e) => {
        e.preventDefault();
        edit_dialog.close();

        const data = {
            nome: form_edit.destino.value,
            valor: form_edit.valor.value,
            data: form_edit.data.value + 'T00:00:00.000Z'
        };

        await fetch(`${uri}/${Number(form_edit.id_destino.value)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        window.location.reload();
    });
}

function del(id) {
    if(confirm('Deseja excluir?')) {
        delData(id);
    };
}

async function delData(id) {
    await fetch(`${uri}/${id}`, {
        method: 'DELETE'
    });
    
    loadItens();
}

function closeModal() {
    edit_dialog.close();
    document.querySelector('body').style.overflowY = 'auto' 
}