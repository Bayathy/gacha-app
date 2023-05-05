import { Drawer as MantineDrawer, Text } from '@mantine/core'

type DrawerProperties = {
  opened: boolean
  toggle: () => void
}

export function Drawer({ opened, toggle }: DrawerProperties) {
  return (
    <MantineDrawer position={'right'} opened={opened} onClose={toggle}>
      <Text>Test</Text>
    </MantineDrawer>
  )
}
