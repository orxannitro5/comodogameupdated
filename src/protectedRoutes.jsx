import { Outlet,Navigate } from "react-router-dom";
const ProtectedRoutes = ()=>{
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
export default ProtectedRoutes