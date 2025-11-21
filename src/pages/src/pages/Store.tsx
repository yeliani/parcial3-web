import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import{ userSlice } from "./slices/UsuarioSlice";
import { toDoSlice } from "./slices/ProductsSlice";
import usefetch from '../hooks/Usefetch';

function Store() {
  const [search, setSearch] = useState('');  
  const {users,error,loading} = useUsers();



  if(error) return <p>Hay un error: {error}</p>
  if(loading) return <p>Cargando.....</p>

  return (
    <>
    {userType === "manager" && /(<button type ="button"
        onclick={()=> Navigate("/create")}> crear</button>
    )}
    </>
  )
}

export default Store