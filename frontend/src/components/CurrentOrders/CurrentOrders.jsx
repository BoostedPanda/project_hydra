import { Table, Container, Pagination, Space, Center, Title, Collapse, Text, Box, Drawer } from '@mantine/core';
import React,{ useState, useEffect} from 'react'
import Order from '../Order/Order';

const MAX_PER_PAGE = 10

const paginate = (arr, pSize, pNum) => {
    return arr.slice((pNum - 1) * pSize, pNum * pSize)
}



const CurrentOrders = () => {

    const [activePage, setPage] = useState(1)
    const [members, setMembers] = useState([])
    const [opened, setOpen] = useState(false)

    useEffect(() => {

      const authTokenString = localStorage.getItem('authorization')
      const authToken = JSON.parse(authTokenString)


        fetch('http://localhost:5000/api/members',{
          method: 'GET',
          headers: {
            'authorization': authToken
          }
        })
            .then(x => x.json())
            .then(member => setMembers(member))
    }, [])




  return (
      <Container size="md" >
          <Space h={50} />
    <Table striped highlightOnHover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Nickname</th>
        <th>Rank</th>

      </tr>
    </thead>
    <tbody>
          <Order opened={opened} setOpen={setOpen}/>
    </tbody>
  </Table>
  <Space h={10}/>
  <Center>
  <Pagination total={Math.round(members.length / MAX_PER_PAGE)} page={activePage} onChange={setPage}/>
  </Center>
  </Container>
  )
}

export default CurrentOrders