import React from "react";
import { Link } from "react-router-dom";
import "../css/Info.css";
import Cookies from "js-cookie";
function bootstrap(props) {
  const auth = Cookies.get("token");
  console.log("tessss", auth);
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
               <b className ="bb"> Name Lecture: </b>{props.lecture.lecture_name}
                <br />
               <b className ="bb">duration:</b> {props.lecture.duration}
                <br />
                <b className ="bb">max Capacity Participants:</b>{" "}
                {props.lecture.maxCapacityParticipants}
                <br />
                <b className ="bb">Lecture Date: </b>{props.lecture.lectureDate}
                <br />
                <b className ="bb">Price:</b> {props.lecture.price}
                <br />
                <b className ="bb">Language:</b> {props.lecture.language}
                <br />
                <b className ="bb">summery:</b> {props.lecture.summery}
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

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {auth ? (
                <button type="button" className="btn btn-primary" >
                  <Link to="/test" className="link">
                    {" "}
                    Buy ticket
                  </Link>
                </button>
              ) : (
                "to buy ticket you need to login"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default bootstrap;
