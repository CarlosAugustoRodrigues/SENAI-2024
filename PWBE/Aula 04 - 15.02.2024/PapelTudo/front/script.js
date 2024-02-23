const valor = document.getElementById('valor');
const sysMsg = document.getElementById('msg');
const tbody = document.getElementById('data-table');
const form = document.getElementById('form');
const uri = 'http://localhost:3000/itens';
const itens = [];
var oldData = {};

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
        if(!res) {
            sysMsg.classList.add('error');
            sysMsg.value = '⚠ Erro ao cadastrar o item!';

            setTimeout(() => {
                sysMsg.classList.remove('error')
                sysMsg.value = '';
            }, 4000)
        } else {
            sysMsg.value = 'Item cadastrado!';

            setTimeout(() => {
                sysMsg.value = '';
            }, 4000)

            itens.push(res);
            renderData();
            form.reset();
        }
    });
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
        tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.descricao}</td>
                <td>${item.valor.toFixed(2)}</td>
                <td>
                    <button class="edit" id="btn-1" onclick="edit(this)"><i class="bi bi-pen-fill"></i></button>
                    <button id="btn-2" onclick="del('${item.id}')"><i class="bi bi-trash-fill"></i></button>
                </td>
            </tr>
        `
    })
}


// CRUD - UPDATE
function edit(btn) {

    let data = {
        id: btn.parentNode.parentNode.children[0],
        nome: btn.parentNode.parentNode.children[1],
        descricao: btn.parentNode.parentNode.children[2],
        valor: btn.parentNode.parentNode.children[3]
    }

    oldData = {
        oldId: data.id.innerHTML,
        oldNome: data.nome.innerHTML,
        oldDesc: data.descricao.innerHTML,
        oldValor: data.valor.innerHTML
    }

    data.nome.setAttribute('contenteditable', 'true')
    data.nome.style.border = '2px solid var(--red)'
    data.descricao.setAttribute('contenteditable', 'true')
    data.descricao.style.border = '2px solid var(--red)'
    data.valor.setAttribute('contenteditable', 'true')
    data.valor.style.border = '2px solid var(--red)'

    btn.innerHTML = '<i class="bi bi-check-square-fill"></i>'
    btn.setAttribute('onclick', 'update(this)')
    btn.nextElementSibling.innerHTML = '<i class="bi bi-x-square-fill"></i>'
    btn.nextElementSibling.setAttribute('onclick', 'cancel(this)')

}

function update(btn) {
    
    let elementData = {
        id: btn.parentNode.parentNode.children[0],
        nome: btn.parentNode.parentNode.children[1],
        descricao: btn.parentNode.parentNode.children[2],
        valor: btn.parentNode.parentNode.children[3]
    }

    let valueData = {
        id: elementData.id.innerHTML,
        nome: elementData.nome.innerHTML,
        descricao: elementData.descricao.innerHTML,
        valor: elementData.valor.innerHTML
    }

    fetch(`${uri}/${valueData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valueData)
    })
    .then(res => res.json())
    .then(res => {
        if(!res) {
            sysMsg.classList.add('error')
            sysMsg.value = '⚠ Erro ao atualizar item!'

            setTimeout(() => {
                sysMsg.classList.remove('error')
                sysMsg.value = ''
            }, 4000)
        } else {
            sysMsg.value = 'Item atualizado com sucesso!'

            setTimeout(() => {
                sysMsg.value = ''
            }, 4000)

            elementData.nome.setAttribute('contenteditable', 'false')
            elementData.nome.style.border = 'none'
            elementData.descricao.setAttribute('contenteditable', 'false')
            elementData.descricao.style.border = 'none'
            elementData.valor.setAttribute('contenteditable', 'false')
            elementData.valor.style.border = 'none'

            btn.innerHTML = '<i class="bi bi-pen-fill"></i>'
            btn.setAttribute('onclick', 'edit(this)')
            btn.nextElementSibling.innerHTML = '<i class="bi bi-trash-fill"></i>'
            btn.nextElementSibling.setAttribute('onclick', `del('${item.id}')`)
        }
    });
}

function cancel(btn) {

    let elementData = {
        id: btn.parentNode.parentNode.children[0],
        nome: btn.parentNode.parentNode.children[1],
        descricao: btn.parentNode.parentNode.children[2],
        valor: btn.parentNode.parentNode.children[3]
    }

    elementData.id.innerHTML = oldData.oldId
    elementData.nome.innerHTML = oldData.oldNome
    elementData.descricao.innerHTML = oldData.oldDesc
    elementData.valor.innerHTML = oldData.oldValor

    elementData.nome.setAttribute('contenteditable', 'false')
    elementData.nome.style.border = 'none'
    elementData.descricao.setAttribute('contenteditable', 'false')
    elementData.descricao.style.border = 'none'
    elementData.valor.setAttribute('contenteditable', 'false')
    elementData.valor.style.border = 'none'

    btn.innerHTML = '<i class="bi bi-trash-fill"></i>'
    btn.setAttribute('onclick', `del('${item.id}')`)
    btn.previousElementSibling.innerHTML = '<i class="bi bi-pen-fill"></i>'
    btn.previousElementSibling.setAttribute('onclick', 'edit(this)')
}



// CRUD - DELETE
function del(id) {
    if(confirm("Deseja realmente excluir este produto ?")) {
        delData(id)
    }
}

function delData(id) {
    fetch(`${uri}/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {
        window.location.reload();
    });
}