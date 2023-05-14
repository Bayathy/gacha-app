import { MediaQuery, Text, Aside as MantineAside, Divider, ScrollArea } from '@mantine/core'
import { useRecoilState } from 'recoil'

import { formProductListState } from '@/components/store/form-product-list-store'
export function Aside() {
  const [productList] = useRecoilState(formProductListState)
  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <MantineAside p='md' hiddenBreakpoint='sm' width={{ sm: 300 }}>
        <Text ta={'center'}>履歴</Text>
        <Divider />
        <ScrollArea>
          {productList.map((index, key) => (
            <Text key={key}>{index}</Text>
          ))}
        </ScrollArea>
      </MantineAside>
    </MediaQuery>
  )
}
