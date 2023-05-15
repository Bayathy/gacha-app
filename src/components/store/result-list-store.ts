import { atom } from 'recoil'

export type ResultList = Array<{
  id: number
  product: string
  candidate: string
}>

export const resultListState = atom<ResultList>({
  key: 'Result List Store',
  default: [],
})
