import { useForm } from '@mantine/form'

export type DrawerForm = {
  peoples: {
    1: number
    2: number
    3: number
    4: number
    5: number
  }
  productList: File | undefined
}

export const useDrawerForm = () => {
  return useForm<DrawerForm>({
    initialValues: {
      peoples: {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
      },
      productList: undefined,
    },
  })
}
