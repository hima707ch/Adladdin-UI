// components/GoogleLoginButton.js
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'; 
import { useEffect } from 'react';

export default function GoogleLoginButton({setIsAuthenticated}) {
  const dispatch = useDispatch();

  const handleLoginSuccess = async (credentialResponse) => {

    const token = credentialResponse?.credential;
    // const decoded = jwtDecode(token);
    // console.log(decoded);

    try{
      const resp = await axios.post(`/api/auth/google`, {token}, {withCredentials: true})
      const data = resp.data;
  
      console.log(data)
      dispatch(setUser(data))
    }
    catch(err){
    }
  };

  useEffect( ()=>{
    handleLoginSuccess()
  }, [])

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => console.log('Login Failed')}
    />
  );
}
