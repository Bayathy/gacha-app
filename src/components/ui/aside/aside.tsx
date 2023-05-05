import { MediaQuery, Text, Aside as MantineAside } from '@mantine/core'
export function Aside() {
  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <MantineAside p='md' hiddenBreakpoint='sm' width={{ sm: 300 }}>
        <Text>Application sidebar</Text>
      </MantineAside>
    </MediaQuery>
  )
}
