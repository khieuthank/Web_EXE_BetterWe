import React, { useState } from 'react';
import './Messenger.css'; // Import file CSS

const Messenger = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="messenger-container">
      <button className={`messenger-icon ${showPopup ? 'hidden' : ''}`} onClick={togglePopup}></button>
      {showPopup && (
        <div className="messsenger-popup-container">
          <div className="messsenger-popup-content">
            <div className="messsenger-popup-header">
              <div>
                <a href="https://m.me/311755802027967" target="_blank" className="messsenger-popup-mess">Go to Messenger</a>
              </div>
              <div>
                <div>
                  <p>Chat with zalo</p>
                </div>
              </div>
            </div>
            <div className="messsenger-popup-footer">
              <button type="button" className="" onClick={togglePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messenger;
