import { Text, Divider, Drawer as MantineDrawer } from '@mantine/core'

import { DrawerForm } from '@/components/ui/drawer/drawer-form'

type DrawerProperties = {
  opened: boolean
  toggle: () => void
}

export function Drawer({ opened, toggle }: DrawerProperties) {
  return (
    <MantineDrawer position={'right'} opened={opened} onClose={toggle}>
      <Text ta={'center'} fz={'lg'}>
        Menu
      </Text>
      <Divider my={'sm'} />
      <DrawerForm />
    </MantineDrawer>
  )
}
