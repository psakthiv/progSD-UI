import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React,{ useState } from 'react';
import NavBar from './NavBar'
import {useLocation, useNavigate} from 'react-router-dom';
import RentRP from './RentRP';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import VehicleList from './VehicleList';
import vehiclesearch from './images/vehiclesearch.png';
import clearresults from './images/clearresults.png';
import { Image } from 'react-bootstrap';
import './components.css';

const RideRent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = "Welcome, " + location.state.userName;
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const getFunction = () => {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setUsers(data);
            }
        )
    }

    const clearSearch = () => {
        setUsers(null);
        setIsLoaded(false);
        document.getElementById("stationlist").value = "SS"
    }
   
    return (
        <div>
            <NavBar text = {userName}></NavBar>
            <div className="justify-content-left" style={{width: '70%'}}>
            <Container>
                <div> 
                    <div className="account-pages my-5 pt-sm-5">
                        <div className="row align-items-center justify-content-center">
                            <div className="autocomplete" style={{width: '50%'}}>
                                <p id="dynamicP"><h1><i>Just Ride with Us</i></h1></p>
                                <InputGroup className="mb-3">
                                    <Form.Select size = "sm" id="stationlist"
                                        placeholder="Station"
                                        aria-label="Station"
                                        aria-describedby="basic-addon2">
                                            <option value="SS">--Select Station--</option>
                                            <option value="BS">Buchanan Street</option>
                                            <option value="HH">Hill Head</option>
                                            <option value="SE">St. Enouch</option>
                                            <option value="CC">Cowcaddens</option></Form.Select>
                                            
                                    {!isLoaded? <Button variant="outline-secondary" className="px-4" style={{float:'right'}} 
                                        onClick={()=> getFunction()}><Image
                                        alt=""
                                        src={vehiclesearch}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"/></Button> : null}
                                    {isLoaded? <Button variant="outline-secondary" className="px-4" style={{float:'right'}} 
                                        onClick={()=> clearSearch()}><Image
                                        alt=""
                                        src={clearresults}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"/></Button> : null}
                                </InputGroup>
                            </div>
                            {isLoaded? <VehicleList users={users}></VehicleList> : null}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div class="vertical-menu">
            <div className="justify-content-right" style={{width: '20%'}}><br></br>
                <RentRP></RentRP>
            </div>
        </div>
    </div>);
}

export default RideRent;