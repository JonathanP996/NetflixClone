import React, { useEffect, useState } from 'react';
import './Player.css';
import backArrow from '../../assets/back_arrow_icon.png';
import { useParams, useNavigate } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the navigate hook to handle navigation

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmY4MDVhNmM3MjNlOWJmMWEwYWIzNTAyYmIwMmIyOCIsIm5iZiI6MTc1MDkxMDI0Mi45ODU5OTk4LCJzdWIiOiI2ODVjYzUyMmVlMzIwN2Y1ZGU3YjNjZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xS8FrdlnvBGoKoayQ_e6UhAocOKEUQ8qPNPn3SsCvIs',
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?`, options)
      .then((res) => res.json())
      .then((data) => setApiData(data.results[0])) // Correcting 'response' to 'data'
      .catch((err) => console.error(err));
  }, [id]); // Added id as dependency to re-fetch if id changes

  return (
    <div className="player">
      {/* Back arrow button */}
      <img
        src={backArrow}
        alt="Go Back"
        onClick={() => navigate(-1)} // Use navigate to go back
        className="back-arrow"
      />

      {/* Video iframe */}
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`} // Dynamically set the video URL
        title="Trailer"
        width="90%"
        height="500"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Movie Info */}
      <div className="playerInfo">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 4) : ''}</p> {/* Display year */}
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;