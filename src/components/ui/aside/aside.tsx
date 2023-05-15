import {
  MediaQuery,
  Text,
  Aside as MantineAside,
  Divider,
  ScrollArea,
  Card,
  Stack,
  Button,
  Box,
} from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useRecoilState } from 'recoil'

import { resultListState } from '@/components/store/result-list-store'
export function Aside() {
  const [resultList, setResultList] = useRecoilState(resultListState)

  const deleteResult = (id: number) => {
    const newResultList = resultList.filter((item) => item.id != id)
    setResultList(newResultList)
  }

  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <MantineAside p='md' hiddenBreakpoint='sm' width={{ sm: 300 }}>
        <Text ta={'center'}>履歴</Text>
        <Divider py={'sm'} />
        <ScrollArea>
          <Stack spacing={'sm'}>
            {resultList.length > 0 &&
              resultList.map((index) => (
                <Card key={index.id} withBorder>
                  <Text>{index.product}</Text>
                  <Divider />
                  <Text>{index.candidate}</Text>
                  <Box className={'flex justify-end'}>
                    <Button onClick={() => deleteResult(index.id)} leftIcon={<IconTrash />}>
                      削除
                    </Button>
                  </Box>
                </Card>
              ))}
          </Stack>
        </ScrollArea>
      </MantineAside>
    </MediaQuery>
  )
}
