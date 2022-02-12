import { ILocation } from "../../../../api/types"

import LabelValue from "../../../UI/molecules/LabelValue"

interface IProps {
  data: ILocation,
}

const LocationData = ({
  data,
}: IProps) => (
  <>
    <LabelValue label='Name' value={data.name} />
    <LabelValue label='Dimension' value={data.dimension} />
    <LabelValue label='Type' value={data.type} />
    <LabelValue label='Residents' value={data.residents.length} />
  </>
)

export default LocationData