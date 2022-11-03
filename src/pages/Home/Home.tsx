import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Drone1 from '../../assets/drone1.jpg'
import Drone2 from '../../assets/drone2.jpg'
import Divider from "../../components/Divider/Divider";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();



    return (
        <div className="container">
            <div style={{ display: 'block', width: '100%', padding: 30 }}>
                <h1 className="title">Dream Drones</h1>
                <Carousel pause="hover" indicators={false}>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={Drone1}
                            alt="Image One"
                        />
                        <Carousel.Caption>
                            <h3>Rapidez</h3>
                            <p>Nossos clientes merecem todo o conforto.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={Drone2}
                            alt="Image Two"
                        />
                        <Carousel.Caption>
                            <h3>Disponibilidade</h3>
                            <p>Nossos drones fazem entregas 24h por dia.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Divider>Objetivos</Divider>
                <p className="mainText">
                    Nós da Dream Drones temos como objetivo oferecer a melhor experiência em entregas feitas por drones.<br />
                    Queremos oferecer serviços da maior qualidade possível, garantindo o seu conforto e rapidez em nossas entregas.<br />
                    Conheça melhor nossos serviços e produtos.
                </p>
                <div className="buttonDiv">
                    <Button onClick={() => navigate('/products')} size="lg" color="#00BBF9">Serviços</Button>
                </div>
                <Footer />
            </div>


        </div>
    )
}
export default Home