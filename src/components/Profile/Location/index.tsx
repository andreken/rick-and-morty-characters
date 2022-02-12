import { useCallback, useEffect, useState } from "react"

import { fetchLocation } from "../../../api/apiLocation"
import { ILocation } from "../../../api/types"

import SectionTitle from "../../UI/molecules/SectionTitle"
import LocationData from "./components/LocationData"
import LocationSkeleton from "./components/LocationSkeleton"
import LocationEmpty from "./components/LocationEmpty"

interface IProps {
  locationTitle: string,
  locationUrl: string, 
}

const Location = ({
  locationTitle,
  locationUrl,
}: IProps) => {

  const [locationData, setLocationData] = useState<ILocation | null>(null)
  const [fetchEnded, setFetchEnded] = useState<boolean>(false)

  const getLocation = useCallback(async () => {
    const data = await fetchLocation(locationUrl)
    setLocationData(data)
    setFetchEnded(true)
  }, [locationUrl])

  useEffect(() => {
    if(!locationUrl) {
      setFetchEnded(true)
      return
    }
    getLocation()
  }, [locationUrl, getLocation])

  return (
    <div>
      <SectionTitle text={locationTitle} />
      {
        fetchEnded ?
        ( locationData ? <LocationData data={locationData} /> : <LocationEmpty /> ) :
        <LocationSkeleton />
      }
    </div>
  )
}


export default Location