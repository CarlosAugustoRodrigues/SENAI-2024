const uri = "http://localhost:3000/destinos";
const itens = [];

function loadItens(){
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        console.log(itens);
    });
};