import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cambios } from "../components/screens/footerPages/ayuda/Cambio/Cambios"
import { ComoElegirTuTalle } from "../components/screens/footerPages/ayuda/ComoElegirTuTalle/ComoElegirTuTalle"
import { DefensaDelConsumidor } from "../components/screens/footerPages/ayuda/DefensaDelConsumidor/DefensaDelConsumidor"
import { Devoluciones } from "../components/screens/footerPages/ayuda/Devoluciones/Devoluciones"
import { Envios } from "../components/screens/footerPages/ayuda/Envios/Envios"
import { OpcionesPago } from "../components/screens/footerPages/ayuda/OpcionesPago/OpcionesPago"
import { Tips } from "../components/screens/footerPages/ayuda/Tips/Tips"
import { Noticias } from "../components/screens/footerPages/vetra/Noticias/Noticias"
import { Proposito } from "../components/screens/footerPages/vetra/Proposito/Proposito"
import { TrabajaConNosotros } from "../components/screens/footerPages/vetra/TrabajaConNosotros/TrabajaConNosotros"
import { Landing } from "../components/screens/landing/Landing"
import { LogIn } from "../components/screens/login/LogIn"
import { SignIn } from "../components/screens/singin/SignIn"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                // Landing, login y signin
                <Route path="/" element={
                    <Landing />
                } />
                <Route path="/login" element={
                    <LogIn />
                } />
                <Route path="/signin" element={
                    <SignIn />
                } />

                // Footer: Ayuda
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
                <Route path="/ayuda/como-elegir-tu-talle" element={
                    <ComoElegirTuTalle />
                } />
                <Route path="/ayuda/defensa-del-consumidor" element={
                    <DefensaDelConsumidor />
                } />
                <Route path="/ayuda/tips" element={
                    <Tips />
                } />

                // Footer: Vetra
                <Route path="/vetra/noticias" element={
                    <Noticias />
                } />
                <Route path="/vetra/proposito" element={
                    <Proposito />
                } />
                <Route path="/vetra/trabaja-con-nosotros" element={
                    <TrabajaConNosotros />
                } />
            </Routes>
        </BrowserRouter>
    )
}
