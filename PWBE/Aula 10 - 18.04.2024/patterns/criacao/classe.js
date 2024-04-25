//  Classe Simples
class Arvore {
    especie;
    altura;
    idade;
}

//  Criando um objeto simples
const arvore = new Arvore();
console.log(arvore)

const arvore1 = new Arvore();
arvore1.especie = 'Mogno';
arvore1.altura = 10;
arvore1.idade = 100;

const arvore2 = new Arvore();
arvore2.especie = 'Cedro';
arvore2.altura = 10;
arvore2.idade = 100;

console.log(arvore1, arvore2);

//  Classe Builder - Complexa
class Argo {
    constructor (ano) {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = ano == undefined ? 2024 : ano;
    }
}

const argos = []

for(i = 0; i < 10; i++) {
    if(i%2 == 0) {
        const argo = new Argo(2010 + i);
        argos.push(argo);
    } else {
        const argo = new Argo();
        argos.push(argo);
    }
}

console.log(argos);

