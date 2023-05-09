import { atom } from 'recoil'

import type { DrawerForm } from '@/components/ui/drawer/drawer-form'

export const formPeopleState = atom<Pick<DrawerForm, 'peoples'>>({
  key: 'Form People State',
  default: {
    peoples: {
      '1I': 0,
      '2I': 0,
      '3I': 0,
      '4I': 0,
      '5I': 0,
    },
  },
})
