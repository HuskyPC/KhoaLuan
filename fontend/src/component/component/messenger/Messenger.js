import React, { useState } from "react";
import "../../css/messenger.css";
const Messenger = (props) => {
  const [closeMSG, setCloseMSG] = useState(false);
  return (
    <div id={`toast `} className={`${closeMSG ? "hidden" : ""}`}>
      <div className={`toast toast__${props.type} `}>
        <div className="toast__icon">
          {props.type === "success" ? (
            <i className="fas fa-check-circle" />
          ) : props.type === "warning" ? (
            <i className="fa-solid fa-circle-exclamation"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </div>
        <div className="toast__body">
          <h3 className="toast__title">{props.title}</h3>
          <p className="toast__msg">{props.msg}</p>
        </div>
        <div className="toast__close">
          <i className="fas fa-times" onClick={() => setCloseMSG(true)} />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
