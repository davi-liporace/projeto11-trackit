import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./GlobalStyles"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import Historico from "./Historico"
import Hoje from "./Hoje"
import Login from "./Login"
import { useState } from "react"
import { LoginContext } from "./Context"

export default function App() {
    const [user, setUser] = useState({
        "id": "",
        "name": "",
        "image": "",
        "password": "",
        "token": ""
    })
    return (<BrowserRouter> 
    <GlobalStyles />
    <LoginContext.Provider value={{user,setUser}}>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} /></Routes>
        </LoginContext.Provider>
    </BrowserRouter>)
}