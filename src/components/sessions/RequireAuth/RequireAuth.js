import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../Loader/Loader";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const { loading, role } = useAuth()

    if(role === "pending") return <Loader />

    const content = (
        allowedRoles.includes(role)
            ? <Outlet />
            : <Navigate to="/sessions/login" state={{ from: location }} replace />
    )

    if(!loading) return content
}

export default RequireAuth