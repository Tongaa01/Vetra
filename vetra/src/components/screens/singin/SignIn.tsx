import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getAllUsers } from "../../../http/userRequest"
import type { IRegisterBody } from "../../../types/IRegisterBody"
import { ROLE, type IUser } from "../../../types/IUser"
import { Button } from "../../ui/Button/Button"
import styles from "./Singin.module.css"

const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export const SingIn = () => {
    const [singInInfo, setsingInInfo] = useState<IRegisterBody>(initialValues)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const navigate = useNavigate()

    const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setsingInInfo((prev) => ({ ...prev, [name]: value }))
    }

    const handleRegister = async () => {
        if (singInInfo.password !== singInInfo.confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        const newUser: IUser = {
            nombre: singInInfo.name,
            apellido: singInInfo.surname,
            email: singInInfo.email,
            password: singInInfo.password,
            rol: ROLE[1],
            direcciones: []
        }

        const usersInDB: IUser[] = await getAllUsers()
        const emailExistente = usersInDB.some(user => user.email === newUser.email)

        if (emailExistente) {
            setErrorMessage("El email ya se encuentra registrado")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        const response = await createUser(newUser)
        if (response !== 201) {
            setErrorMessage("Ocurrió un error, intenta de nuevo")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        navigate('/login')
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="https://res.cloudinary.com/danzaburou/image/upload/v1749489285/vetra_banner_wflubd.png" alt="Banner" />
                </div>

                <div className={styles.logInComponent}>
                    <div className={styles.logInComponent_content}>
                        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
                        <div className={styles.logInComponent_content_inputs}>
                            <div className={styles.inputComponent}>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Nombre"
                                    className={styles.inpuntStyles}
                                    onChange={handleChangeInputs}
                                />
                            </div>

                            <div className={styles.inputComponent}>
                                <label htmlFor="surname">Apellido</label>
                                <input
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    placeholder="Apellido"
                                    className={styles.inpuntStyles}
                                    onChange={handleChangeInputs}
                                />
                            </div>

                            <div className={styles.inputComponent}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Correo electrónico"
                                    className={styles.inpuntStyles}
                                    onChange={handleChangeInputs}
                                />
                            </div>

                            <div className={styles.inputComponent}>
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    className={styles.inpuntStyles}
                                    onChange={handleChangeInputs}
                                />
                            </div>

                            <div className={styles.inputComponent}>
                                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Repetir contraseña"
                                    className={styles.inpuntStyles}
                                    onChange={handleChangeInputs}
                                />
                            </div>

                        </div>

                        <div className={styles.logInComponent_content_button}>
                            <Button text="Crear cuenta" action={handleRegister} styleSet={true} />
                        </div>
                    </div>

                    <div onClick={() => navigate("/login")}>
                        <p className={styles.navText}>Ya tengo cuenta</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 
