import { useEffect, useState } from "react"
import { getCurrentUser } from "../services/axios/userService"

const useAuth = () => {
    const [loading, setLoading] = useState(true)
    const [isLogged, setIsLogged] = useState(false)
    const [role, setRole] = useState("pending")

    useEffect(() => {

        try {
            const getAuth = async () => {
                setLoading(true)
                const response = await getCurrentUser()
                if(response.status === "error") {
                    setIsLogged(false)
                    setRole(null)
                }
                else {
                    setIsLogged(true)
                    setRole(response.payload.role)
                }
            }
            getAuth()
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [loading])

    return {loading, isLogged, role}
}

export default useAuth
