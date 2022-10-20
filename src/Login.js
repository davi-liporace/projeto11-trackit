import styled from "styled-components"
import logo from "./Group8.jpg"
import { Link } from "react-router-dom"

export default function Login(){
    return(<ContainerPagina>
        <img src={logo}/>
        <ContainerLogin>
            <input placeholder="e-mail" />
            <input placeholder="senha" />
            <BotaoLogin><h1>Entrar</h1></BotaoLogin>
            <Link to ="/cadastro"> <h1>Não tem uma conta? Cadastre-se!</h1></Link>


        </ContainerLogin>
       
        </ContainerPagina>)
}



const ContainerPagina = styled.div`
flex-direction: column;
display: flex;
align-items: center;
margin-top: 60px;

margin-left: auto;
img{
    height: 138px;
    width: 180px;
    margin-bottom: 30px;
}
`
const ContainerLogin = styled.div`
display:flex ;
flex-direction: column;
align-items: center;
input{
    width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 10px;
color: #D4D4D4;
}
h1{
    font-size: 13.976px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    text-decoration-line: underline;
}
`
const BotaoLogin = styled.button`
width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
margin-top: 5%;
margin-bottom: 5%;
h1{
    color: white;
    font-size: 20.976px;
    font-family: 'Lexend Deca';

}
`