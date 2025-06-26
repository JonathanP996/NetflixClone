import React from 'react';
import './Modals.css';

const Modals = ({ show, onClose, type }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✕</button>

        {type === "play" ? (
          <>
            <h2>Now Playing: The Protector Movie</h2>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/80dqOwAOhbo"
              title="Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </>
        ) : (
          <>
            <h2>About This Movie</h2>
            <p>
              A young man in Istanbul discovers his secret heritage and must stop an immortal enemy threatening the city.
              Explore themes of identity, ancient orders, and action-packed fantasy.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modals;