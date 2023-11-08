import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
export const useLogin = () => {
  const navigate = useNavigate();
    const [error2, setError] = useState(null);
    const [isLoading2, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
  
    const login = async ( email, password) => {
      setIsLoading(true);
      setError(null);
        const data={
            email,
            password
        }
      try {
        const response = await axios.post('http://localhost:5000/users/login',data);
        const json= await response.data;
        if (response.status === 200) {
         
          if (response.data.role.toLowerCase() === 'instructor') {
            navigate('/dashboard');
          } else if (response.data.role.toLowerCase() === 'student') {
            navigate('/home');
          } else if (response.data.role.toLowerCase() === 'admin') {
            navigate('/dashboard');
          }
          localStorage.setItem('user', JSON.stringify(json));
          dispatch({ type: 'LOGIN', payload: json });
        } if(response.status!==200) {
          setError(json);   
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return { login, isLoading2, error2 };
  };
  