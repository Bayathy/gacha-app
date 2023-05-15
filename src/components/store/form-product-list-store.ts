import { atom } from 'recoil'

export const formProductListState = atom<Array<string>>({
  key: 'Form ProductList State',
  default: [],
})
