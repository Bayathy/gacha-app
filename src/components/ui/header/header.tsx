import { Group, Header as MantineHeader, Burger, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function Header() {
  const [open, { toggle }] = useDisclosure()
  return (
    <MantineHeader height={64} className={'flex justify-between bg-green-300 px-4'}>
      <Group>
        <Text className={'text-2xl'}>Do-Mon-Kai</Text>
      </Group>
      <Group>
        <Burger opened={open} onClick={toggle} />
      </Group>
    </MantineHeader>
  )
}