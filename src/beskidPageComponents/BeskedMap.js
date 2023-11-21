// AIzaSyCtkYNyrw9YPYcMYCyiTGM0-WDLbqdTiO0
import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function BeskedMap() {
    const center = useMemo(() => ({lat: 48.906305, lng: 24.662879}), [])
    const containerStyle = {
        width: '100%',
        height: '400px'
    }
    const { isLoaded } = useLoadScript({googleMapsApiKey: 'AIzaSyAw-AVtvpx9nhS6rhXAR4qJ3af03KXhTj8'})
    if (!isLoaded){
        return (<div>Loading...</div>)
    } else {
        return (
                <GoogleMap
                    zoom={11}
                    center={center}
                    mapContainerStyle = {containerStyle}>
                    <Marker position={center} title={'West Town'}/>
                </GoogleMap>
        )
    }
    
}

export default BeskedMap