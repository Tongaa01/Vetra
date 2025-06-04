import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./Tips.module.css";

export const Tips = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.tipsContainer}>
                <button onClick={() => navigate('/')} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Tips de Cuidado</h1>

                    <div className={style.tipsSection}>
                        <h2>Cómo lavar tu ropa correctamente</h2>
                        <ul>
                            <li><strong>Separa por colores:</strong> Blancos, claros y oscuros por separado</li>
                            <li><strong>Temperatura ideal:</strong> Usa agua fría o máximo 30°C para preservar colores</li>
                            <li><strong>Detergente adecuado:</strong> Usa líquidos suaves para prendas delicadas</li>
                            <li><strong>Voltea la ropa:</strong> Lava las prendas del revés para proteger estampados</li>
                            <li><strong>Cierres y broches:</strong> Siempre ciérrelos antes de lavar</li>
                        </ul>

                        <h2>Secado inteligente</h2>
                        <ul>
                            <li><strong>Secado natural:</strong> Prefiere el secado al aire libre en sombra</li>
                            <li><strong>No sobrecargues:</strong> Deja espacio entre prendas en el tendedero</li>
                            <li><strong>Forma correcta:</strong> Cuelga camisetas desde el bajo, no los hombros</li>
                            <li><strong>Secadora:</strong> Usa sólo en prendas que lo permitan (revisa etiquetas)</li>
                        </ul>

                        <h2>Planchado y almacenamiento</h2>
                        <ul>
                            <li><strong>Temperatura:</strong> Ajusta la plancha según el tipo de tejido</li>
                            <li><strong>Protector térmico:</strong> Usa una tela entre la plancha y la prenda</li>
                            <li><strong>No guardes húmedo:</strong> Asegura que esté completamente seco</li>
                            <li><strong>Almacenaje:</strong> Guarda prendas de temporada en bolsas de tela</li>
                        </ul>

                        <h2>Cuidado de calzado</h2>
                        <ul>
                            <li><strong>Limpieza regular:</strong> Usa cepillo suave para eliminar polvo</li>
                            <li><strong>Protección:</strong> Aplica impermeabilizante cada 2-3 meses</li>
                            <li><strong>Forma de secar:</strong> Rellena con papel periódico si se mojan</li>
                            <li><strong>Alternar uso:</strong> No uses el mismo par dos días seguidos</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};