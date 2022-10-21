import styled from "styled-components"
import logo from "./Group8.jpg"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { LoginContext } from "./Context"
import axios from "axios"


export default function Cadastro(){
    const {user, setUser} = useContext(LoginContext)
    const [body, setBody] = useState({email:"",name:"",image:"",password:""})
    const navigate = useNavigate()
function handleForm(e){
    setBody({...body,[e.target.name]:e.target.value})
}
function postLogin(e){
    e.preventDefault()
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body)
    .then(res =>alert("Cadastro realizado!"), navigate("/") )
    .catch(res => alert(res.response.status))
}



    return(<ContainerPagina>
        <img src={logo}/>
        <ContainerLogin onSubmit={postLogin}>
            <input placeholder="e-mail"
            type="email"
            name="email"
            value={body.email}
            onChange={handleForm}
            />
            <input placeholder="senha" 
            type="password"
            name="password"
            value={body.password}
            onChange={handleForm}
            />
            
            <input placeholder="Nome"
            type="text"
            name="name"
            value={body.name}
            onChange={handleForm}
            />
            <input placeholder="Foto"
            type="url"
            name="image"
            value={body.image}
            onChange={handleForm}
            />
            <BotaoLogin><h1>Cadastrar</h1></BotaoLogin>
          


        </ContainerLogin>
        <Link to = "/"> <h1>Já tem uma conta? Faça login!</h1></Link>
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
h1{
    font-size: 13.976px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    text-decoration-line: underline;
}
`
const ContainerLogin = styled.form`
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
