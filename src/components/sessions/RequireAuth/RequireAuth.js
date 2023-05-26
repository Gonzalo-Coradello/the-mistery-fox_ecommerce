import { useLocation, Navigate, Outlet } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useSessionContext } from "../../../context/UserContext";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const { user, loading, isLogged } = useSessionContext()

    if(loading) return <Loader />

    console.log({ user, loading, isLogged })
    
    const content = (
        isLogged && allowedRoles.includes(user.role)
            ? <Outlet />
            : <Navigate to="/sessions/login" state={{ from: location }} replace />
    )

    return content
}

export default RequireAuth