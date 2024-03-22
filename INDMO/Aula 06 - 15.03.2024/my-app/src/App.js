import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, Button, Badge, Modal, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ name, title, descricao, addToCart }) {
  const img = `/${name.toLowerCase()}.jpg`;

  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {descricao}.
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart(name)}>
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Cart({ cartItems, removeFromCart, show, handleClose, finalizePurchase }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - R$ {item.price.toFixed(2)}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)} className="ms-2">
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="mt-3">Total: R$ {totalPrice.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={finalizePurchase}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (productName) => {
    // Adicione a lógica para obter o preço do produto com base no nome
    // Você pode usar um objeto ou um banco de dados para mapear os preços dos produtos
    const productPrice = 10; // Por exemplo, preço fixo de R$10 para todos os produtos
    const newItem = { name: productName, price: productPrice };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const finalizePurchase = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Por exemplo, limpar o carrinho de compras
    setCartItems([]);
    // Ou exibir uma mensagem de sucesso
    alert('Compra finalizada com sucesso!');
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CR Informática</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#produtos">Produtos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-cart"></i> <Badge bg="danger">{cartItems.length}</Badge>
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1 className="text-center mb-4">Produtos em Destaque</h1>
        <div className="row">
          <ProductCard name="Mouse" title="Mouse Gamer Razer" addToCart={addToCart} descricao="Razer Viper Ultimate, Wireless 2.4Ghz" />
          <ProductCard name="Teclado" title="Teclado K500-B61" addToCart={addToCart} descricao="Machenike K500-B61, Formato 60% com Fio" />
          <ProductCard name="Headset" title="Logitech G435" addToCart={addToCart} descricao="Headset Logitech G435, Headset Wireless 2.4Ghz" />
        </div>
      </Container>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        &copy; 2024 Minha Loja. Todos os direitos reservados.
      </footer>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} show={showCart} handleClose={handleClose} finalizePurchase={finalizePurchase} />
    </div>
  );
}

export default App;
