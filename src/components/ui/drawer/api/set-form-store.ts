import type { DrawerForm } from '@/components/ui/drawer/api/use-drawer-form'
import type { SetterOrUpdater } from 'recoil'

type SetFormStateProperties = {
  data: DrawerForm
  setPeople: SetterOrUpdater<Pick<DrawerForm, 'peoples'>>
  setProductList: SetterOrUpdater<Array<string>>
}

export const setFormStore = ({ data, setProductList, setPeople }: SetFormStateProperties) => {
  if (!data.productList) {
    alert('Please Import File')
    return
  }

  setPeople({ peoples: { ...data.peoples } })
  const reader = new FileReader()
  const fileLoader = (event: ProgressEvent<FileReader>) => {
    const json = JSON.parse(event.target?.result as string)
    console.log(json)
    setProductList(json)
  }
  reader.addEventListener('load', fileLoader)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  reader.readAsText(data.productList!)
}
