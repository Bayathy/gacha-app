import { Button, Divider, FileButton, NumberInput, Stack } from '@mantine/core'

export function DrawerForm() {
  return (
    <form>
      <Stack align={'stretch'} spacing={'sm'}>
        <FileButton onChange={() => console.log('test')}>
          {(properties) => (
            <Button fullWidth {...properties}>
              import file
            </Button>
          )}
        </FileButton>
        <Stack align={'stretch'} spacing={'sm'}>
          <NumberInput defaultValue={1} placeholder='人数を入力' label='1Iの人数' />
          <NumberInput defaultValue={1} placeholder='人数を入力' label='2Iの人数' />
          <NumberInput defaultValue={1} placeholder='人数を入力' label='3Iの人数' />
          <NumberInput defaultValue={1} placeholder='人数を入力' label='4Iの人数' />
          <NumberInput defaultValue={1} placeholder='人数を入力' label='5Iの人数' />
        </Stack>
        <Divider my={'lg'} />
        <Button>設定</Button>
      </Stack>
    </form>
  )
}
