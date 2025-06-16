// AIzaSyCtkYNyrw9YPYcMYCyiTGM0-WDLbqdTiO0
import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function Map() {
    const westCenter = useMemo(() => ({lat: 48.906305, lng: 24.662879}), [])
    const beskidCenter = useMemo(() => ({lat: 48.357040, lng: 24.424809}), [])
    const center = useMemo(() => ({lat: 48.647494, lng: 24.563812}), [])
    const containerStyle = {
        width: '100%',
        height: '400px'
    }
    const { isLoaded } = useLoadScript({googleMapsApiKey: 'AIzaSyBFwcX6iO3FuHpNP9GDev71jFbCQls_tnE'})
    if (!isLoaded){
        return (<div>Loading...</div>)
    } else {
        return (
            <div className="map-container box">
                <h2 className="main-title map-title">Де нас знайти</h2>
                <GoogleMap
                    zoom={9}
                    center={center}
                    mapContainerStyle = {containerStyle}>
                    <Marker position={westCenter} title={'West Town'}/>
                    <Marker position={beskidCenter} title={'West Town'}/>
                </GoogleMap>
            </div>
        )
    }
    
}

export default Map