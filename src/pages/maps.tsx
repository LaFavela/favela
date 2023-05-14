import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Map(props: { lat: number, lng: number }) {
   const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string });
   const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);
   if (!isLoaded) return <div>Loading ...</div>;
   return (
      <div>
         <GoogleMap
            zoom={16}
            center={center}
            mapContainerStyle={{ height: "80vh", display: "flex", width: "100%" }}
         >
            <MarkerF position={center} />
         </GoogleMap>
      </div>
   );
}
