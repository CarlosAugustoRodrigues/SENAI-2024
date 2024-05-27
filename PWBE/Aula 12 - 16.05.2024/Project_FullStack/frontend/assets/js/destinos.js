const uri = "http://localhost:3000/destinos";
const itens = [];

function loadItens() {
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        renderItens();
        console.log(itens);
    });
};

function renderItens() {
    const main = document.querySelector('main');
    const card = document.querySelector('#card');

    itens.forEach((item) => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.querySelector('#cidade').textContent = item.nome;
        cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        cardNew.querySelector('#data').textContent = item.data;
        cardNew.querySelector('#hoteis').textContent = item.pontos.length;
        cardNew.querySelector('#pontos').textContent = item.hoteis.length;
        main.appendChild(cardNew);
    });
};