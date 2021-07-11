import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    }

  return (
    <div>
        <nav>
            <Link style={navStyle} to="/home"><h3>Logo(Home)</h3></Link>
            <ul className="nav-link">
                <Link style={navStyle} to="/about" >
                    <li>About Us</li>
                </Link>
                <Link style={navStyle} to="/showIP" >
                    <li>Client IP</li>
                </Link>
                <Link style={navStyle} to="/news" >
                    <li>Hacker News</li>
                </Link>
            </ul>
        </nav>
      
    </div>
  );
}
export default Nav;

/*
//import { useState, useEffect } from "react";

const ShowClientIp = () => {
 //const [data, setData] = useState([]);
 //const [ipValue, setIpValue] = useState("");


    
     const apiKey = 'at_1oHqd8AiVNDIyT6O1Exc1tXoRbrOV';

     const url = (`https://geo.ipify.org/api/v1?apiKey=at_1oHqd8AiVNDIyT6O1Exc1tXoRbrOV&ipAddress=8.8.8.8`)

     const clientIP = async () => {

           const response = await fetch({})
           .then((response) => response.json())
           .then((results) => setData(results))
           .catch((error) => console.log(error));
     };
     useEffect(() => {
         clientIP();
     }, [ipValue]);

     useEffect(() => console.log(data), [data]);
 
        const handleSubmit = (event) => {
            event.preventDefault();
            setIpValue(ipValue);
        };

        const handleChange = (event)=> {
            setIpValue(event.target.value);
        }

     return(
         <div className="App-IP">
           <form onSubmit={handleSubmit}>
              <button><input type="text"
              onChange={handleChange}
               placeholder="enter Ip address.."/>Submit</button>
               
           </form><br />
           {data
            .map((dat) =>(
                <li>{dat.name}:{""} {dat.location}</li>
            ))}
    
         </div>
     )
    
   
}
export default ShowClientIp;

*/