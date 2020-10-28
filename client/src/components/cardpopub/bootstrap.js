import React from "react";
import {Link} from 'react-router-dom'
function bootstrap(props) {
  console.log("pro", props.lecture);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={"#s" + props.lecture._id}
      >
        More Details
      </button>
      <div
        className="modal fade"
        id={"s" + props.lecture._id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title" id="exampleModalLongTitle">
               Name Lecture: {props.lecture.lecture_name}
                <br />
                duration: {props.lecture.duration}
                <br />
                max Capacity Participants: {props.lecture.maxCapacityParticipants}
                <br />
                Lecture Date: {props.lecture.lectureDate}
                <br />
                Price: {props.lecture.price}
                <br />
                Language: {props.lecture.language}
                <br />
              </p>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
               <Link to = "/creadit-card"> Buy ticket</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default bootstrap;
