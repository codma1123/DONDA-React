import axios from 'axios'

export interface Stocks {
  [code: string]: string
}



export async function getKrxCorps(): Promise<Stocks> {
  const res = await axios.get<Stocks>('/api/krx-corps')
  return res.data
}
