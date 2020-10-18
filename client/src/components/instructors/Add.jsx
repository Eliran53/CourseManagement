import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import '../css/Form.css'

const Add = () => {
  let history = useHistory();
  const [lectures, setlecture] = useState({
    instructorID: "",
    lecture_name: "",
    subjectID: "",  
    duration: "",
    maxCapacityParticipants: "",
    lectureDate: "",
    summery: "",  
    price: "",
    videos: "",
    language: ""
  });

  const { instructorID, lecture_name, subjectID, duration, maxCapacityParticipants,
    lectureDate,summery,price,videos, language} = lectures;
  const onInputChange = e => {
    setlecture({ ...lectures, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/lectures", lectures);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A lectures</h2>
        <form className = "f" onSubmit={e => onSubmit(e)}>
          <div className="form-group">

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your instructorID"
              name="instructorID"
              value={instructorID}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your lecture_name"
              name="lecture_name"
              value={lecture_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your subjectID"
              name="subjectID"
              value={subjectID}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your duration"
              name="duration"
              value={duration}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your lectureDate"
              name="lectureDate"
              value={lectureDate}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your maxCapacityParticipants"
              name="maxCapacityParticipants"
              value={maxCapacityParticipants}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your summery"
              name="summery"
              value={summery}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your videos"
              name="videos"
              value={videos}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your language"
              name="language"
              value={language}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className = "b">
          <button className="btn btn-primary btn-block">Add lectures</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;