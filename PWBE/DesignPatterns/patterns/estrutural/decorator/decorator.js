// Design Pattern Decorator é um padrão de design estrutural que permite adicionar comportamentos ou responsabilidades a objetos individuais de forma dinâmica, sem alterar a estrutura do próprio objeto.

// Ele permite que você envolva um objeto com outros objetos, chamados de decorators, que fornecem funcionalidades adicionais.
// Isso é feito mantendo a mesma interface do objeto original, permitindo que os decorators sejam combinados de várias maneiras.

// Na programação, você pode ter um objeto base que representa algo simples, como um café básico.
// Então, você pode adicionar funcionalidades extras a esse café, como leite, chocolate, etc., sem modificar a classe base do café.
// Cada funcionalidade adicional é como um "decorator", que envolve o objeto base e adiciona a funcionalidade desejada.

// O Decorator é útil quando você precisa adicionar comportamentos a objetos de forma flexível e modular, sem criar subclasses para cada combinação possível de funcionalidades.
// Isso promove uns dos princípio SOLID, o 'Open-Closed', que diz: "Entidades de software devem estar aberto para extensão, mas fechado para modificação",
// pois você pode adicionar novos comportamentos sem alterar o código fonte.


//Clase Base
class Cafe {
    preparar() {
        return 'Café básico';
    }

    preco() {
        return 5;
    }
}

// Decorator que adiciona leite ao café
class Leite {
    constructor(cafe) {
        this.cafe = cafe
    }
    preparar() {
        return this.cafe.preparar() + ', com leite';
    }

    preco() {
        return this.cafe.preco() + 2;
    }
}

// Decorator que adiciona chocolate ao café
class Chocolate {
    constructor(cafe) {
        this.cafe = cafe
    }
    preparar() {
        return this.cafe.preparar() + ', com chocolate';
    }

    preco() {
        return this.cafe.preco() + 3;
    }
}

let meuCafe = new Cafe();

console.log('Tipo: ' + meuCafe.preparar());
console.log('Preço: R$' + meuCafe.preco());

meuCafe = new Leite(meuCafe);

console.log('Tipo: ' + meuCafe.preparar());
console.log('Preço: R$' + meuCafe.preco());

meuCafe = new Chocolate(meuCafe);

console.log('Tipo: ' + meuCafe.preparar());
console.log('Preço: R$' + meuCafe.preco());