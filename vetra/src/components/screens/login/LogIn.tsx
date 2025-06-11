import { useEffect, useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { authRequest } from "../../../http/auth/authRequest"
import { getAllUsers } from "../../../http/userRequest"
import { tokenIsExpired } from "../../../services/jwtService"
import { useUserStore } from "../../../store/userStore"
import type { ILoginBody } from "../../../types/ILoginBody"
import type { IUser, ROLE } from "../../../types/IUser"
import { Button } from "../../ui/Button/Button"
import styles from "./Login.module.css"

const initialValues = {
    email: "",
    password: ""
}

export const Login = () => {
    const setActiveUser = useUserStore((state) => state.setActiveUser)
    const deleteUser = useUserStore((state) => state.deleteUser)

    const [logInInfo, setLogInInfo] = useState<ILoginBody>(initialValues)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const navigate = useNavigate()

    const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLogInInfo(prev => ({ ...prev, [name]: value }))
    }

    const handleLogin = async () => {
        if (!logInInfo.email || !logInInfo.password) {
            setErrorMessage("Por favor completá todos los campos")
            return
        }

        const token = await authRequest(logInInfo)

        if (token) {
            localStorage.setItem("token", token)
            setLoggedUser(logInInfo.email)

            const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Sesión iniciada",
        });

            navigate("/")
        } else {
            setErrorMessage("Email o contraseña incorrectos")
        }
    }
    const setLoggedUser = async (email: string): Promise<string|ROLE> => {
        const users: IUser[] = await getAllUsers();
        const user = users.find(user => user.email === email);

        if (user) {
            setActiveUser(user);
            return user.rol;
        }

        return "NOT WORKING";
    };

    useEffect(() => {
        const token = localStorage.getItem("token")
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
                    <img
                        className={styles.image}
                        src="https://res.cloudinary.com/danzaburou/image/upload/v1749489285/vetra_banner_wflubd.png"
                        alt="Vetra"
                    />
                </div>
                <div className={styles.logInComponent}>
                    <div className={styles.logInComponent_content}>
                        <div className={styles.errorMessage}>
                            {errorMessage || " "} {/* Espacio fijo para no mover el layout */}
                        </div>

                        <div className={styles.logInComponent_content_inputs}>
                            <div className={styles.inputComponent}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    className={styles.inpuntStyles}
                                    type="text"
                                    onChange={handleChangeInputs}
                                />
                            </div>

                            <div className={styles.inputComponent}>
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    className={styles.inpuntStyles}
                                    type="password"
                                    onChange={handleChangeInputs}
                                />
                            </div>
                        </div>

                        <div className={styles.logInComponent_content_button}>
                            <Button text="Iniciar sesión" action={handleLogin} styleSet={true} />
                        </div>
                    </div>

                    <div onClick={() => navigate("/signin")}>
                        <p className={styles.navText}>No tengo cuenta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
