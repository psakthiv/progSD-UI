import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import './components.css';
import Image from 'react-bootstrap/Image'
import background from './images/Background.jpg'
import NavBar from './NavBar'
import {useLocation, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import RentRP from './RentRP';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RideReturn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = "Welcome, " + location.state.userName;
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);

    const handleShow = () => {
      setShow(true);
    }
    
    const handleReturn = () =>{
      setShow(false);
      navigate("/home", {state:{userName:location.state.userName}})
    }

    return (
            <div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Rent Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to Return <b>Vehicle Number</b> vehicle?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>No</Button>
                    <Button variant="primary" onClick={handleReturn}>Yes</Button>
                  </Modal.Footer>
              </Modal>
              <NavBar text = {userName} ></NavBar>
              <div className="justify-content-left" style={{width: '70%'}}>
              
                <Container>
                  <div className="account-pages my-5 pt-sm-5">
                    <div className="row align-items-center justify-content-center">
                      <center>
                      <p id="dynamicP"><h1><i>Return your Ride</i></h1></p>
                        <Card style={{ width: '50rem' }}>
                          <Card.Body>
                            <Card.Title>Your Vehicle</Card.Title>
                            <Card.Text>
                              <Image alt="" src={background}
                                  width="75"
                                  height="75"
                                  className="d-inline-block align-top"/><br></br>
          
                            </Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>Vehicle Number - Get this from the Rest Call</ListGroup.Item>
                            <ListGroup.Item>Vehicle Rent Date</ListGroup.Item>
                            <ListGroup.Item>Vehicle Rent Station</ListGroup.Item>
                            <ListGroup.Item>Approximate Estimates so far</ListGroup.Item>
                            <ListGroup.Item> 
                              <Form.Select size = "sm" list="station-list"
                                        placeholder="Station"
                                        aria-label="Station"
                                        aria-describedby="basic-addon2">
                                            <option>--Select Station--</option>
                                            <option>Buchanan Street</option>
                                            <option>Hill Head</option>
                                            <option>St. Enouch</option>
                                            <option>Cowcaddens</option>
                                </Form.Select>        
                            </ListGroup.Item>
                            <ListGroup.Item><Button variant="outline-secondary" size="sm" onClick={() => handleShow()}>Return Ride</Button></ListGroup.Item>
                          </ListGroup>
                        </Card>
                        
                      </center> 
        
                    </div>
                  </div>
                </Container>
              </div>
              <div className="justify-content-right" style={{width: '20%'}}>
                <RentRP></RentRP>
              </div>
            </div>
        );

    
}

export default RideReturn;
