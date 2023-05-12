import { Button, Divider, FileButton, NumberInput, Stack } from '@mantine/core'
import { useSetRecoilState } from 'recoil'

import { formPeopleState } from '@/components/store/form-people-store'
import { formProductListState } from '@/components/store/form-product-list-store'
import { setFormStore } from '@/components/ui/drawer/api/set-form-store'
import { useDrawerForm } from '@/components/ui/drawer/api/use-drawer-form'

export function DrawerForm() {
  const form = useDrawerForm()

  // const setProductList = useSetRecoilState(formProductListState)
  const setPeople = useSetRecoilState(formPeopleState)
  const setProductList = useSetRecoilState(formProductListState)
  return (
    <form onSubmit={form.onSubmit((data) => setFormStore({ data, setPeople, setProductList }))}>
      <Stack align={'stretch'} spacing={'sm'}>
        <FileButton {...form.getInputProps('productList')}>
          {(properties) => (
            <Button fullWidth {...properties}>
              import file
            </Button>
          )}
        </FileButton>
        <Stack align={'stretch'} spacing={'sm'}>
          <NumberInput
            defaultValue={1}
            placeholder='人数を入力'
            label='1Iの人数'
            {...form.getInputProps('peoples.1I')}
          />
          <NumberInput
            defaultValue={1}
            placeholder='人数を入力'
            label='2Iの人数'
            {...form.getInputProps('peoples.2I')}
          />
          <NumberInput
            defaultValue={1}
            placeholder='人数を入力'
            label='3Iの人数'
            {...form.getInputProps('peoples.3I')}
          />
          <NumberInput
            defaultValue={1}
            placeholder='人数を入力'
            label='4Iの人数'
            {...form.getInputProps('peoples.4I')}
          />
          <NumberInput
            defaultValue={1}
            placeholder='人数を入力'
            label='5Iの人数'
            {...form.getInputProps('peoples.5I')}
          />
        </Stack>
        <Divider my={'lg'} />
        <Button type={'submit'}>設定</Button>
      </Stack>
    </form>
  )
}
