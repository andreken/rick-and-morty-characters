import { fetchData } from './fetchData'
import { TEpisodeResponseType } from './types'

export const fetchEpisode = async (url: string) => {
  const data = await fetchData<TEpisodeResponseType>(url)
  if(!data) return null

  return data
}