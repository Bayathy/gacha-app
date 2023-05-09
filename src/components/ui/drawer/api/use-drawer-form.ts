import { useForm } from '@mantine/form'

export type DrawerForm = {
  peoples: {
    '1I': number
    '2I': number
    '3I': number
    '4I': number
    '5I': number
  }
  productList: JSON | undefined
}

export const useDrawerForm = () => {
  return useForm<DrawerForm>({
    initialValues: {
      peoples: {
        '1I': 1,
        '2I': 1,
        '3I': 1,
        '4I': 1,
        '5I': 1,
      },
      productList: undefined,
    },
  })
}
