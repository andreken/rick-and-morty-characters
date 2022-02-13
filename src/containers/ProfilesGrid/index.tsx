import GridOfCards from '../../components/UI/layout/GridOfCards';
import Profile from '../../components/Profile';
import { ICharacter } from '../../api/types';

interface IProps {
  characters: ICharacter[]
}

function ProfilesGrid({ characters }: IProps) {
  return <GridOfCards data={characters} Component={Profile} />;
}

export default ProfilesGrid;
