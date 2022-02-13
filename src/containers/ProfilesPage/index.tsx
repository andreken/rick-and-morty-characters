import { useCallback, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';

import fetchCharacters from '../../api/apiCharacter';
import { ICharacter } from '../../api/types';

import { PageTitle } from '../../components/UI/atoms';
import Loading from '../../components/UI/layout/Loading';
import ProfilesGrid from '../ProfilesGrid';
import Pagination from '../../components/Pagination';
import { apiCharacterBaseUrl } from '../../utils/consts';

const StyledPagination = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
});

function ProfilesPage() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isFetchingData, setFetchingData] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const getCharacters = useCallback(async () => {
    setFetchingData(true);
    const url = `${apiCharacterBaseUrl}?page=${page}`;
    const data = await fetchCharacters(url);
    const { results, info: { pages } } = data;
    setCharacters(results);
    setTotalPages(pages);
    setFetchingData(false);
  }, [page]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl">
      <PageTitle styles={{ padding: '2rem 0' }}>Rick and Morty characters</PageTitle>
      <StyledPagination>
        <Pagination pages={totalPages} currentPage={page} onPageChange={handlePageChange} />
      </StyledPagination>
      { !isFetchingData ? <ProfilesGrid characters={characters} /> : <Loading /> }
    </Container>
  );
}

export default ProfilesPage;
