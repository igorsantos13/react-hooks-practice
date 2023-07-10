import React, {useState, useEffect} from 'react'

function Local() {
    const [location, setLocation] = useState({});

    useEffect(()=>{
        const wacthID = navigator.geolocation.watchPosition(handleLocationReceived)
        
        return () => navigator.geolocation.clearWatch(wacthID)
    }, [])

    const handleLocationReceived = ({coords}) => {
        const {latitude, longitude} = coords
        setLocation({latitude, longitude})
    }

  return (
    <div>
        Latitude: {location.latitude}<br />
        Longitude: {location.longitude}
    </div>
  )
}

export default Local