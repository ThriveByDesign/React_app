import axios from "axios";
import React, { useEffect, useState } from "react";
import './Resource.css'
function Resources() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults ] = useState()

  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDnEEvnDN2nNGQ-b5TRdXi6hVucZu_E4dA`;




  async function fetchData (url) {
    try {
      
   const {data} = await axios.get(url) 
   setResults(data.items)
   
    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {


   fetchData(url)
if(results) {
  
 Object.values
 (results).forEach(element=>{
  console.log(element)
      data.push(element)
 })
 console.log(data)
}


  }, [search]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  

  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid" onSubmit={handleSubmit}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className=''>
        {data && (
          <div className="results">
            {data.map((element, index) => {
              return (
                <div key={index} className='book-img-container'>
                  
                  <img
                  src={element.volumeInfo?.imageLinks.thumbnail}
                    alt=""
                    className="book-img"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
