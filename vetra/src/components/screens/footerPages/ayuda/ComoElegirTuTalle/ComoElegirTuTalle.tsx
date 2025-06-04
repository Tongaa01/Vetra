import { useNavigate } from "react-router-dom";
import { Footer } from "../../../../ui/Footer/Footer";
import { Header } from "../../../../ui/Header/Header";
import style from "./ComoElegirTuTalle.module.css";

export const ComoElegirTuTalle = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={style.sizeGuideContainer}>
                <button onClick={() => navigate('/')} className={style.backButton}>
                    ← Volver al Inicio
                </button>

                <div className={style.content}>
                    <h1>Cómo elegir tu talle</h1>
                    <p>
                        En Vetra queremos que encuentres el talle perfecto. Sigue estas recomendaciones:
                    </p>

                    <div className={style.sizeGuide}>
                        {/* Sección de ropa */}
                        <h2>Guía de talles para ropa</h2>


                        <h3>1. Mide tu cuerpo</h3>
                        <ul>
                            <li><strong>Pecho:</strong> Mide la circunferencia en la parte más ancha</li>
                            <li><strong>Cintura:</strong> Mide donde normalmente usas el pantalón</li>
                            <li><strong>Cadera:</strong> Mide alrededor de la parte más prominente</li>
                        </ul>

                        <h3>2. Compara con nuestra tabla</h3>
                        <div className={style.sizeTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Talle</th>
                                        <th>Pecho (cm)</th>
                                        <th>Cintura (cm)</th>
                                        <th>Cadera (cm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>S</td>
                                        <td>86-91</td>
                                        <td>71-76</td>
                                        <td>91-96</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>91-96</td>
                                        <td>76-81</td>
                                        <td>96-101</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>96-101</td>
                                        <td>81-86</td>
                                        <td>101-106</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>101-106</td>
                                        <td>86-91</td>
                                        <td>106-111</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Sección de calzado */}
                        <h2>Guía de talles para calzado</h2>
                        <p>
                            Para calzado utilizamos el sistema de talles argentino:
                        </p>

                        <div className={style.sizeTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Talle AR</th>
                                        <th>Largo del pie (cm)</th>
                                        <th>Talle EU</th>
                                        <th>Talle US</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>36</td>
                                        <td>23-23.5</td>
                                        <td>36</td>
                                        <td>5.5</td>
                                    </tr>
                                    <tr>
                                        <td>37</td>
                                        <td>24</td>
                                        <td>37</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>38</td>
                                        <td>24.5</td>
                                        <td>38</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>39</td>
                                        <td>25</td>
                                        <td>39</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>25.5</td>
                                        <td>40</td>
                                        <td>8.5</td>
                                    </tr>
                                    <tr>
                                        <td>41</td>
                                        <td>26</td>
                                        <td>41</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>42</td>
                                        <td>26.5</td>
                                        <td>42</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>43</td>
                                        <td>27</td>
                                        <td>43</td>
                                        <td>10.5</td>
                                    </tr>
                                    <tr>
                                        <td>44</td>
                                        <td>27.5</td>
                                        <td>44</td>
                                        <td>11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>¿Cómo medir tu pie?</h3>
                        <ul>
                            <li>Párate sobre una hoja de papel con el talón contra la pared</li>
                            <li>Marca el punto más largo de tu pie (generalmente el dedo gordo)</li>
                            <li>Mide en centímetros desde la pared hasta la marca</li>
                            <li>Repite con ambos pies y usa la medida más grande</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};