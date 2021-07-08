import React, { useEffect,useState} from "react";
import '../App.css';


 const navStyle = {
        color: 'blue'
    }


function News() {

    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      fetch("https://gist.githubusercontent.com/MyElectricSheep/4f15c82c45409e06b220d4f7b67e1534/raw/106124f0632d8167001de62a12275dcbe660c2cd/hackernews.json")
      .then((res) => res.json())
      .then((data) => setData(data.hits));
      
    }, []);

    console.log(data.hits)


 const handleSearch = (event) => {

    event.preventDefault();

     setSearchValue( event.target.value);
};

const handleChange = (event) => {
  setSearchValue(event.target.value);
}

  return (
    <div className="App">
       
      <form onSubmit={handleSearch}>
        <input type="text" value={searchValue} onChange={handleChange} placeholder="search..." />
        <button type="submit">Submit</button>
      </form>
      {data
        .filter((item) => item.title.toLowerCase().includes(searchValue))
        .map(dat => (
          <h4 style={navStyle}>
            {dat.title}:{" "}{""}
            <a href={dat.url} target="_blank" className="here" rel="noreferrer">Here</a>
            
            
            </h4>
        )
          )}
      
    </div>
  );
}
export default News;