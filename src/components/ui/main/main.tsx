import { Box, Button, Group, Stack, Text } from '@mantine/core'

export function Main() {
  return (
    <main className={'m-auto flex h-full w-full max-w-2xl items-center justify-center'}>
      <Stack justify={'stretch'} className={'h-full w-full'}>
        <Box
          className={'flex h-full flex-col items-center justify-around rounded-md p-8 shadow-md'}
        >
          <Stack justify={'stretch'} className={'w-full'}>
            <Box className={'flex h-32 items-center justify-center'}>
              <Text className={'line-clamp-3 break-words text-3xl'}>Product</Text>
            </Box>
            <Text className={'m-auto text-4xl'}>1I01</Text>
          </Stack>
          <Group grow spacing={'md'} className={'w-full'}>
            <Button>抽選する</Button>
            <Button>次へ</Button>
          </Group>
        </Box>
      </Stack>
    </main>
  )
}
