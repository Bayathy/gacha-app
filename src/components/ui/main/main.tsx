import { Box, Button, Divider, Group, Stack, Text } from '@mantine/core'

export function Main() {
  return (
    <main className={'m-auto flex h-full w-full max-w-2xl items-center justify-center'}>
      <Stack justify={'stretch'} className={'w-full'}>
        <Box className={'items-center justify-center rounded-md p-8 shadow-md'}>
          <Text className={'line-clamp-3 text-3xl'}>Product</Text>
          <Divider py={'md'} />
          <Text className={'text-2xl'}>番号: 1I01</Text>
        </Box>
        <Group grow spacing={'md'}>
          <Button>抽選する</Button>
          <Button>次へ</Button>
        </Group>
      </Stack>
    </main>
  )
}
