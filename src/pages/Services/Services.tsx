import React from "react"
import './Services.css'
import service1 from '../../assets/service1.jpg'
import vulcan from '../../assets/vulcan.jpg'
import freefly from '../../assets/freefly.jpg'
import { BsCurrencyDollar } from "react-icons/bS"
import { MdPlace } from "react-icons/md"
import { GiWeight } from "react-icons/gi"
import { AiOutlineFieldTime } from "react-icons/ai"
import Footer from "../../components/Footer/Footer"



const Services = () => {
    return (
        <div className="container">
            <div className="container-item">
                <img className="service-img" src={service1} />
                <div className="item-text">
                    <h2>Entrega básica</h2>
                    <h5>A entrega básica é o serviço mais comum oferecido pela Dream Drones.<br />
                        Nesta categoria, nós disponibilizaremos um drone de baixa capacidade o mais rápido possível.<br />
                        Nosso drone possui a capacidade de carga de 12 KG e atende apenas a cidade de São Paulo.
                    </h5>

                    <div className="info-div">
                        <h4><BsCurrencyDollar size={40} /> 45,00 </h4>
                        <h4><MdPlace size={40} /> São Paulo - SP</h4>
                        <h4><GiWeight size={40} />12.00</h4>
                        <h4><AiOutlineFieldTime size={40} />20min.</h4>
                    </div>
                </div>

            </div>
            <div className="container-item">
                <img className="service-img" src={freefly} />
                <div className="item-text">
                    <h2>Entrega Plus</h2>
                    <h5>A entrega plus é o serviço mediano oferecido pela Dream Drones.<br />
                        Nesta categoria, nós disponibilizaremos um drone de capacidade média o mais rápido possível.<br />
                        Nosso drone possui a capacidade de carga de 18 KG e atende apenas a cidade de São Paulo.
                    </h5>

                    <div className="info-div">
                        <h4><BsCurrencyDollar size={40} />70,00 </h4>
                        <h4><MdPlace size={40} />São Paulo - SP</h4>
                        <h4><GiWeight size={40} />18.00</h4>
                        <h4><AiOutlineFieldTime size={40} />16min.</h4>
                    </div>
                </div>

            </div>
            <div className="container-item">
                <img className="service-img" src={vulcan} />
                <div className="item-text">
                    <h2>Entrega Premium</h2>
                    <h5>A entrega premium é o serviço de mais alto nível oferecido pela Dream Drones.<br />
                        Nesta categoria, nós disponibilizaremos um drone de altíssima capacidade o mais rápido possível.<br />
                        Nosso drone possui a capacidade de carga de 30 KG e atende apenas a cidade de São Paulo.
                    </h5>

                    <div className="info-div">
                        <h4><BsCurrencyDollar size={40} /> 90,00 </h4>
                        <h4><MdPlace size={40} /> São Paulo - SP</h4>
                        <h4><GiWeight size={40} />30.00</h4>
                        <h4><AiOutlineFieldTime size={40} />10min.</h4>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}
export default Services