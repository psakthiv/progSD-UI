import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './components.css';
import logo from './images/Logo.jpg';
import Image from 'react-bootstrap/Image'
import background from './images/Background.jpg'
import NavBar from './NavBar'
import {useLocation} from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import HomeCarousel from './HomeCarousel';


const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = "Welcome, " + location.state.userName;
    return (
            <div>
                
                <NavBar text = {userName} >
                </NavBar>
                    <div className="justify-content-left">
                <Container>
                    <div
                        style={{
                           
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100px',}}>
                                <br></br>
                                <HomeCarousel text = {userName} >
                </HomeCarousel>
                                 <div className="bg-blue border"><div className='app flex-row align-items-center'>
                                <label htmlFor="">Select Station</label>
                                <select className='form-select'>
                                    <option value="SELECT">--Select--</option>
                                    <option value="BV">Buchanan View</option>
                                    <option value="HH">Hill Head</option>
                                    <option value="SE">St. Enouch</option>
                                    <option value="SP">Partick</option> 
                                </select>           
                            </div></div><br></br>
                            <div className='app flex-row align-items-center'>
                            <Button variant="outline-primary" className="px-4" style={{float:'right'}} onClick={()=>navigate("/reserve")}>Rent a Ride</Button>
                            </div>
                    </div>
                </Container>
                </div>
                
                <div className="justify-content-right"><br></br>
                    <div className="back-image" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '75%',
                        width: '100%'}}>
                    <Image rounded fluid
                        src={background}
                        className="d-inline-block align-top"
                        alt="Digital Chef"
                        height= "50%"
                         />
                    </div>
                 </div>
            </div>
        );

    
}

export default Home;