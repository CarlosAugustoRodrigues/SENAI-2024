const uri = "http://localhost:3000/pontos_turisticos";
const main = document.querySelector('main');
const card = document.querySelector('#card');
const form_edit = document.querySelector('#form-edit');
const edit_dialog = document.querySelector('#model-edit-dialog');
var itens = [];

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
}

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
            const itemId = Number(card.getAttribute('data-idP'));
            del(itemId);
        });
        
        cardNew.querySelector('#edit').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = Number(card.getAttribute('data-idP'));
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

        form_edit.id_ponto.value = item.id;
        form_edit.nome.value = item.nome;
        form_edit.valor.value = Number(item.valor);
        form_edit.endereco.value = item.endereco;
        form_edit.telefone.value = item.telefone;

    } else {
        alert('Item não encontrado!');
    }

    form_edit.addEventListener('submit', async (e) => {
        e.preventDefault();
        edit_dialog.close();

        const data = {
            nome: form_edit.nome.value,
            valor: Number(form_edit.valor.value),
            endereco: form_edit.endereco.value,
            telefone: form_edit.telefone.value
        };

        await fetch(`${uri}/${Number(form_edit.id_ponto.value)}`, {
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
    })
    
    loadItens();
}

function closeModal() {
    edit_dialog.close();
    document.querySelector('body').style.overflowY = 'auto' 
}