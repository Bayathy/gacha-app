import { AppShell, Aside, Box, MediaQuery, Text } from '@mantine/core'

import { useMenu } from '@/components/ui/api/use-menu'
import { Drawer } from '@/components/ui/drawer'
import { Header } from '@/components/ui/header'

export default function Home() {
  const { open, toggle } = useMenu()

  return (
    <>
      <AppShell
        padding={'md'}
        header={<Header opened={open} toggle={toggle} />}
        asideOffsetBreakpoint='sm'
        aside={
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
      >
        <Box className={'w-full'}>
          <Text>Test</Text>
        </Box>
      </AppShell>
      <Drawer opened={open} toggle={toggle} />
    </>
  )
}
