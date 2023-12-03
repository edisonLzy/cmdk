
import React from 'react';
import { Command, useCommandState } from 'cmdk'

const CommandMenu = () => {
  const [pages, setPages] = React.useState([])

  return  <Command defaultValue={'Change theme to dark'}>
  <Command.Input />
  <Command.List>
    <Command.Item>Change theme…</Command.Item>
    <Command.Item forceMount>Change theme to dark</Command.Item>
    <Command.Item>Change theme to light</Command.Item>
  </Command.List>
</Command>
}

export default CommandMenu
