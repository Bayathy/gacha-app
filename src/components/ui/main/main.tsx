import { useState } from 'react'

import { Box, Button, Group, Stack, Text } from '@mantine/core'
import { useRecoilState } from 'recoil'

import { formProductListState } from '@/components/store/form-product-list-store'

export function Main() {
  const [listIndex, setListIndex] = useState<number>(0)
  const productList = useRecoilState(formProductListState)[0]

  return (
    <main className={'m-auto flex h-full w-full max-w-2xl items-center justify-center'}>
      <Stack justify={'stretch'} className={'h-full w-full'}>
        <Box
          className={'flex h-full flex-col items-center justify-around rounded-md p-8 shadow-md'}
        >
          <Stack justify={'stretch'} className={'w-full'}>
            <Box className={'flex h-32 items-center justify-center'}>
              <Text className={'line-clamp-3 break-words text-3xl'}>
                {productList.length > 0 ? productList[listIndex] : 'Please Import'}
              </Text>
            </Box>
            <Text className={'m-auto text-4xl'}>1I01</Text>
          </Stack>
          <Group grow spacing={'md'} className={'w-full'}>
            <Button disabled={listIndex == 0} onClick={() => setListIndex(listIndex - 1)}>
              前へ
            </Button>
            <Button>抽選する</Button>
            <Button
              disabled={listIndex + 1 == productList.length}
              onClick={() => setListIndex(listIndex + 1)}
            >
              次へ
            </Button>
          </Group>
        </Box>
      </Stack>
    </main>
  )
}
