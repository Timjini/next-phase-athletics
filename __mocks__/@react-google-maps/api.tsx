import React from 'react';

export const LoadScript = ({ googleMapsApiKey, libraries, children }: { googleMapsApiKey: string; libraries: string[]; children: React.ReactNode }) => {
  // In the mock, you can just return the children since we don't need actual Google Maps functionality
  return <>{children}</>;
};

export const StandaloneSearchBox = ({ onLoad, onPlacesChanged, children }: any) => {
  const mockSearchBox = {
    getPlaces: () => [
      {
        address_components: [{ long_name: '123 Main St' }],
        geometry: { location: { lat: () => 40.7128, lng: () => -74.0060 } },
      },
    ],
  };

  // Simulate the loading and places change events
  onLoad(mockSearchBox);
  onPlacesChanged();

  return <div>{children}</div>; // The JSX will render a div around the children
};
