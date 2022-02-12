import Title from '../atoms/Title';

interface IProps {
  text: string,
}

function SectionTitle({ text }: IProps) {
  return <Title styles={{ borderBottom: '2px solid #000', marginBottom: '.5rem' }}>{text}</Title>;
}

export default SectionTitle;
