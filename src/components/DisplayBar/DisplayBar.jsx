import React from 'react';
import './DisplayBar.css';
import { TiThList } from "react-icons/ti";

const DisplayBar = () => {
  return (
    <div style={{paddingLeft : "10px"}}>
        <div className="displayButton">
        <button
          className="btn"
        >
          {" "}
          <TiThList /> Display
        </button>
        <div className="dropOnClick">
              <div className="selectGroup">
                <span>Grouping</span>
                <select className="selectStyle" name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span>Ordering</span>
                <select className="selectStyle" name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
            </div>
    </div>
  )
}

export default DisplayBar