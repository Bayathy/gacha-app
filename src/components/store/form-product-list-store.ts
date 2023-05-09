import { atom } from 'recoil'

import type { DrawerForm } from '@/components/ui/drawer/drawer-form'

export const formProductListState = atom<Pick<DrawerForm, 'productList'>>({
  key: 'Form ProductList State',
  default: {
    productList: [],
  },
})
