import React, { Component } from "react";
import axios from "axios";

export default class Categories extends Component {
  state = {
    subjects: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3001/api/subjects").then((res) => {
      console.log(res);
      this.setState({ subjects: res.data.data });
    });
  }
  render() {
    return (
      <div className="">
      {this.state.subjects.map((subject) => (
        <div key={subject.id}>
          <p className="p">{subject.subject_name}</p>
         </div>
      ))}
      
    </div>
    )
   
  }
}