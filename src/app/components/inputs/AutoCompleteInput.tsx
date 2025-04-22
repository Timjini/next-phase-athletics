// components/AutoCompleteInput.tsx
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";

const libraries: ("places")[] = ["places"];

type PlaceSelected = {
  address: google.maps.GeocoderAddressComponent[] | undefined;
  lat: number | undefined;
  lng: number | undefined;
};

type AutoCompleteInputProps = {
  placeholder: string;
  onPlaceSelected: (place: PlaceSelected) => void;
};

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  placeholder,
  onPlaceSelected,
}) => {
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

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

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={libraries}
    >
      <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
        <input
          type="text"
          placeholder={placeholder}
          autoComplete="on"
          className="border border-gray-300 text-sm rounded-lg block w-full p-2.5"
        />
      </StandaloneSearchBox>
    </LoadScript>
  );
};

export default AutoCompleteInput;
