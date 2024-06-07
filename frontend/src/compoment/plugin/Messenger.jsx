import React, { useState } from "react";
import "./Messenger.css"; // Import file CSS

const Messenger = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="messenger-container">
      <button className={`messenger-icon ${showPopup ? "hidden" : ""}`} onClick={togglePopup}></button>
      {showPopup && (
        <div className="messsenger-popup-container">
          <div className="messsenger-popup-content">
            <div>
              <button>
                <a href="https://m.me/311755802027967" target="_blank" className="messsenger-popup-mess">
                  Go to Messenger
                </a>
              </button>
              <button type="button" className="" onClick={togglePopup}>
                Close
              </button>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messenger;
