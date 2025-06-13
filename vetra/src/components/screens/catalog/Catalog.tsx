import { useEffect } from 'react'
import { useUserStore } from '../../../store/userStore'
import { Filter } from '../../ui/Filter/FIlter'
import { Footer } from '../../ui/Footer/Footer'
import { Header } from '../../ui/Header/Header'
import { ProductList } from '../../ui/ProductList/ProductList'
import style from "./Catalog.module.css"
import { useNavigate } from 'react-router-dom'
import { tokenIsExpired } from '../../../services/jwtService'
import { refreshToken } from '../../../services/tokenService'
import type { IUser } from '../../../types/IUser'
import { getAllUsers } from '../../../http/userRequest'

export const Catalog = () => {
    const navigate = useNavigate()

    const setActiveUser=useUserStore((state)=>state.setActiveUser)
    
    const refreshUser=async()=>{
        const token=localStorage.getItem('token')
        if(token){
            if(tokenIsExpired(token)){
                refreshToken()
            }
            const userId=localStorage.getItem('userId')
            const users: IUser[] = await getAllUsers();
            const user = users.find(user => user.id?.toString() === userId);
            setActiveUser(user!)
        }
    }
    useEffect(()=>{
        refreshUser()
    },[])
    

    return (
        <div>
            <Header />
            <div className={style.catalogOrganizer}>
                <div style={{ width: "20vw", paddingLeft: "0.5rem" }}>
                    <Filter/>
                </div>
                <div style={{ width: "80vw" }}>
                    <ProductList />
                </div>
            </div>
            <Footer />
        </div>
    )
}
