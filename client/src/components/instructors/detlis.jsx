import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../utils/utils";
import Table from "react-bootstrap/Table";

const Lecture = () => {
  const [lectures, setsetlectures] = useState({
    lecture_name: "",
    lectureDate: "",
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
    setsetlectures(res.data.data[0]);
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Namber</th>
            <th>Lecture Name</th>
            <th>Lecture Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td> {lectures.lecture_name}</td>
            <td> {lectures.lectureDate}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Lecture;
