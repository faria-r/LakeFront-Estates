import { useContext } from "react";
import useAdmin from "../../Hooks/useAdmin";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";


const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const {user,loading} = useContext(AuthContext);
const location = useLocation();
if(loading || isAdminLoading){
    return <Loading></Loading>
}
if(user && isAdmin){
    return children;
}
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;