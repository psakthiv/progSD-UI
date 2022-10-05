import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import './components.css';
import Table from 'react-bootstrap/Table';
import NavBar from './NavBar'
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';


import './components.css'

import { Image } from 'react-bootstrap';

const RideRent = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setUsers(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
  }, [])
    
  const [modalShow, setModalShow] = React.useState(false);
  const columns = [
    { key: 'vehiclenumber', name: 'Vehicle Number' },
    { key: 'modal', name: 'Vehicle  Modal' },
    { key: 'lastride', name: 'Last Ride On' },
    { key: 'batterylevel', name: 'Battery Level' },
    { key: 'estimatedride', name: 'Estimated Ride KMs' }
  ];

  if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading...</div>;
} 
     else return (
            <div>
            <NavBar text = "Welcome, User">
                </NavBar>
                    <div>
                        <Container>
                        <DataGrid checkboxColumn columns={columns} rows={users.map(user => (
                 { vehiclenumber: user.username, modal: user.name, lastride:  user.email,batterylevel: user.id,  estimatedride: user.address.street}
                ))} 
                rowSelection={{
                  showCheckbox: true
                }}/>
                        </Container>
                    </div>
                </div>
        );

}

export default RideRent;