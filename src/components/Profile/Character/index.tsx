import { ICharacter } from '../../../api/types'

import LabelValue from '../../UI/molecules/LabelValue'
import ProfilePicture from './components/ProfilePicture'

const Character = ({
  name,
  status,
  species,
  type,
  gender,
  image,
}: ICharacter) => (
  <div>
    <ProfilePicture imageUrl={image} alt={name} />
    <LabelValue label='Name' value={name} />
    <LabelValue label='Status' value={status} />
    <LabelValue label='Species' value={species || '-'} />
    <LabelValue label='Type' value={type || '-'} />
    <LabelValue label='Gender' value={gender} />
  </div>
)

export default Character