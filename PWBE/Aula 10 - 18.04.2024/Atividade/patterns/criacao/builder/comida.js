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

    build() {
        return this.comida;
    }
}