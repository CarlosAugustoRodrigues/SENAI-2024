const valor = document.getElementById('valor');
const sysMsg = document.getElementById('msg');
const tbody = document.getElementById('data-table');
const form = document.getElementById('form');
const uri = 'https://localhost/3000/item';
const itens = [];

// Carregar Dados do Banco
function loadItem() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            itens.push(...res);
            renderData();
        });
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
    });
}

// CRUD - CREATE
function create() {
    e.preventDefault();
        
    const data = {
        id: form.id.value,
        nome: form.nome.value,
        descricao: form.descricao.value,
        valor: form.valor.value
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

// CRUD - READ
function read() {

}

// CRUD - UPDATE
function update() {

}

// CRUD - DELETE
function del() {

}