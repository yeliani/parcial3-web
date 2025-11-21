import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { userSlice } from "../redux/slices/UsuarioSlice";

import { useState } from "react";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const counter = useSelector((state: RootState) => state.counter.counterValue);
  const name = useSelector((state: RootState) => state.auth.name);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleName = () => {
    dispatch(set(inputValue));
  };

  return (
    <>
      <h2>login</h2>
      <input
        type="radio"
        name="role"
        checked={role === "cientifico"}
        onChange={() =>
          setRole("cientifico")
        }
      />
      <button onClick={handleName}>Save name</button>
    
    </>
  );
};

export default Login;