import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export function Map(props: { lat: number, lng: number }) {
   const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string });
   // const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);
   if (!isLoaded) return <div>Loading ...</div>;
   return (
      <div>
         <GoogleMap
            zoom={16}
            // center={center}
            mapContainerStyle={{ height: "80vh", display: "flex", width: "100%" }}
         >
            {/* <MarkerF position={center} /> */}
         </GoogleMap>
      </div>
   );
}

type Props = {
   setState: React.Dispatch<React.SetStateAction<any>>;
}

export function MapSelect(setMark:Props) {
   const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
   });

   const [center, setCenter] = useState({
      lat: -8.591875104879524,
      lng: 116.09014182495542,
   });
   const [marker, setMarker] = useState({
      lat: -8.591875104879524,
      lng: 116.09014182495542,
   });
   
   function handleMapClick(event: any) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarker({ lat, lng });
      setMark.setState(marker);
      return marker;
   }

   function handleLoadMarker(m: any) {
      setMarker(m);
   }

   if (!isLoaded) return <div>Loading ...</div>;
   return (
      <div>
         <GoogleMap
            zoom={16}
            center={center}
            mapContainerStyle={{
               height: "80vh",
               display: "flex",
               width: "100%",
            }}
            onClick={handleMapClick}
         >
            {marker && <MarkerF position={marker} onLoad={handleLoadMarker} />}
         </GoogleMap>
      </div>
   );
}
