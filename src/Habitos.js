import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import BotaoDia from "./BotaoDia"
import axios from "axios"
import { LoginContext } from "./Context"
import { Link, Route } from "react-router-dom"
import lixeira from "./trash-outline.svg"

export default function Habitos(){
    const [novoHabito, setNovoHabito] = useState({name:"", days:[]})
    const diasDaSemana=["D","S","T","Q","Q","S","S"]
    const {user} = useContext(LoginContext)
    const config = {headers:{"Authorization":`Bearer ${user.token}`}}
    const [displayNovoHabito, setDisplayNovoHabito] = useState(false)
    const [listaHabitos, setListaHabitos] = useState([{name:"",days:[]}])
    useEffect(()=> axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config)
    .then(res=>setListaHabitos(res.data)))

    function mostraNovoHabito(){
        setDisplayNovoHabito(!displayNovoHabito)
    }
    
   function postHabito(){
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",novoHabito,config)
    .then(res => console.log(res.data))
    setNovoHabito(({name:"", days:[]}))
    
   }

if(listaHabitos === 0){
    return(<ContainerPagina><Header></Header>
    <ContainerAddHabito>
        
        <h1>Meus hábitos</h1>
        <BotaoAdd onClick={mostraNovoHabito}><h1>+</h1></BotaoAdd>
    </ContainerAddHabito>
    <ContainerNewHabito displayNovoHabito ={displayNovoHabito} setDisplayNovoHabito={setDisplayNovoHabito}>
    <InputName><input placeholder="Nome do habito" data-identifier="input-habit-name"
    name="name"
    value={novoHabito.name}
    onChange={(e)=>setNovoHabito({...novoHabito,[e.target.name]:e.target.value})}
     /></InputName>
    <ContainerDias data-identifier="week-day-btn">
        {diasDaSemana.map((e, indice)=> <BotaoDia e={e} indice = {indice} novoHabito = {novoHabito} />)}
        

        <h2 onClick={mostraNovoHabito} data-identifier="cancel-habit-create-btn" >Cancelar</h2> <BotaoSalvar onClick={postHabito} data-identifier="save-habit-create-btn" > Salvar</BotaoSalvar>
    </ContainerDias>

    </ContainerNewHabito>
    
    <TextoAviso data-identifier="no-habit-message" >Você não tem nenhum hábito cadastrado ainda. 
        Adicione um hábito para começar a trackear!</TextoAviso>
    
    <Footer></Footer></ContainerPagina>)
} else{  return(<ContainerPagina><Header></Header>
<ContainerAddHabito>
    
    <h1>Meus hábitos</h1>
    <BotaoAdd onClick={mostraNovoHabito}><h1>+</h1></BotaoAdd>
</ContainerAddHabito>
<ContainerNewHabito displayNovoHabito ={displayNovoHabito} setDisplayNovoHabito={setDisplayNovoHabito}>
<InputName><input placeholder="Nome do habito"
name="name"
value={novoHabito.name}
onChange={(e)=>setNovoHabito({...novoHabito,[e.target.name]:e.target.value})}
 /></InputName>
<ContainerDias>
    {diasDaSemana.map((e, indice)=> <BotaoDia e={e} indice = {indice} novoHabito = {novoHabito} />)}
    

    <h2 onClick={mostraNovoHabito}>Cancelar</h2> <Link to="/hoje"> <BotaoSalvar data-identifier="create-habit-btn" onClick={postHabito}>Salvar</BotaoSalvar></Link>
</ContainerDias>

</ContainerNewHabito><AfastaoFooter>
{listaHabitos.map((e) => <ContainerHabito>
    <TituloHabito>{e.name}</TituloHabito>
    <ContainerDias>
    {diasDaSemana.map((d, indice)=>  <Dia days={e.days} indice={indice}><h1>{d}</h1></Dia>)}
        </ContainerDias>
    <BotaoApagar src={lixeira} onClick={()=> {
        if(window.confirm("Quer mesmo deletar?")){
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e.id}`,config)
            .then(res=>console.log(res.data))
        }}
        
     }></BotaoApagar>
        
    </ContainerHabito>)} </AfastaoFooter>


<Footer></Footer></ContainerPagina>)
    
}
}
const AfastaoFooter = styled.div`
margin-bottom:100px;
`
const ContainerHabito= styled.div`
margin-top: 30px;
width: 340px;
height: 91px;
border-radius: 5px;
background-color: white;
position: relative;
display: flex;
flex-direction: column;
padding-left: 19px;
box-sizing: border-box;
padding-right: 19px;
padding-top: 18px;

`
const TituloHabito = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;`

const Dia = styled.div`
width: 30px;
height: 30px;
margin-right: 5px;
background: ${props=>props.days.includes(props.indice)?"#CFCFCF":"white"};
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
const BotaoApagar=styled.img`
position: absolute;
width: 13px;
height: 15px;
right: 10px;
`
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
display: ${props=> props.displayNovoHabito? "flex":"none" };
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
/* display: ${props=> props.zeroHabitos? "flex":"none" }; */
`
 