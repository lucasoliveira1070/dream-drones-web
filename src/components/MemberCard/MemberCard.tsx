import React from "react"
import './MemberCard.css'

interface Data {
    data: {
        nome: string;
        rm: string;
    }
}
const MemberCard = ({ data }: Data) => {

    const imagePath = { uri: 'https://www.themoviedb.org/t/p/w200/' };
    return (
        <div className="container">
            <p><span>{data.nome}</span></p>
            <p><span>RM {data.rm}</span></p>
        </div>
    )
}

export default MemberCard;