import Text from '../../../UI/atoms/Text'

interface IProps {
  name: string,
  episode: string,
}

const Episode = ({
  name,
  episode
}: IProps) => (
  <Text styles={{ marginBottom: '4px' }}>{`${episode} - ${name}`}</Text>
)

export default Episode