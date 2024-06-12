const uri = "http://localhost:3000/hoteis";
const uri_telefone = "http://localhost:3000/telefones";
const main = document.querySelector('main');
const card = document.querySelector('#card');
const form_edit = document.querySelector('#form-edit');
const edit_dialog = document.querySelector('#model-edit-dialog');
var itens = [];

function loadItens(){
    main.textContent = ''
    itens = []
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        renderItens();
        console.log(itens);
    });
};

function renderItens() {
    
    itens.forEach( (item) => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.setAttribute('data-idH', item.id);
        cardNew.querySelector('#hotel').textContent = item.nome;
        cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        cardNew.querySelector('#endereco').textContent = item.endereco;
        cardNew.querySelector('#email').textContent = item.email;
        cardNew.querySelector('#site').textContent = item.site;

        if(item.telefone == '') {
            cardNew.querySelector('#telefone').textContent = 'Não informado';
        } else {
            cardNew.querySelector('#telefone').textContent = item.telefone;
        }

        switch(item.avaliacao) {
            case 1:
                cardNew.querySelector('#avaliacao').setAttribute('src', '../img/1estrela.png');
                break;
                
            case 2:
                cardNew.querySelector('#avaliacao').setAttribute('src', '../img/2estrelas.png');
                break;
            case 3:
                cardNew.querySelector('#avaliacao').setAttribute('src', '../img/3estrelas.png');
                break;
            case 4:
                cardNew.querySelector('#avaliacao').setAttribute('src', '../img/4estrelas.png');
                break;
            case 5:
                cardNew.querySelector('#avaliacao').setAttribute('src', '../img/5estrelas.png');
                break;
        }

        cardNew.querySelector('#remove').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = Number(card.getAttribute('data-idH'));
            del(itemId);
        });
        
        cardNew.querySelector('#edit').addEventListener('click', (e) => {
            const card = e.target.closest('#card');
            const itemId = Number(card.getAttribute('data-idH'));
            edit(itemId);
        });
        
        main.appendChild(cardNew);
    });
};

function edit(id) {
    const index = itens.findIndex(item => item.id === id);

    if(index !== -1) {
        const item = itens[index];
        edit_dialog.showModal();
        document.querySelector('body').style.overflowY = 'hidden'

        form_edit.id_hotel.value = item.id;
        form_edit.nome.value = item.nome;
        form_edit.valor.value = Number(item.valor);
        form_edit.endereco.value = item.endereco;
        form_edit.avaliacao.value = Number(item.avaliacao);
        form_edit.email.value = item.email;
        form_edit.site.value = item.site;
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
            avaliacao: Number(form_edit.avaliacao.value),
            email: form_edit.email.value,
            site: form_edit.site.value,
            telefone: form_edit.telefone.value
        };

        await fetch(`${uri}/${Number(form_edit.id_hotel.value)}`, {
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
};

async function delData(id) {
    await fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
    
    loadItens();
};

function closeModal() {
    edit_dialog.close();
    document.querySelector('body').style.overflowY = 'auto' 
}

