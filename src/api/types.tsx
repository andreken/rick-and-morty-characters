interface CharacterLocation {
  name: string,
  url: string,
}
interface ResourceBase {
  id: number,
  name: string,
  url: string,
  created: string,
}

export interface ICharacter extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown',
  species: string,
  type: string,
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown',
  origin: CharacterLocation,
  location: CharacterLocation,
  image: string,
  episode: string[],
}
export interface ILocation extends ResourceBase {
  type: string,
  dimension: string,
  residents: ICharacter[],
}
export interface IEpisode extends ResourceBase {
  air_date: string,
  episode: string,
  character: string[],
}
export interface IInfo {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null,
}

export interface IApiResponse<T> {
  status: number,
  statusMessage: string,
  data: T,
}

export interface IData<T> {
  info: IInfo,
  results: T,
}

export type TCharacterResponseType = ICharacter;
export type TLocationResponseType = ILocation;
export type TEpisodeResponseType = IEpisode;
export type TCharactersResponseType = IData<ICharacter[]>;
export type TLocationsResponseType = IData<ILocation[]>;
export type TEpisodesResponseType = IData<IEpisode[]>;
