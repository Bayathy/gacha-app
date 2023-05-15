import { useEffect } from 'react'

import { useDisclosure } from '@mantine/hooks'
import { useSetRecoilState } from 'recoil'

import { toggleMenuState } from '@/components/store/toggle-menu-store'

export const useMenu = () => {
  const [open, { toggle }] = useDisclosure()
  const setMenuState = useSetRecoilState(toggleMenuState)

  useEffect(() => {
    setMenuState(open)
  }, [open, setMenuState])

  return { open, toggle }
}
