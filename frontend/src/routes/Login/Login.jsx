import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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

const Login = () => {

  const navigate = useNavigate()
  const { classes } = useStyles();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password
    }

    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(resp => {
      if (resp.ok) {
        navigate("/home");
      } else {
        alert("Wrong password!");
      };
    })
  }


  return (

    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Hydra
        </Title>

        <TextInput label="Username" placeholder="Your username" size="md" onChange={(e) => setUsername(e.target.value)} />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={(e) => setPassword(e.target.value)} />
        <Button fullWidth mt="xl" size="md" onClick={handleSubmit}>
          Login
        </Button>


      </Paper>
    </div>


  );
}

export default Login

