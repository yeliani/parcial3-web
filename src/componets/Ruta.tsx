import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";
import { setUserType } from "../redux/slices/UsuarioSlice";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const authUser = useSelector((state: RootState) => state.user,setUserType)
  console.log("Rol Atuak::",setUserType);

  if (userType!="manager") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;