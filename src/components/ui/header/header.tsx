import { Group, Header as MantineHeader, Burger, Text } from '@mantine/core'

type HeaderProperties = {
  opened: boolean
  toggle: () => void
}

export function Header({ opened, toggle }: HeaderProperties) {
  return (
    <MantineHeader height={64} className={'flex justify-between bg-green-300 px-4'}>
      <Group>
        <Text className={'text-2xl'}>同門会わくわく抽選会2023</Text>
      </Group>
      <Group>
        <Burger opened={opened} onClick={toggle} />
      </Group>
    </MantineHeader>
  )
}
