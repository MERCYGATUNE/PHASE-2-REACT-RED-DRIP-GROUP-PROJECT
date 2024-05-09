
import React, { useState,useEffect } from 'react'
import './Bloodbanklist.css'
import Searchbar from './Searchbar'
function Bloodbanklist() {
 const [data,setData]=useState([]);

 useEffect(() => {
 // Fetch data from an endpoint
 fetch('http://localhost:3000/data')
 .then(response => response.json())
 .then(data => setData(data))
 .catch(error => console.error('Error fetching data:', error));
 }, []); // Empty dependency array to fetch data only once



 return (
 <div className='bank'>
 <Searchbar data={data} />
 
 </div>
 )
}

export default Bloodbanklist 