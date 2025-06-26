import React, { useEffect, useRef, useState } from 'react';import './Titlebar.css'
import CardData from '../../assets/cards/Cards_data'

const Titlebar = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmY4MDVhNmM3MjNlOWJmMWEwYWIzNTAyYmIwMmIyOCIsIm5iZiI6MTc1MDkxMDI0Mi45ODU5OTk4LCJzdWIiOiI2ODVjYzUyMmVlMzIwN2Y1ZGU3YjNjZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xS8FrdlnvBGoKoayQ_e6UhAocOKEUQ8qPNPn3SsCvIs'
    }
  };
  
const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .then(response => {
    console.log("API data:", response);
    setApiData(response.results);
  })
  .catch(err => console.error(err));

  
  const ref = cardsRef.current;
  ref.addEventListener('wheel', handleWheel);
  return () => ref.removeEventListener('wheel', handleWheel);
}, []);


  return (
    <div className="titlebar">
      <h2> {title?title:"Popular On Netflix"} </h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
      <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.Image} />
      <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  );
}

export default Titlebar;
