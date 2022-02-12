import Text from '../../../UI/atoms/Text';

interface IProps {
  name: string,
  episode: string,
}

function Episode({
  name,
  episode,
}: IProps) {
  return <Text styles={{ marginBottom: '4px' }}>{`${episode} - ${name}`}</Text>;
}

export default Episode;
