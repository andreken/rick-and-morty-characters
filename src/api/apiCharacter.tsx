import fetchData from './fetchData';
import { TCharactersResponseType } from './types';

const emptyData: TCharactersResponseType = {
  info: {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  },
  results: [],
};

const fetchCharacters = async (url: string) => {
  const data = await fetchData<TCharactersResponseType>(url);
  if (!data) return emptyData;

  return data;
};

export default fetchCharacters;
