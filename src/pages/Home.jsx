import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Home.css';
import {BlobUp} from '../utils/Blob';
import {BlobDown} from '../utils/Blob';



const Dashboard = () => {
  return (
    <header className="Screen">
        <Navbar/>
        <BlobUp/>
        <BlobDown/>

        <div className="blobs">
          <div className="test" id="up"/>
          <div className="test" id="down"/>
        </div>


        <div className="Main">

          <div className = "MainText">
            <h1>Your All-In-One Discord Bot</h1>
            <h4 className="Explanation">
            A fully customizable server moderation Discord bot for <br/> your Discord server that features a 
            simple and <br/> intuitive web dashboard. Server management just got a whole lot easier.
            </h4>

            <div className="btnmenu">
              <button className="btn">Log In With Discord</button>
              <button className="btn">Add Arconix To Your Server</button>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Dashboard