import { Grid } from '@mui/material';

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
    <Grid container spacing={2}>
      {
      data.map((row) => (
        <Grid key={row.id} item xs={12} sm={6} lg={4}>
          <Component
            {...row}
          />
        </Grid>
      ))
    }
    </Grid>
  );
}

export default GridOfCards;
