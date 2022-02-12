import fetchData from './fetchData';
import { TLocationResponseType } from './types';

const fetchLocation = async (url: string) => {
  const data = await fetchData<TLocationResponseType>(url);
  if (!data) return null;

  return data;
};

export default fetchLocation;
