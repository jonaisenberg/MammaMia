import { UsePizza } from '../context/pizzaContext'
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap/'
import { Link } from 'react-router-dom'

const Home = () => {
  const { pizzas, formatoPrecio, handleClick, handleClickMas } = UsePizza()

  return (
    <Row xs={1} md={4} className='g-3 m-5'>
      {pizzas.map((pizza) => (
        <Col key={pizza.id}>
          <Card>
            <Card.Img variant='top' src={pizza.img} alt={`pizza ${pizza.name}`} />
            <Card.Body>
              <Card.Title>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</Card.Title>
            </Card.Body>
            <Card.Body className='list-group-flush'>
              <Card.Text>
                Ingredientes:
              </Card.Text>
              {pizza.ingredients.map((ingredient, pizzaId) => (
                <ListGroup.Item className='mx-2' key={pizzaId}>🍕 {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</ListGroup.Item>
              ))}
            </Card.Body>
            <Card.Body>
              <p>$ {formatoPrecio(pizza.price)}.-</p>
              <Link to={`/pizza/${pizza.id}`}>
                <Button className='m-1 mx-3' variant='primary' onClick={() => handleClickMas(pizza)}>ver mas👀</Button>
              </Link>
              <Link to='/'>
                <Button variant='danger' onClick={() => handleClick(pizza)}>añadir🛒</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Home
