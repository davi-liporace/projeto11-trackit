import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import check from "./checkmark-outline.svg"

export default function ContainerTarefa1({ name, highestSequence, currentSequence, id, config, done }) {
    const [sequencia, setSequencia] = useState(false)
    const [recorde, setRecorde] = useState(false)
    function postCheck() {
        if (done === false) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
            setSequencia(true)
            if (highestSequence === currentSequence) {
                setRecorde(true)
            } else { setRecorde(false) }

        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
            setSequencia(false)
            setRecorde(false)
        }
    }


    return (
        <ContainerTarefa done={done}>
            <TituloTarefa>{name}</TituloTarefa>
            <Sequencia><Sequencia1>sequencia atual:</Sequencia1><Sequencia2 sequencia={sequencia}>{currentSequence} dias</Sequencia2></Sequencia>
            <Sequencia1>seu recorde:<Sequencia3 recorde={recorde}> {highestSequence} dias</Sequencia3></Sequencia1>
            <VerificaTarefa  done={done} onClick={postCheck}
            ><img src={check}/> </VerificaTarefa>
        </ContainerTarefa>
    )
}

const ContainerTarefa = styled.div`
margin-top: 20px;
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
position: relative;
box-sizing: border-box;
padding: 20px 20px;
`
const Sequencia = styled.div`
display: flex;

`
const Sequencia1 = styled.div`
font-size: 12.976px;
color:#666666;
display: flex;
`
const Sequencia2 = styled.div`
font-size: 12.976px;
    color: ${props => props.sequencia ? "green" : "#666666"};
`
const Sequencia3 = styled.div`
color:${props => props.recorde ? "green" : "#666666"};
`
const VerificaTarefa = styled.div`
width: 69px;
height: 69px;
background: ${props=>props.done?"green":"#EBEBEB"};
border: 1px solid #E7E7E7;
border-radius: 5px;
display: flex;
position: absolute;
right: 20px;
bottom: 12px;
justify-content: center;
align-items: center;
img{
    width: 70px;
    height: 70px;
    color: white;
}
`
const TituloTarefa = styled.div`
font-family: 'Lexend Deca';
font-size: 19.976px;
color: #666666;
`






