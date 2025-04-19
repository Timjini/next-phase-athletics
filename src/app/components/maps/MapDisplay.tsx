"use client";
import React, { useEffect, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";

type MapDisplayProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapDisplay: React.FC<MapDisplayProps> = ({ lat, lng, zoom = 14 }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const center = { lat, lng };
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && window.google?.maps?.marker?.AdvancedMarkerElement) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      new AdvancedMarkerElement({
        map: mapRef.current,
        position: center,
        title: "Marker",
      });
    }
  }, [center]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    />
  );
};

export default MapDisplay;
