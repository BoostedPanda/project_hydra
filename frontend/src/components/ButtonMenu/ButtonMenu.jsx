import React from 'react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import { SquareCheck, Package, Users, Calendar, ChevronDown } from 'tabler-icons-react';

export function ButtonMenu() {
  const theme = useMantineTheme();
  return (
    <Menu
      control={
        <Button rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
          Create new
        </Button>
      }
      transition="pop-top-right"
      placement="end"
      size="lg"
    >
      <Menu.Item
        icon={<Package size={16} color={theme.colors.blue[6]} />}
      >
        Order
      </Menu.Item>
      <Menu.Item
        icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}
      >
        Client
      </Menu.Item>
      <Menu.Item
        icon={<Users size={16} color={theme.colors.cyan[6]} />}
      >
        Middleman
      </Menu.Item>
      <Menu.Item
        icon={<Calendar size={16} color={theme.colors.violet[6]} />}
      >
        Item
      </Menu.Item>
    </Menu>
  );
}