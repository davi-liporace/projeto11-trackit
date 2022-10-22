import { useState } from "react";
import styled from "styled-components";

export default function BotaoDia({e,indice, novoHabito}){
    const [diaClicado,setDiaClicado] = useState(false)

    function clicado(){
        if(!diaClicado){setDiaClicado(!diaClicado)
            novoHabito.days.push(indice)}
                    
    }

    return( <BotaoStyled diaClicado={diaClicado} onClick={clicado}><h1>{e}</h1></BotaoStyled>
    )
}

const BotaoStyled= styled.button`
width: 30px;
height: 30px;
margin-right: 5px;
background: ${props=> props.diaClicado? "#CFCFCF;":"#FFFFFF" };
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
h1{
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    color: #DBDBDB;
}
`