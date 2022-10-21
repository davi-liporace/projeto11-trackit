import { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "./Context";

export default function Header() {
    const { user, setUser } = useContext(LoginContext)

    return (
        <Header2>
            <h1>Tracker</h1>
            <img src={user.image} />
        </Header2>

    )
}

const Header2 = styled.div`
width: 100%;
height: 70px;
display: flex;
background-color: #126BA5;
align-items: center;
justify-content: space-around;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: absolute;
top: 0px;
left: 0px;
h1{
    font-family: 'Playball';
    font-size: 39px;
    color: white;
}
img{
    width: 51px;
height: 51px;
border-radius: 98.5px;
}


`