import styles from "./Singin.module.css"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../ui/Button/Button"
import { Footer } from "../../ui/Footer/Footer"
import type { IRegisterBody } from "../../../types/IRegisterBody"



const initialValues = {
  name:"",
  email: "",
  password: "",
  confirmPassword:""
}
export const SingIn = () => {
  const [logInInfo, setLogInInfo] = useState<IRegisterBody>(initialValues)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setLogInInfo((prev) => ({ ...prev, [`${name}`]: value }))
  }
  const navigate = useNavigate()
  const handleRegister = async () => {

  }





  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="public\vetra_banner.png" />
        </div>
        <div className={styles.logInComponent}>
          <div className={styles.logInComponent_content}>
            {errorMessage !== "" ? <div className={styles.errorMessage}>{errorMessage}</div> : <div></div>}
            <div className={styles.logInComponent_content_inputs}>
              <div className={styles.inputComponent}>
                <p>Nombre</p>
                <input placeholder="example@gmail.com" className={styles.inpuntStyles} type="text" name="name" onChange={handleChangeInputs} />
              </div>
              <div className={styles.inputComponent}>
                <p>Email</p>
                <input placeholder="example@gmail.com" className={styles.inpuntStyles} type="text" name="email" onChange={handleChangeInputs} />
              </div>
              <div className={styles.inputComponent}>
                <p>Contraseña</p>
                <input placeholder="examplepassword" className={styles.inpuntStyles} type="password" name="password" onChange={handleChangeInputs} />
              </div>
              <div className={styles.inputComponent}>
                <p>Confirmar Contraseña</p>
                <input placeholder="examplepassword" className={styles.inpuntStyles} type="password" name="confirmPassword" onChange={handleChangeInputs} />
              </div>
            </div>
            <div className={styles.logInComponent_content_button}>
              <Button text="Crear Cuenta" action={handleRegister} styleSet={true} />
            </div>

          </div>
          <div onClick={()=>{
            navigate("/login")
          }}>
            <p className={styles.navText}>Ya tengo cuenta</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
