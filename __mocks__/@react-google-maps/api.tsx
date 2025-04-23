import React from 'react';

export const LoadScript = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const StandaloneSearchBox = ({ onLoad, onPlacesChanged, children }: any) => {
  const [searchBox, setSearchBox] = React.useState<any>(null);

  React.useEffect(() => {
    const mockSearchBox = {
      getPlaces: () => [
        {
          address_components: [{ long_name: '123 Main St' }],
          geometry: { location: { lat: () => 40.7128, lng: () => -74.0060 } },
        },
      ],
    };
    setSearchBox(mockSearchBox);
    onLoad?.(mockSearchBox);
  }, []);

  return (
    <div>
      <input data-testid="searchbox-input" />
      <button 
        data-testid="searchbox-button" 
        onClick={() => onPlacesChanged?.()}
      >
        Search
      </button>
      {children}
    </div>
  );
};