
import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api/apiCharacter"
import { ICharacter } from "../../api/types";
import GridOfCards from '../../components/UI/layout/GridOfCards'
import Profile from "../../components/Profile";
import Loading from "../../components/UI/layout/Loading";

const apiCharacters = 'https://rickandmortyapi.com/api/character'

const Characters = () => {

  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [fetchEnded, setFetchEnded] = useState<boolean>(false)

  const getCharacters = async () => {
    const data = await fetchCharacters(apiCharacters)
    const { results } = data
    setCharacters(results)
    setFetchEnded(true)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return fetchEnded ? <GridOfCards data={characters} Component={Profile} /> : <Loading />
}

export default Characters