import { NextPage } from "next";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

interface MapProps {
  location: any;
}

const Map: NextPage<MapProps> = (props) => {
  const { location } = props;

  const mapContainer = useRef<any>();
  const map = useRef<any>();
  const [lng, setLng] = useState(location.location.lng);
  const [lat, setLat] = useState(location.location.lat);
  const [zoom, setZoom] = useState(12);

  /* Checking if the map has been created, if not it creates it. */
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });
  });

  /* Updating the map with the new location. */
  useEffect(() => {
    if (!map.current) return;
    setLng(location.location.lng);
    setLat(location.location.lat);
    map.current.setCenter([lng, lat]);
  }, [lat, lng, location]);

  return (
    <>
      <div className="w-full h-3/5 lg:h-[65%]" ref={mapContainer}></div>
    </>
  );
};

export default Map;
