import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Devoluciones } from "../components/screens/footerPages/ayuda/Devoluciones/Devoluciones"
import { Envios } from "../components/screens/footerPages/ayuda/Envios/Envios"
import { Landing } from "../components/screens/landing/Landing"
import { LogIn } from "../components/screens/login/LogIn"
import { SingIn } from "../components/screens/singin/SingIn"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Landing />
                } />
                <Route path="/login" element={
                    <LogIn />
                } />
                <Route path="/singin" element={
                    <SingIn />
                } />
                <Route path="/ayuda" element={
                    <SingIn />
                } />
                <Route path="/ayuda/envios-y-entregas" element={
                    <Envios />
                } />
                <Route path="/ayuda/devoluciones" element={
                    <Devoluciones />
                } />
            </Routes>
        </BrowserRouter>
    )
}
