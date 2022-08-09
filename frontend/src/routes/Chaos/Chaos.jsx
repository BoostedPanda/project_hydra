import { Center, Container, Grid, Space, Title } from '@mantine/core'
import React from 'react'
import { ButtonMenu } from '../../components/ButtonMenu/ButtonMenu'
import CurrentOrders from '../../components/CurrentOrders/CurrentOrders'

const Chaos = () => {
  return (
    <Container fluid>
        <Grid justify="space-between">
            <Grid.Col span={4} offset={5}><Title order={1}>Chaos</Title></Grid.Col>
            <Grid.Col span={2}><ButtonMenu/></Grid.Col>

        </Grid>
        

        <Space h={40}/>
      <Title order={2}>Current Orders</Title>
      <CurrentOrders/>
    </Container>
  )
}

export default Chaos