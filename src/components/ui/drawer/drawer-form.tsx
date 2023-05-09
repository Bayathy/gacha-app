import { Button, Divider, FileButton, NumberInput, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'

type DrawerForm = {
  peoples: {
    '1I': number
    '2I': number
    '3I': number
    '4I': number
    '5I': number
  }
  productList: Array<string>
}

export function DrawerForm() {
  const form = useForm<DrawerForm>({
    initialValues: {
      peoples: {
        '1I': 1,
        '2I': 1,
        '3I': 1,
        '4I': 1,
        '5I': 1,
      },
      productList: [],
    },
  })

  return (
    <form onSubmit={form.onSubmit((data) => console.log(data))}>
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
