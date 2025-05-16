import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cambios } from "../components/screens/footerPages/ayuda/Cambio/Cambios"
import { Devoluciones } from "../components/screens/footerPages/ayuda/Devoluciones/Devoluciones"
import { Envios } from "../components/screens/footerPages/ayuda/Envios/Envios"
import { OpcionesPago } from "../components/screens/footerPages/ayuda/OpcionesPago/OpcionesPago"
import { Landing } from "../components/screens/landing/Landing"
import { LogIn } from "../components/screens/login/LogIn"
import { SignIn } from "../components/screens/singin/SignIn"

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
                    <SignIn />
                } />
                <Route path="/ayuda/envios-y-entregas" element={
                    <Envios />
                } />
                <Route path="/ayuda/devoluciones" element={
                    <Devoluciones />
                } />
                <Route path="/ayuda/cambios" element={
                    <Cambios />
                } />
                <Route path="/ayuda/opciones-de-pago" element={
                    <OpcionesPago />
                } />
            </Routes>
        </BrowserRouter>
    )
}
