import { Group, Header as MantineHeader, Burger, Title } from '@mantine/core'

type HeaderProperties = {
  opened: boolean
  toggle: () => void
}

export function Header({ opened, toggle }: HeaderProperties) {
  return (
    <MantineHeader height={64} className={'flex justify-between px-4 shadow-md'}>
      <Group>
        <Title className={'text-2xl'}>同門会わくわく抽選会2023</Title>
      </Group>
      <Group>
        <Burger opened={opened} onClick={toggle} />
      </Group>
    </MantineHeader>
  )
}
