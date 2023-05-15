import { AppShell } from '@mantine/core'

import { useMenu } from '@/components/ui/api/use-menu'
import { Aside } from '@/components/ui/aside'
import { Drawer } from '@/components/ui/drawer'
import { Header } from '@/components/ui/header'
import { Main } from '@/components/ui/main'

export default function Home() {
  const { open, toggle } = useMenu()

  return (
    <>
      <AppShell
        padding={'md'}
        header={<Header opened={open} toggle={toggle} />}
        asideOffsetBreakpoint='sm'
        aside={<Aside />}
      >
        <Main />
      </AppShell>
      <Drawer opened={open} toggle={toggle} />
    </>
  )
}
