import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import fetchLocation from '../../../api/apiLocation';
import { ILocation } from '../../../api/types';

import SectionTitle from '../../UI/atoms/SectionTitle';
import LocationData from './components/LocationData';
import LocationSkeleton from './components/LocationSkeleton';
import LocationEmpty from './components/LocationEmpty';

interface IProps {
  locationTitle: string,
  locationUrl: string
}

function Location({
  locationTitle,
  locationUrl,
}: IProps) {
  const [locationData, setLocationData] = useState<ILocation | null>(null);
  const [fetchEnded, setFetchEnded] = useState<boolean>(false);
  const mountedRef = useRef(true);

  const getLocation = useCallback(async () => {
    const data = await fetchLocation(locationUrl);
    if (!mountedRef.current) return;
    setLocationData(data);
    setFetchEnded(true);
  }, [locationUrl]);

  useEffect(() => {
    if (!locationUrl) {
      setFetchEnded(true);
      return;
    }
    getLocation();

    // eslint-disable-next-line consistent-return
    return () => {
      mountedRef.current = false;
    };
  }, [locationUrl, getLocation]);

  const SectionData = locationData ? <LocationData data={locationData} /> : <LocationEmpty />;

  return (
    <div>
      <SectionTitle>{locationTitle}</SectionTitle>
      {
        fetchEnded
          ? SectionData
          : <LocationSkeleton />
      }
    </div>
  );
}

export default Location;
