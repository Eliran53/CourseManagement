import React from 'react';
import '../components/css/video.css';
import VideoTitel from './VideoTitel';


function Video() {

    return (
      <>
        <div className="video">
        <section className="page-section" id="services">
        <div className="container">
        <h2 className="text-center mt-0">Lectures of your choice!</h2>
        <div className="videofile"><VideoTitel/></div></div> </section> 
        
        </div>
       
      </>
    );
  }
  
  export default Video;

