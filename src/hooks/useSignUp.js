import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import  axios  from 'axios';
export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
  
    const signUp = async (name, email, password, role) => {
      setIsLoading(true);
      setError(null);
        const data={
            name,
            email,
            password,
            role
        }
      try {
        const response = await axios.post('http://localhost:5000/users/registre',data);
        const json= await response.data;
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(json));
          dispatch({ type: 'LOGIN', payload: json });
          console.log(response);
        } if(response.status!==200) {
            console.log(json);
          setError(json);   
        }
      } catch (error) {
        // console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return { signUp, isLoading, error };
  };
  