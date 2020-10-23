import React from "react";
import "../components/css/video.css";
import Sport from "../components/pagesinsubject/sportpage";
import Makeup from "../components/pagesinsubject/makeUppage";
import Health from "../components/pagesinsubject/healthpage";

function Video() {
  return (
    <>
      <div className="video">
        <section className="page-section" id="services">
          <div className="container">
            <div className="d"></div>
            <h2 className="text-center mt-0">Lectures of your choice!</h2>
            <br />
            <div className="videofile">
              <Health />
              <Sport />
              <Makeup />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Video;
