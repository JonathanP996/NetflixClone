import React from 'react';
import './Player.css'
import backArrow from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className="player">
      {/* Back arrow button */}
      <img
        src={backArrow}
        alt="Go Back"
        onClick={() => navigate(-1)}
        className="back-arrow"
      />

      {/* Video iframe */}
      <iframe
      src="https://www.youtube.com/embed/YQQD67N5pi0"
      title="Trailer"
      width="90%"
      height="500"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

      {/* Movie Info */}
      <div className="playerInfo">
        <p>Published Date</p>
        <p>Movie Name</p>
        <p>Genre / Type</p>
      </div>
    </div>
  );
}

export default Player;
