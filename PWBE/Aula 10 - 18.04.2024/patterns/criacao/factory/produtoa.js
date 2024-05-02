class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  
    obterDados() {
      console.log(`Produto: ${this.nome}, Preço: ${this.preco}`);
    }
}

class ProdutoFactory {
    criarProduto(tipo) {
        let produto;

        switch (tipo) {
            case 'A':
                produto = new Produto('Açucar', 7.99);
                break;
            case 'B':
                produto = new Produto('Banana Maça', 7.50);
                break;
            case 'C':
                produto = new Produto('Cereja', 49.00);
                break;
            default:
                produto = new Produto('Produto não encontrado', 0);
                break;
        }
        return produto;
    }
}

const factory = new ProdutoFactory();
const produtoA = factory.criarProduto('A');
const produtoB = factory.criarProduto('B');
const produtoC = factory.criarProduto('C');
const produtoD = factory.criarProduto('D');
produtoA.obterDados();
produtoB.obterDados();
produtoC.obterDados();
produtoD.obterDados();
