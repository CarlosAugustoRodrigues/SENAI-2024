const valor = document.getElementById('valor');
const sysMsg = document.getElementById('msg');
const tbody = document.getElementById('data-table');
const form = document.getElementById('form');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const uri = 'https://localhost/3000/item';
const itens = [];

// CRUD - CREATE
function create() {
            
    const data = {
        id: form.id.value,
        nome: form.nome.value,
        descricao: form.descricao.value,
        valor: form.valor.value
    }

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            sysMsg.value = 'Item cadastrado!';

            setTimeout(() => {
                sysMsg.value = '';
            }, 4000)
            itens.push(res);
            renderData();
            form.reset();
        } else {
            sysMsg.classList.add('error');
            sysMsg.value = '⚠ Erro ao cadastrar o item!';
        }
    })
}



// CRUD - READ

// Carregar Dados do Banco
function loadItem() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            itens.push(...res);
            renderData();
        })
}

// Preencher Tabela com os Dados
function renderData() {
    itens.forEach( item => {
        tbody.innerHTML = `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.descricao}</td>
                <td>${item.valor}</td>
                <td>
                    <button class="edit" id="btn-1" onclick="edit(this)"><i class="bi bi-pencil-square pencil"></i></button>
                    <button id="btn-2" onclick="del(this)"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        `
    })
}



// CRUD - UPDATE
function update(btn) {
}

function edit(btn) {
}

function cancel(btn) {

}



// CRUD - DELETE
function del() {

}

function delData() {

}