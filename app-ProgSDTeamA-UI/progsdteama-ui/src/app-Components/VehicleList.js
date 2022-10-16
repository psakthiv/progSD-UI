import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './components.css';
import Table from 'react-bootstrap/Table';
import 'react-data-grid/lib/styles.css';
import Modal from 'react-bootstrap/Modal';
import rent from './images/motorbike.png';
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom';

const VehicleList = (props) => {

  const [vehicleId, setVehicleId] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);

  const handleShow = (vehicleID) => {
    setShow(true);
    setVehicleId(vehicleID)
  }

  const handleRent = () =>{
    setShow(false);
    navigate("/rented", {state:{userName:"Punitha"}})
  }
  
 return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rent Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Rent <b>{vehicleId}</b> vehicle?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>No</Button>
            <Button variant="primary" onClick={handleRent}>Yes</Button>
          </Modal.Footer>
        </Modal>
        <div>
          <Container>
            <Table striped hover size="sm">
              <thead>
                <tr>
                  <th>Vehicle Number</th>
                  <th>Vehicle  Modal</th>
                  <th>Last Ride On</th>
                  <th>Battery Level</th>
                  <th>Estimated Ride KMs</th>
                </tr>
              </thead>
              <tbody> {
                props.users.map(user => (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td><Button id= {user.id} variant="outline-secondary" size="sm" onClick={() => handleShow(user.id)}><Image   alt=""
                                src={rent}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"/> </Button></td>
                  </tr>
                )) }
              </tbody>
            </Table>
          </Container>
        </div>
    </div>
  );
}

export default VehicleList;