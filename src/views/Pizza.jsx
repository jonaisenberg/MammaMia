import { UsePizza } from '../context/pizzaContext'
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap/'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const { formatoPrecio, pizzaSeleccionada, handleClick } = UsePizza()
  const { id } = useParams()
  console.log(id)

  return (
    <Row className='g-3 m-5' style={{ maxWidth: '80rem' }}>
      {pizzaSeleccionada && (
        <Col key={pizzaSeleccionada.id}>
          <Card>
            <Row className='g-0'>
              <Col xs={5}>
                <Card.Img
                  style={{ width: '30rem', height: '29rem' }}
                  variant='top'
                  src={pizzaSeleccionada.img}
                  alt={`pizza ${pizzaSeleccionada.name}`}
                />
              </Col>
              <Col xs={7}>
                <Card.Body>
                  <Card.Title>
                    {pizzaSeleccionada.name.charAt(0).toUpperCase() + pizzaSeleccionada.name.slice(1)}
                  </Card.Title>
                </Card.Body>
                <Card.Body className='list-group-flush'>
                  <Card.Text>{pizzaSeleccionada.desc}</Card.Text>
                  <Card.Text>Ingredientes:</Card.Text>
                  {pizzaSeleccionada.ingredients.map((ingredient, pizzaId) => (
                    <ListGroup.Item className='mx-2' key={pizzaId}>
                      🍕 {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                    </ListGroup.Item>
                  ))}
                </Card.Body>
                <Card.Body>
                  <p>$ {formatoPrecio(pizzaSeleccionada.price)}.-</p>
                  <Button variant='danger' onClick={() => handleClick(pizzaSeleccionada)}>añadir🛒</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      )}
    </Row>
  )
}

export default Pizza
