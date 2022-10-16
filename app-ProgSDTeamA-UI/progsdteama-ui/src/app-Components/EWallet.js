import Container from 'react-bootstrap/Container';
import React from 'react';
import './components.css';
import Image from 'react-bootstrap/Image'
import ewallet from './images/wallet.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';


const EWallet = (props) => {
    return (
            <div>
              <Modal {...props} size="md">
                <Modal.Header closeButton>
                  <Modal.Title>E-Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <div className= "center">
                      <Card style={{ width: '25rem' }}>
                        <Card.Body>
                          <Card.Title>E-Wallet</Card.Title>
                          <Card.Text><Image   alt=""
                                    src={ewallet}
                                    width="75"
                                    height="75"
                                    className="d-inline-block align-top"/><br></br>
            
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>
                            <Form.Control plaintext readOnly defaultValue="Current Balance £2.07" />
                          </ListGroup.Item>
                          <ListGroup.Item> 
                            <InputGroup className="mb-3">
                                <InputGroup.Text>£</InputGroup.Text>
                                  <Form.Control
                                    placeholder="Enter the Top UP Amount"
                                    aria-label="Enter the Top UP Amount"
                                    aria-describedby="basic-addon"/>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>
                          </ListGroup.Item>
                          <ListGroup.Item> 
                            <InputGroup className="mb-3">
                                  <Form.Control
                                    placeholder="Card Number"
                                    aria-label="Card Number"
                                    aria-describedby="basic-addon"/>
                            </InputGroup>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row className="mb-3">
                              <Form.Group as={Col} controlId="formDate">
                                <Form.Label>Date(MM/YYYY)</Form.Label>
                                <Form.Control />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formCVV">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control />
                              </Form.Group>
                          </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button variant="outline-primary">Top Up</Button>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </div>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
              
            </div>
        );

    
}

export default EWallet;
