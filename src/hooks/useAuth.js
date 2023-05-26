// import { useEffect, useState } from "react"
// import { getCurrentUser } from "../services/axios/userService"
// import { useSessionContext } from "../context/UserContext"

// const useAuth = () => {
//     const [loading, setLoading] = useState(true)
//     // const [isLogged, setIsLogged] = useState(false)
//     const [role, setRole] = useState("pending")
//     const { user, isLogged } = useSessionContext()

//     useEffect(() => {

//         try {
//             const getAuth = async () => {
//                 setLoading(true)
//                 const response = await getCurrentUser()
//                 if(response.status === "error") {
//                     setRole(null)
//                 }
//                 else {
//                     setRole(response.payload.role)
//                 }
//             }
//             getAuth()
//         } catch(error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//     }, [loading])

//     return {loading, isLogged, role}
// }

// export default useAuth
