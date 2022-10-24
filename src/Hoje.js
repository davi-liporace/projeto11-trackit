import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "./Context"
import axios from "axios"
import ContainerTarefa1 from "./ContainerTarefa"

export default function Hoje(){
    const dias = ["Domingo", "Segunda","Terça", "Quarta", "Quinta","Sexta","Sabado"]
    const {user, setUser} = useContext(LoginContext)
    const config = {headers:{"Authorization":`Bearer ${user.token}`}}
    const [habitos, setHabitos] = useState([{name:"",currentSequence:"",highestSequence:"", done:""}])
    const dayjs = require("dayjs")
    const dia = dayjs().date()
    const nomeDia = dias[dayjs().day()]
    const mes = dayjs().month() + 1
    useEffect(()=> axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
    .then(res=>{
        setHabitos(res.data)
        calculaPorcentagem(res.data)})
    .catch(res=>console.log(res)))

    function calculaPorcentagem(calc){
        let marcados = 0
        for (let i = 0 ; i<calc.length;i++){
            if(calc[i].done === true){
                marcados++
            }else{ marcados = marcados}
        }
        
        const progress = (marcados/calc.length*100).toFixed()
        const novoUser = {...user,progress:progress}
        setUser(novoUser)
        

        
    }

    return(<ContainerPagina><Header></Header>
    <Corpo data-identifier="today-infos" >
        <h1>{nomeDia}, {dia}/{mes}</h1>
        {habitos.some((elemento) => elemento.done === true) ? <PorcentagemCor>{user.progress}% dos hábitos concluídos</PorcentagemCor> : <h2>Nenhum hábito concluído ainda</h2>}
        
        {habitos.map((h)=><ContainerTarefa1 name={h.name} currentSequence={h.currentSequence} highestSequence={h.highestSequence} id={h.id} done={h.done} config={config}  />)} 
    </Corpo>
    <Footer></Footer></ContainerPagina>)
}






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
const PorcentagemCor = styled.div`
 margin-top: 17px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: green;
`
   


