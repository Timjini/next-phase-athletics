// components/AutoCompleteInput.tsx
import { StandaloneSearchBox } from '@react-google-maps/api';
import { useState } from 'react';

type PlaceSelected = {
  address: google.maps.GeocoderAddressComponent[] | undefined;
  lat: number | undefined;
  lng: number | undefined;
};

type AutoCompleteInputProps = {
  placeholder: string;
  loadedAlready?: boolean;
  onPlaceSelected: (place: PlaceSelected) => void;
};

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  placeholder,
  loadedAlready = false,
  onPlaceSelected,
}) => {
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);
  if (!loadedAlready) return null;
  const onPlacesChanged = () => {
    const places = searchBox?.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();

      onPlaceSelected({
        address: place.address_components,
        lat,
        lng,
      });
    }
  };

  const onSearchBoxLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  if (!loadedAlready) return null; // avoid loading before wrapper

  return (
    <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
      <input
        type="text"
        placeholder={placeholder}
        autoComplete="on"
        className="border border-gray-300 text-sm rounded-lg block w-full p-2.5"
      />
    </StandaloneSearchBox>
  );
};

export default AutoCompleteInput;
