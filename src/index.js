import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import  Button  from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
class App extends React.Component {

    constructor (props){
        super (props)
        this.state = {
            jogo: null
        }
    }

    gerarJogo = () => {
        let aux = []
        while (aux.length < 6){
            let n = Math.round(Math.random() * 60) + 1
            if (!aux.includes(n)) aux.push(n)
        }
        this.setState({jogo: aux})
    }

    render(){
        return  (
            <Container className="mt-2">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="p-2">
                            <Card.Header>
                                Mega sena
                            </Card.Header>
                            <Card.Body 
                                className="d-flex flex-column justify-content-center align-items-center border rounded" 
                                style={{height: '8rem'}}>
                                {
                                    this.state.jogo ?
                                        <ListGroup   ListGroup horizontal>
                                        {
                                            this.state.jogo.map((numero) => (
                                                <ListGroup.Item variant="success" className="item d-flex justify-content-center align-items-center">
                                                    {numero}
                                                </ListGroup.Item>
                                            ))
                                        }
                                        </ListGroup>
                                        :
                                        <Card.Text className="fs-2">
                                            Clique para obter seu jogo
                                        </Card.Text>
                                }
                                    {/* <ListGroup.Item variant="success" className="item">
                                        {this.state.jogo[0]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success" className="item">
                                        {this.state.jogo[1]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success" className="item">
                                        {this.state.jogo[2]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success" className="item">
                                        {this.state.jogo[3]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success" className="item">
                                        {this.state.jogo[4]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success" className="item">
                                        {this.state.jogo[5]}
                                    </ListGroup.Item> */}
                            <Button variant="outline-success"className="w-100 mt-2" onClick={this.gerarJogo}>
                                Gerar jogo
                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        ) 
    }  
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
