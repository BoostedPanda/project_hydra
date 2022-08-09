import React, {useState} from 'react'
import {  } from 'react-router-dom';
import PropTypes from "prop-types"
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Button,
    Title,
  } from '@mantine/core';


  

const useStyles = createStyles((theme) => ({
    wrapper: {
      backgroundPositionX: 200,
      backgroundSize: 'cover',
      backgroundImage:
        'url(https://cdn.discordapp.com/attachments/452892977656758275/974376638789869608/hydragang.png)',
    },
  
    form: {
      borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
      minHeight: "100vh",
      maxWidth: 450,
      paddingTop: 80,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
  
  }));

async function loginUser(credentials) {

    const response = await fetch("http://localhost:5000/api/auth", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'authorization': 'wah'
      },
      body: JSON.stringify(credentials)
    })

      if(!response.ok){
        alert('Wrong password!')
      }

      return response.json()



    // return     fetch("http://localhost:5000/api/auth", {
    //     method: "POST",
    //     headers: new Headers({
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer my-token'
    //     }),
    //     body: JSON.stringify(credentials)
    //   }).then(resp => {
    //     if(!resp.ok){
    //       alert('Wrong password!')
    //     }
    //     return resp.json()
    //   })

    }

    const saveToken = (token) => {
      localStorage.setItem('authorization', JSON.stringify(token))
    }


const Login = ({setToken}) => {


    const { classes } = useStyles();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await loginUser({
            username,
            password
        })

        const token = `Bearer ${user.token}`


        // const headerToken = `Bearer ${user.token}`

        setToken(token)
        saveToken(token)

    }

  return (
    <form onSubmit={handleSubmit} className={classes.wrapper}>
    <Paper className={classes.form} radius={0} p={30} >
      <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
        Hydra
      </Title>

      <TextInput label="Username" placeholder="Your username" size="md" onChange={(e) => setUsername(e.target.value)} />
      <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={(e) => setPassword(e.target.value)} />
      <Button fullWidth mt="xl" size="md" type='submit'>
        Login
      </Button>


    </Paper>
  </form>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login