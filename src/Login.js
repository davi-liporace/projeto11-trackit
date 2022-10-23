import styled from "styled-components"
import logo from "./Group8.jpg"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { LoginContext } from "./Context"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function Login(){
    const {user, setUser} = useContext(LoginContext)
    const [disabled, setDisabled] = useState(false)
    const [body, setBody] = useState({email:"",password:""})
    const navigate = useNavigate()
function handleForm(e){
    setBody({...body,[e.target.name]:e.target.value})
}
function postLogin(e){
    e.preventDefault()
    setDisabled(true)
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",body)
    .then(res => setUser(res.data), navigate("/hoje"),  setDisabled(false) )
    .catch(res => alert(res.response.status), setDisabled(true))
}


    return(<ContainerPagina>
        <img src={logo}/>
        <ContainerLogin onSubmit={postLogin}>
            <input 
            placeholder="e-mail"
            name="email"
            value={body.email}
            onChange={handleForm}
            type="email"
             />
            <input placeholder="senha"
            name="password"
            value={body.password}
            onChange={handleForm}
            type="password" />
            <button disabled={disabled} type="submit" >
                <TextoBotao visible={!disabled}>Entrar</TextoBotao > 
            <ThreeDots 
            height="80"
            width="80"
            radius="9"
            color="#FFFFFF"
            visible={disabled}
            /></button>

            


        </ContainerLogin>
        <Link to ="/cadastro"> <h1>Não tem uma conta? Cadastre-se!</h1></Link>
        </ContainerPagina>)
}



const ContainerPagina = styled.div`
flex-direction: column;
display: flex;
align-items: center;
margin-top: 60px;
h1{
    font-size: 13.976px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    text-decoration-line: underline;
}

margin-left: auto;
img{
    height: 138px;
    width: 180px;
    margin-bottom: 30px;
}
`
const ContainerLogin = styled.form`
display:flex ;
flex-direction: column;
align-items: center;
button{
    width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
margin-top: 5%;
margin-bottom: 5%;
}
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

/* h1{
   display: ${props=>props.visible?"none":""};
    color: white;
    font-size: 20.976px;
    font-family: 'Lexend Deca';
} */

`
const TextoBotao = styled.h1`
    display:${props => props.visible?'':''};
    color: white;
    font-size: 20.976px;
    font-family: 'Lexend Deca';
    `
