import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../helpers/useAuth";

const ProtectedRoute = () => {
    const isAuthnicated = useAuth()
    const location = useLocation()

    return (
        isAuthnicated 
        ? <>
            <div>
                <Outlet />
            </div>
          </>
        : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default ProtectedRoute