const cepInput = document.getElementById('cep');
const ruaInput = document.getElementById('rua');
const bairroInput = document.getElementById('bairro');
const localInput = document.getElementById('localidade');

async function buscarCep() {
    const cep = cepInput.value;

    if(cep.length !== 8) {
        cepInput.style.boxShadow = '7px 7px 0 rgb(200, 30, 30)'
        cepInput.style.transform = 'translate(-7px, -7px)'
        return;
    } else {
        cepInput.style.boxShadow = 'none'
        cepInput.style.transform = 'translate(0, 0)'
    }

    var url = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const result = await dados.json();

    console.log(result);

    ruaInput.value = result.logradouro;
    bairroInput.value = result.bairro;
    localInput.value = `${result.localidade} / ${result.uf}`;

}