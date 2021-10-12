//import { Map } from "leaflet";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer , Marker, Popup, useMapEvents,SVGOverlay} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ipStyle = { backgroundColor: 'rgba(226, 162, 67,0.5)' }
const ulStyle = {listStyle: 'none',color: 'rgb(300, 162, 67)'}
const laStyle = {color: 'Blue',fontSize:18}

const {REACT_IP_GEOLOCATION_API} = process.env;
    
const url = (`https://ipgeolocation.abstractapi.com/v1/?api_key=79235227af7141d59d62f92e887098cb&ip_address=`);

const ShowClientIp = () => {

 const [data, setData] = useState("");
 
 useEffect(() => {
      fetch(url)
     .then((res) => res.json())
     .then((data) => setData(data));
 }, []) 

 useEffect(() => console.log(data), [data])
 
 const position = [49.13995, 9.22054]
 
 const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
]
     return(
        <div>
            <IpAddress  setData={setData}/>
            
            <div className="flag">
             <li style={ulStyle}>This is the flag of</li> {data.country_code}
            </div>
            <div id="flex"> 
                   <div className="box">
                       <label style={laStyle}>Your IP Address:<br />
                       <li style={ulStyle}>{data.ip_address}</li></label>
                   </div>
                   <div className="box">
                       <label style={laStyle}>City:<br />
                       <li style={ulStyle}>{data.city}</li></label>
                   </div>
                   <div className="box">
                       <label style={laStyle}>Region:<br />
                       <li style={ulStyle}>{data.region}</li></label>
                   </div>
                   <div className="box">
                       <label style={laStyle}>Country:<br />
                       <li style={ulStyle}>{data.country}</li></label>
                   </div>
                   <div className="box">
                       <label style={laStyle}>Continent:<br />
                       <li style={ulStyle}>{data.continent}</li></label>
                   </div>
            </div><hr />
            
        <div id="mapid">
<MapContainer 
   style={{height:"80vh", width: "100%"}}
center={position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LocationMarker />
  <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
      <rect x="0" y="0" width="100%" height="100%" fill="blue" />
      <circle r="5" cx="10" cy="10" fill="red" />
      <text x="50%" y="50%" stroke="blue">
        text
      </text>
    </SVGOverlay>
</MapContainer>
          </div>
         </div>
     )
}
export default ShowClientIp;

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function IpAddress({setData}){

     const inputRef = React.useRef();

 const handleSubmit = (e) => {
  e.preventDefault();
  const IP = e.target.elements.addIP.value;

  if(!IP){
      console.log('What is going on');
  }else{
    const endpoint = `${url}${IP}`;
    fetch(endpoint)
    .then((res) => res.json())
    .then((data) => setData(data)) 
}
inputRef.current.value = "";
  }
  return(
       <div className="App-IP">
           <form onSubmit={handleSubmit}>
            <button type="submit" style={ipStyle}>
            <input type="text" name="addIP" ref={inputRef}
            placeholder="enter IP address.."/>Submit</button>
           </form>
        </div>
  )
}

    
