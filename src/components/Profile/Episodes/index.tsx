import { useEffect, useState } from "react"
import styled from '@emotion/styled'

import { fetchEpisode } from "../../../api/apiEpisode"
import { IEpisode } from "../../../api/types"

import SectionTitle from "../../UI/molecules/SectionTitle"
import EpisodeData from "./components/EpisodeData"
import EpisodesSkeleton from "./components/EpisodesSkeleton"

interface IProps {
  episodeUrls: string[]
}

const StyledRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})

const StyledEpisodesWrapper = styled.div({
  maxHeight: '100%',
  overflow: 'auto',
})

const getEpisodes = async (urls: string[]) => {
  const episodes = []
  for(let i=0; i<urls.length; i++) {
    const episode = await fetchEpisode(urls[i])
    if(episode) episodes.push(episode)
  }
  return episodes
}

const Episodes = ({ episodeUrls }: IProps) => {

  const [episodes, setEpisodes] = useState<IEpisode[]>([])

  useEffect(() => {
    getEpisodes(episodeUrls).then(setEpisodes)
  }, [episodeUrls])

  return (
    <StyledRoot>
      <SectionTitle text='Episodes' />
      <StyledEpisodesWrapper>
        {
          episodes.length > 0
          ? episodes.map(({id, name, episode}) => <EpisodeData key={id} name={name} episode={episode} />)
          : <EpisodesSkeleton episodes={episodeUrls.length} />
        }
      </StyledEpisodesWrapper>
    </StyledRoot>
  )
}

export default Episodes