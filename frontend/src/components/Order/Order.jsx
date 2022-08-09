import React from 'react'
import { Drawer, Text } from '@mantine/core'

const Order = ({opened ,setOpen}) => {
  return (
    <>
        <tr onClick={() => setOpen(true)}>
        <td>member.name</td>
        <td>member.nickname</td>
        <td>member.rank</td>
      </tr>
      <Drawer opened={opened} onClose={() => setOpen(false)} padding="xl" size="xl">
      <Text>helloo</Text>
      </Drawer>
      </>
  )
}

export default Order