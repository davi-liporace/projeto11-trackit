import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"


export default function Historico(){
    return(<><ContainerPagina><Header></Header>
    <Corpo><h1>Histórico</h1>
    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
    </Corpo>
    <Footer></Footer>
    
    </ContainerPagina></>    
    
    )
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

color: #666666;
}
`