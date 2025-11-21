import { useState, useEffect } from "react";

const usefetch = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getUsers = async () => {
      try {
        const datos = await fetch('https://fakestoreapi.com/products?limit=20').then((res) => res.json());
        setUsers(datos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  },[])


export default usefetch;