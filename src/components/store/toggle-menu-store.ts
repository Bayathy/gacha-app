import { atom } from 'recoil'

export const toggleMenuState = atom<boolean>({
  key: 'Menu Toggle State',
  default: false,
})
