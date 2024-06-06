const uri = "http://localhost:3000/hoteis";
const uri_telefone = "http://localhost:3000/telefones";
const main = document.querySelector('main');
const card = document.querySelector('#card');
const form_hotel = document.querySelector('#form-hotel');
const form_telefone = document.querySelector('#form-telefone') 
var itens = [];

form_hotel.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = {
        nome: form_hotel.nome.value,
        valor: form_hotel.valor.value,
        avaliacao: form_hotel.avaliacao.value,
        email: form_hotel.email.value,
        site: form_hotel.site.value,
        id_destino: form_hotel.destino.value
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

form_telefone.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = {
        telefone: form_telefone.telefone.value,
        id_hotel: form_telefone.hotel.value
    }

    await fetch(uri_telefone, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    window.location.reload();
})


function loadItens(){
    main.textContent = ''
    itens = []
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        renderItens();
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

        if(item.telefones.length == 0) {
            cardNew.querySelector('#telefone').textContent = 'Não informado';
            cardNew.querySelector('#telefone-2').textContent = 'Não informado';
        } else {
            cardNew.querySelector('#telefone').textContent = item.telefones[0].telefone;
            item.telefones.length < 2 ? cardNew.querySelector('#telefone-2').textContent = 'Não informado' : cardNew.querySelector('#telefone-2').textContent = item.telefones[1].telefone;
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

async function delData(id) {
    await fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
    
    loadItens();
};