const uri = "http://localhost:3000/pontos_turisticos";
const itens = [];

function loadItens(){
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        console.log(itens);
    });
};

function renderItens() {
    const main = document.querySelector('main');
    const card = document.querySelector('#card');

    itens.forEach( (item) => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.querySelector('#ponto_turistico').textContent = item.nome
        item.valor == 0 ? cardNew.querySelector('#valor').textContent = 'Gratuito' : cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        cardNew.querySelector('#endereco').textContent = item.endereco
        item.telefone == '' ? cardNew.querySelector('#telefone').textContent =  'Não informado' : cardNew.querySelector('#telefone').textContent = item.telefone;



        main.appendChild(cardNew);
    });
};