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