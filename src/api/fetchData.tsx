import axios from "./axios";
import {
  TCharacterResponseType,
  TCharactersResponseType,
  TEpisodeResponseType,
  TEpisodesResponseType,
  TLocationResponseType,
  TLocationsResponseType,
} from "./types";

type ResponseType =
  TCharacterResponseType | TCharactersResponseType |
  TEpisodeResponseType | TEpisodesResponseType |
  TLocationResponseType | TLocationsResponseType

export const fetchData = async <T extends ResponseType>(url: string): Promise<T | null> => {
  if (!url) return null

  try {
    const { data, status } = await axios.get(url)
    if(status !== 200) return null
    return data
  } catch (e) {
    return null
  }
}