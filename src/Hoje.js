import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "./Context"
import axios from "axios"

export default function Hoje(){
    const dias = ["Domingo", "Segunda","Terça", "Quarta", "Quinta","Sexta","Sabado"]
    const {user} = useContext(LoginContext)
    const config = {headers:{"Authorization":`Bearer ${user.token}`}}
    const [habitos, setHabitos] = useState([{name:"",currentSequence:"",highestSequence:""}])
    const dayjs = require("dayjs")
    const dia = dayjs().date()
    const nomeDia = dias[dayjs().day()]
    const mes = dayjs().month() + 1
    useEffect(()=> axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
    .then(res=>setHabitos(res.data))
    .catch(res=>console.log(res)))


    return(<ContainerPagina><Header></Header>
    <Corpo>
        <h1>{nomeDia}, {dia}/{mes}</h1>
        <h2>Nenhum hábito concluído ainda</h2>
        {habitos.map((h)=><ContainerTarefa>
            <TituloTarefa>{h.name}</TituloTarefa>
            <Sequencia><Sequencia1>sequencia atual:</Sequencia1><Sequencia2>{h.currentSequence} dias</Sequencia2></Sequencia>
            <Sequencia1>seu recorde: {h.highestSequence} dias</Sequencia1>
            <VerificaTarefa
            type="checkbox"
            ></VerificaTarefa>
        </ContainerTarefa>)} 
    </Corpo>
    <Footer></Footer></ContainerPagina>)
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
`
const Sequencia2 = styled.div`
font-size: 12.976px;
    color: green;
`
const VerificaTarefa = styled.input`
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
display: flex;
position: absolute;
right: 20px;
bottom: 12px;
`
const TituloTarefa = styled.div`
font-family: 'Lexend Deca';
font-size: 19.976px;
color: #666666;
`

const ContainerPagina = styled.div`
justify-content: center;
display: flex;
box-sizing: border-box;
padding-left: 17px;
`
const Corpo = styled.div`
margin-top: 100px;
height: 100%;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}
h2{
    margin-top: 17px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #BABABA;
}
`