class Comida {
    constructor(nome, tipo, peso) {
        this.nome = nome || '';
        this.tipo = tipo || '';
        this.peso = peso || 0;
    }
}

class Salgado extends Comida {
    constructor(nome, peso) {
        super(nome, 'Salgado', peso)
    }
}

class Doce extends Comida {
    constructor(nome, peso) {
        super(nome, 'Doce', peso)
    }
}

class Ingrediente {
    constructor(descricao) {
        this.descricao = descricao || ''
    }
}

class ComidaBuilder {
    constructor(nome, tipo, peso) {
        if(nome && tipo && peso) {
            switch (tipo) {
                case 'Salgado':
                    this.comida = new Salgado(nome, peso);
                    break;
                case 'Doce':
                    this.comida = new Doce(nome, peso);
                    break;
                default:
                    this.comida = new Comida(nome, tipo, peso);
                    break;
            }
        } else if(nome && tipo) {
            switch (tipo) {
                case 'Salgado':
                    this.comida = new Salgado(nome);
                    break;
                case 'Doce':
                    this.comida = new Doce(nome);
                    break;
                default:
                    this.comida = new Comida(nome, tipo);
                    break;
            }
        } else {
            this.comida = new Comida();
        }
    }

    setIgrediente(descricao) {
        this.comida.igrediente = new Ingrediente(descricao);
        return this;
    }

    build() {
        return this.comida;
    }
}

const comida1 = new ComidaBuilder('Brigadeiro', 'Doce', '500g');
const comida2 = new ComidaBuilder('Macarrão', 'Salgado', '1kg');
const comida3 = new ComidaBuilder('Feijão', 'Salgado', '1kg');
const comida4 = new ComidaBuilder('Beijinho', 'Doce', '300g');
const comida5 = new ComidaBuilder('Goiabada', 'Doce', '100g');

const comidas = [
    comida1.build(),
    comida2.build(),
    comida3.build(),
    comida4.build(),
    comida5.build()
]

console.log(comidas)