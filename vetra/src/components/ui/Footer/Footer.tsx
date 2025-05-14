import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerSection}>
                    <h3 className={style.footerTitle}>Ayuda</h3>
                    <table className={style.footerTable}>
                        <tbody>
                            <tr>
                                <td>Envío y entregas</td>
                                <td>Propósito</td>
                                <td>Encontrá tu calzado</td>
                            </tr>
                            <tr>
                                <td>Devoluciones</td>
                                <td>Noticias</td>
                                <td>¿Cómo elegir tu talle?</td>
                            </tr>
                            <tr>
                                <td>Cambios</td>
                                <td></td>
                                <td>Tips</td>
                            </tr>
                            <tr>
                                <td>Opciones de pago</td>
                                <td></td>
                                <td>Promociones</td>
                            </tr>
                            <tr>
                                <td>Defensa al consumidor</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Botón de arrepentimiento</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={style.newsletterSection}>
                    <h3 className={style.newsletterTitle}>Novedades de Vetra</h3>
                    <div className={style.newsletterForm}>
                        <input type="email" placeholder="Tu email" />
                        <button>Suscribirse</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};