import { Button, Row, Container, Col } from "react-bootstrap"

export default function Game(props)
{
  function GetGameButtons()
  {
    let x = props.buttons.map((elem, i) => {
      const color = `shadow p-5 mb-5 ${elem.clicked ? 'bg-success' :'bg-light'} border rounded`
      return (<Col><Button key={i} data-id={i} onClick={props.handleClick} className={color}>{elem.btn}</Button></Col>)
    })
    return [x.slice(0,5), x.slice(5,)]
  }
    
	return (
    <Container className='App-Game mt-4'>
      
        <Row className='mb-1 pb-1'>
          <Col></Col>
          <Col className='d-flex justify-content-center'>
            {GetGameButtons()[0]}
          </Col>
          <Col></Col>
      </Row>
      <Row className='mt-1 pt-1'>
          <Col></Col>
          <Col className='d-flex justify-content-center ps-3'>
          {GetGameButtons()[1]}
          </Col>
          <Col></Col>
      </Row>
    </Container> 
	)
}