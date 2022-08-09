import { Table, Container, Pagination, Space, Center, Title } from '@mantine/core';
import React,{ useState, useEffect} from 'react'

const MAX_PER_PAGE = 10

const paginate = (arr, pSize, pNum) => {
    return arr.slice((pNum - 1) * pSize, pNum * pSize)
}



const MemberTable = () => {

    const [activePage, setPage] = useState(1)
    const [members, setMembers] = useState([])

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
        <Center>
        <Title order={1}>Members</Title>
        </Center>
          <Space h={50} />
    <Table striped highlightOnHover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Nickname</th>
        <th>Rank</th>

      </tr>
    </thead>
    <tbody>{paginate(members, MAX_PER_PAGE, activePage).map((member) => (
                <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.nickname}</td>
                <td>{member.rank}</td>
              </tr>
    ))}</tbody>
  </Table>
  <Space h={10}/>
  <Center>
  <Pagination total={Math.round(members.length / MAX_PER_PAGE)} page={activePage} onChange={setPage}/>
  </Center>
  </Container>
  )
}

export default MemberTable