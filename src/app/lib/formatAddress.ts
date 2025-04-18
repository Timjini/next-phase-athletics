export function formatAddress(components?: google.maps.GeocoderAddressComponent[]): string {
    if (!components || components.length === 0) return "";
  
    const get = (type: string) =>
      components.find((comp) => comp.types.includes(type))?.long_name;
  
    const postalCode = get("postal_code");
    const sublocality = get("sublocality") || get("sublocality_level_1");
    const city = get("locality");
    const state = get("administrative_area_level_1");
    const country = get("country");
  
    return [postalCode, sublocality, city, state, country].filter(Boolean).join(", ");
  }
  