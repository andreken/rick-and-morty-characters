import { Masonry } from '@mui/lab';

interface IData {
  id: number | string,
  [key: string]: any,
}

interface IProps {
  data: IData[],
  Component: React.ElementType
}

function GridOfCards({ data, Component }: IProps) {
  return (
    <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={2} style={{ margin: 0 }}>
      {
        data.map((row) => (
          <Component
            key={row.id}
            {...row}
          />
        ))
      }
    </Masonry>
  );
}

export default GridOfCards;
