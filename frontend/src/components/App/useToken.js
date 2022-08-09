import { useState } from 'react';

const useToken = () => {
  // const getToken = () => {
  //   const tokenString = localStorage.getItem('authorization');
  //   const userToken = JSON.parse(tokenString);
  //   console.log(userToken)
  //   return userToken?.token
  // };
  
  // const [token, setToken] = useState(getToken());
  // console.log()

  // const saveToken = userToken => {
  //   localStorage.setItem('authorization', JSON.stringify(userToken));
  //   setToken(userToken.token);
  // };

  // return {
  //   setToken: saveToken,
  //   token
  // }
}

export default useToken