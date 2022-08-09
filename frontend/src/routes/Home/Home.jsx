import React from 'react';
import { AppShell, } from '@mantine/core';

import NavbarEz from "../../components/NavbarEz"
import MemberTable from "../../components/MemberTable/MemberTable"
import { Outlet } from 'react-router-dom';


const Home = ({ colorScheme, setColorScheme, token }) => {


  return (
    <>
      <AppShell
        navbar={
          <NavbarEz colorScheme={colorScheme} setColorScheme={setColorScheme} />
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Outlet/>
        {/* <MemberTable token={token}/> */}
      </AppShell>
    </>
  )
}

export default Home