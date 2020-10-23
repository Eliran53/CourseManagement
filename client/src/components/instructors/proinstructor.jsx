import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../utils/utils";

const Instructors = () => {
  const [instructors, setinstructors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    education: "",
    linkdin: "",
    bio: ""
  })

  const { id } = useParams();
  useEffect(() => {
    loadinstructors();
  }, []);
  const base = urlBase()
  const url = `${base}/api/instructors/${id}`;
  
  const loadinstructors = async () => {
    const res = await axios.get(url);
     console.log(res.data)
    setinstructors(res.data.data);
    
  };
  return (
    <div className="container">
     
      <ul className="list-group w-20 text-left">
        <li className="list-group-item">First Name: {instructors.first_name}</li>
        <li className="list-group-item">Last Name: {instructors.last_name}</li>
        <li className="list-group-item">email: {instructors.email}</li>
        <li className="list-group-item">education: {instructors.education}</li>
        <li className="list-group-item">linkdin: {instructors.linkdin}</li>
        <li className="list-group-item">bio:{instructors.bio}</li>
      </ul>
    </div>
  );
};
export default Instructors;