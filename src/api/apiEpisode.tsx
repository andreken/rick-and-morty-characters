import fetchData from './fetchData';
import { TEpisodeResponseType } from './types';

const fetchEpisode = async (url: string) => {
  const data = await fetchData<TEpisodeResponseType>(url);
  if (!data) return null;

  return data;
};

export default fetchEpisode;
