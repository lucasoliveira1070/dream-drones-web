import React from "react"
import MemberCard from "../../components/MemberCard/MemberCard"
import imgLucas from '../../assets/lucas.jpg'
import imgDiego from '../../assets/diego.jpg'
import imgVictor from '../../assets/hugo.jpg'
import './About.css'
import Footer from "../../components/Footer/Footer"
const About = () => {
    return (
        <div className="container">
            <div className="title">
                <h1>Nosso time</h1>
            </div>
            <div className="bodyDiv">
                <div className="column">
                    <img src={imgLucas} />
                    <MemberCard data={{ nome: 'Lucas Pereira de Oliveira', rm: '86419' }} />
                </div>
                <div className="column">
                    <img src={imgDiego} />
                    <MemberCard data={{ nome: 'Diego Caruba do Carmo', rm: '84197' }} />
                </div>
                <div className="column">
                    <img src={imgVictor} />
                    <MemberCard data={{ nome: 'Victor Hugo Aguillar Xavier', rm: '84250' }} />
                </div>

            </div>
            <Footer />
        </div>)
}
export default About