// AIzaSyCtkYNyrw9YPYcMYCyiTGM0-WDLbqdTiO0
import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function RiverMap() {
    const center = useMemo(() => ({lat: 48.91262, lng: 24.74700}), [])
    const containerStyle = {
        width: '100%',
        height: '400px'
    }
    const { isLoaded } = useLoadScript({googleMapsApiKey: 'AIzaSyBFwcX6iO3FuHpNP9GDev71jFbCQls_tnE'})
    if (!isLoaded){
        return (<div>Loading...</div>)
    } else {
        return (
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerStyle = {containerStyle}>
                    <Marker position={center} title={'GUESTHOUSES'}/>
                </GoogleMap>
        )
    }
    
}

export default RiverMap