const valor = document.getElementById('valor');
const sysMsg = document.getElementById('msg');
const tbody = document.getElementById('data-table');
const form = document.getElementById('form');
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
        if(res.sqlMessage == undefined) {
            sysMsg.value = 'Item cadastrado!';
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
                    <button class="edit"><i class="bi bi-pencil-square pencil"></i></button>
                    <button><i class="bi bi-x-square delete"></i></button>
                </td>
            </tr>
        `
    })
}

// CRUD - UPDATE
function update(btn) {
    
    let id = btn.parentNode.parentNode.children[0];
    let data = {
        nome: btn.parentNode.parentNode.children[1],
        descricao: btn.parentNode.parentNode.children[2],
        valor: btn.parentNode.parentNode.children[3]
    }

    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    .then(res => res.json())
    .then(res => {
        if(res.error) {
            sysMsg.value = '⚠ Erro ao atualizar o item!'
            sysMsg.classList.add('error')
        } else {
            data.forEach((e) => {
                e.removeAttribute('contenteditable')
            })
        }
    })

}


// CRUD - DELETE
function del() {

}