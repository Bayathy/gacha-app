import { useEffect, useState } from 'react'

import { Box, Button, Group, Stack, Text } from '@mantine/core'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { formPeopleState } from '@/components/store/form-people-store'
import { formProductListState } from '@/components/store/form-product-list-store'
import { resultListState } from '@/components/store/result-list-store'

export function Main() {
  const [listIndex, setListIndex] = useState<number>(0)
  const [candidate, setCandidate] = useState<string>('')

  const productList = useRecoilState(formProductListState)[0]
  const setResultList = useSetRecoilState(resultListState)
  const peopleList = useRecoilValue(formPeopleState)

  useEffect(() => {
    console.log(listIndex)
    console.log(productList.length)
  }, [listIndex, productList.length])
  const handleNext = (listIndex: number, candidate: string) => {
    if (!candidate) return
    setResultList((oldList) => [
      ...oldList,
      {
        id: oldList.length,
        product: productList[listIndex],
        candidate: candidate,
      },
    ])
    setCandidate('')
    setListIndex(listIndex + 1)
  }

  const gacha = () => {
    const grade = Math.floor(Math.random() * 5) + 1
    const number = Math.floor(Math.random() * peopleList.peoples[grade as 1]) + 1
    setCandidate(`${grade}I${number}`)
  }

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
            <Text className={'m-auto text-4xl'}>{candidate}</Text>
          </Stack>
          <Group grow spacing={'md'} className={'w-full'}>
            <Button disabled={listIndex == 0} onClick={() => setListIndex(listIndex - 1)}>
              前へ
            </Button>
            <Button onClick={() => gacha()}>抽選する</Button>
            <Button
              disabled={listIndex + 1 == productList.length}
              onClick={() => handleNext(listIndex, candidate)}
            >
              次へ
            </Button>
          </Group>
        </Box>
      </Stack>
    </main>
  )
}
