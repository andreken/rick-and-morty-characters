import Title from '../atoms/Title';

interface IProps {
  text: string,
}

const SectionTitle = ({ text }: IProps) => (
  <Title styles={{ borderBottom: '2px solid #000', marginBottom: '.5rem' }}>{text}</Title>
)

export default SectionTitle