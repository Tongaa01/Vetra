import { useEffect, useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { authRequest } from "../../../http/auth/authRequest"
import { tokenIsExpired } from "../../../services/jwtService"
import type { ILoginBody } from "../../../types/ILoginBody"
import { Button } from "../../ui/Button/Button"
import { Footer } from "../../ui/Footer/Footer"
import styles from "./Login.module.css"



const initialValues = {
    email: "",
    password: ""
}
export const Login = () => {
    const [logInInfo, setLogInInfo] = useState<ILoginBody>(initialValues)
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setLogInInfo((prev) => ({ ...prev, [`${name}`]: value }))
    }
    const navigate = useNavigate()
    const handleLogin = async () => {
        const token = await authRequest(logInInfo)
        if (token) {
            localStorage.setItem('token', token)
            navigate("/")
            return
        }
        setErrorMessage("Contraseña o Email invalidos")
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token && !tokenIsExpired(token)) {
            navigate("/")
        } else {
            localStorage.clear()
        }
    }, [])



    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="https://res.cloudinary.com/danzaburou/image/upload/v1749489285/vetra_banner_wflubd.png" />
                </div>
                <div className={styles.logInComponent}>
                    <div className={styles.logInComponent_content}>
                        {errorMessage !== "" ? <div className={styles.errorMessage}>{errorMessage}</div> : <div></div>}
                        <div className={styles.logInComponent_content_inputs}>
                            <div className={styles.inputComponent}>
                                <p>Email</p>
                                <input placeholder="example@gmail.com" className={styles.inpuntStyles} type="text" name="email" onChange={handleChangeInputs} />
                            </div>
                            <div className={styles.inputComponent}>
                                <p>Contraseña</p>
                                <input placeholder="examplepassword" className={styles.inpuntStyles} type="password" name="password" onChange={handleChangeInputs} />
                            </div>
                        </div>
                        <div className={styles.logInComponent_content_button}>
                            <Button text="Iniciar Sesion" action={handleLogin} styleSet={true} />
                        </div>

                    </div>
                    <div onClick={() => {
                        navigate("/signin")
                    }}>
                        <p className={styles.navText}>No tengo cuenta</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
