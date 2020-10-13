import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../utils/utils";

const Lecture = () => {
  const [lectures, setsetlectures] = useState({
    lecture_name: "",
    lectureDate:""
  });

  const { id } = useParams();
  useEffect(() => {
    loadlectures();
  }, []);
  const base = urlBase();
  const url = `${base}/api/queries/${id}`;

  const loadlectures = async () => {
    const res = await axios.get(url);
    console.log(res.data);
    setsetlectures(res.data.data);
  };
  return (
    <div className="container">
  
    <ul className="list-group w-50">
      <li className="list-group-item">lecture name: {lectures.lecture_name}</li>
      <li className="list-group-item">lecture Date: {lectures.lectureDate}</li>
    </ul>
  </div>
  );
};
export default Lecture;

