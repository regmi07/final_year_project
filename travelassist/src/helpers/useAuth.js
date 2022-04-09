import authHeader from "../services/auth/auth.header"

const useAuth = () => {
    return Object.keys(authHeader()).length
}

export default useAuth;