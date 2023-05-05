import { MediaQuery, Text, Aside as MantineAside, Divider, ScrollArea } from '@mantine/core'
export function Aside() {
  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <MantineAside p='md' hiddenBreakpoint='sm' width={{ sm: 300 }}>
        <Text ta={'center'}>履歴</Text>
        <Divider />
        <ScrollArea>
          <Text>test</Text>
          <Text>test</Text>
        </ScrollArea>
      </MantineAside>
    </MediaQuery>
  )
}
