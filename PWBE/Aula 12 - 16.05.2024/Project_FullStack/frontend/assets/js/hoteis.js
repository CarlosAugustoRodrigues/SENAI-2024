const uri = "http://localhost:3000/hoteis";
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
        cardNew.querySelector('#hotel').textContent = item.nome;
        cardNew.querySelector('#valor').textContent = `R$${item.valor}`;
        cardNew.querySelector('#endereco').textContent = item.endereco;
        cardNew.querySelector('#email').textContent = item.email;
        cardNew.querySelector('#site').textContent = item.site;
        cardNew.querySelector('#telefone').textContent = item.telefones.length;

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
        };
        
        main.appendChild(cardNew);
    });
};