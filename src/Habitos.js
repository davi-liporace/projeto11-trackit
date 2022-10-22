import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import { useContext, useState } from "react"
import BotaoDia from "./BotaoDia"
import axios from "axios"
import { LoginContext } from "./Context"

export default function Habitos(){
    const [novoHabito, setNovoHabito] = useState({name:"", days:[]})
    const diasDaSemana=["D","S","T","Q","Q","S","S"]
    const {user} = useContext(LoginContext)
    const config = {headers:{"Authorization":`Bearer ${user.token}`}}
   function postHabito(){
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",novoHabito,config)
    .then(res => console.log(res.data))

   }
    return(<ContainerPagina><Header></Header>
    <ContainerAddHabito>
        <h1>Meus hábitos</h1>
        <BotaoAdd><h1>+</h1></BotaoAdd>
    </ContainerAddHabito>
    <ContainerNewHabito>
    <InputName><input placeholder="Nome do habito"
    name="name"
    value={novoHabito.name}
    onChange={(e)=>setNovoHabito({...novoHabito,[e.target.name]:e.target.value})}
     /></InputName>
    <ContainerDias>
        {diasDaSemana.map((e, indice)=> <BotaoDia e={e} indice = {indice} novoHabito = {novoHabito} />)}
        

        <h2>Cancelar</h2> <BotaoSalvar onClick={postHabito}>Salvar</BotaoSalvar>
    </ContainerDias>

    </ContainerNewHabito>
    <TextoAviso>Você não tem nenhum hábito cadastrado ainda. 
        Adicione um hábito para começar a trackear!</TextoAviso>
    
    <Footer></Footer></ContainerPagina>)
}
const ContainerPagina = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const ContainerAddHabito = styled.div`
margin-top: 80px;
display: flex;
justify-content: space-around;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-right: 50px;
}
`
const BotaoAdd = styled.button`
width: 40px;
height: 35px;
background-color: #52B6FF;
border-radius: 4.63636px;
justify-content: center;
display: flex;
position: relative;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
display: flex;
margin: auto auto;
font-size: 26.976px;
color: white;
}
`
const ContainerNewHabito = styled.div`
margin-top: 30px;
width: 340px;
height: 180px;
border-radius: 5px;
background-color: white;
display: flex;
flex-direction: column;
padding-left: 19px;
box-sizing: border-box;
padding-right: 19px;
padding-top: 18px;

`
const InputName = styled.form`
 input{
   width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;}
`
const ContainerDias = styled.div`
margin-top: 5px;
display: flex;
position: relative;
h2{
    position: absolute;
bottom: -45px;
left: 120px;
font-family: 'Lexend Deca';
font-size: 15px;
color: #52B6FF;
}
`
const BotaoSalvar = styled.button`
width: 84px;
height: 35px;
background-color: #52B6FF;
border-radius: 4.63636px;
position: absolute;
right: 0px;
top: 50px;
font-family: 'Lexend Deca';
color: white;
`
const TextoAviso = styled.div`
margin-left: 20px;
margin-top: 20px;
font-family: 'Lexend Deca';
font-size: 17.976px;
color: #666666;
`
 