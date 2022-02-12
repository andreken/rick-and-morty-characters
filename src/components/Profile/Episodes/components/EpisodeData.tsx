import Text from '../../../UI/atoms/Text';

interface IProps {
  name: string,
  episode: string,
}

function EpisodeData({
  name,
  episode,
}: IProps) {
  return <Text styles={{ marginBottom: '4px' }}>{`${episode} - ${name}`}</Text>;
}

export default EpisodeData;
