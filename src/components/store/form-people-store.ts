import { atom } from 'recoil'

import type { DrawerForm } from '@/components/ui/drawer/api/use-drawer-form'

export const formPeopleState = atom<Pick<DrawerForm, 'peoples'>>({
  key: 'Form People State',
  default: {
    peoples: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
  },
})
