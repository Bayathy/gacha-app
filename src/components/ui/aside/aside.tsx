import {
  MediaQuery,
  Text,
  Aside as MantineAside,
  Divider,
  ScrollArea,
  Card,
  Stack,
} from '@mantine/core'
import { useRecoilValue } from 'recoil'

import { resultListState } from '@/components/store/result-list-store'
export function Aside() {
  const resultList = useRecoilValue(resultListState)

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
                  <Text>{index.candidate}</Text>
                </Card>
              ))}
          </Stack>
        </ScrollArea>
      </MantineAside>
    </MediaQuery>
  )
}
