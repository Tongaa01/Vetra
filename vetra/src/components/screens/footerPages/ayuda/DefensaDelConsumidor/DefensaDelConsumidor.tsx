import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./DefensaDelConsumidor.module.css";

export const DefensaDelConsumidor = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.consumerContainer}>
                <button onClick={() => navigate('/')} className={style.backButton}>
                    ← Inicio
                </button>

                <div className={style.content}>
                    <h1>Defensa del Consumidor</h1>

                    <div className={style.consumerText}>
                        <p>
                            De acuerdo con la Ley 24.240 de Defensa del Consumidor, los clientes de Vetra
                            tienen derecho a recibir información veraz, protección contra cláusulas abusivas
                            y garantías legales sobre todos los productos. Para realizar reclamos o consultas,
                            puede comunicarse con la Dirección Nacional de Defensa del Consumidor a través de
                            su sitio web oficial (<a href="https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor">Defensa del consumidor</a>) o por teléfono al 0800-666-1518. En Vetra cumplimos con todas
                            las disposiciones legales vigentes en materia de protección al consumidor.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};