import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'


export default function Footer() {

    return (
        <Linha>
            <h1>
                <Link to="/habitos"> Hábitos</Link>
            </h1>
            <BotaoHoje>
                <Link to="/hoje">
                    <CircularProgressbar text="Hoje" value={30} >
                    </CircularProgressbar>
                </Link>
            </BotaoHoje>
            <h1>
                <Link to="/historico"> Histórico </Link>
            </h1>

        </Linha>

    )
}

const Linha = styled.div`
background-color: white;
position: absolute;
height: 70px;
width: 100%;
bottom: 0px;
left: 0px;
display: flex;
justify-content: space-around;
align-items: center;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
}
`
const BotaoHoje = styled.div`
margin-left: 5%;
margin-right: 5%;
width: 91px;
height: 91px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-top: -50px;
text{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
}

`