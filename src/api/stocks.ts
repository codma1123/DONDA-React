import axios from 'axios'

export interface Stocks {
  [code: string]: string
}

export interface RecommandStocks {
  [code: string]: {
    name: string
    close: number
    changes_ratio: number
  }
}

export async function getKrxCorps(): Promise<Stocks> {
  const res = await axios.get<Stocks>('/api/krx-corps')
  return res.data
}

export async function getRecommandStocks(): Promise<RecommandStocks> {
  const res = await axios.get<RecommandStocks>('/api/daily/recommand')
  return res.data

  
}
