import React, { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocalStorageValue } from '@mantine/hooks';
import { MantineProvider } from '@mantine/core';

import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";


import Home from './routes/Home/Home';
import MemberTable from "./components/MemberTable/MemberTable";
import ProductTable from "./components/ProductTable/ProductTable";
import Chaos from "./routes/Chaos/Chaos";




function App() {

  const [token, setToken] = useState();
  const localToken = localStorage.getItem('authorization')

  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });
  




  if(!localToken) {
    return <Login setToken={setToken}/>
  }



  return (
    <>
      <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles>
      <Routes>
         <Route path="/" element={<Home colorScheme={colorScheme} setColorScheme={setColorScheme} />}>
         <Route index element={ <MemberTable token={token} />} />
         <Route path='chaos' element={ <Chaos/> } />


         </Route>
    
          

            </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
