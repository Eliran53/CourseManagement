import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import { urlBase } from "../utils/utils";

export default class VideoTitel extends Component {
  state = {
    lectures: [],
  };
  componentDidMount() {
    const url = `${urlBase()}/api/lectures`;
    axios.get(url).then((res) => {
      const { data } = res.data;
      data.forEach((item) => {
        item.videos = item.videos.startsWith("http")
          ? item.videos.split("v=")[1]
          : item.videos;
      });
      console.log(data);
      this.setState({ lectures: data });
    });
  }
  render() {
    return (
      <>
      
      <div className="row row-cols-1 row-cols-md-3">
          {this.state.lectures.map((lecture) => (
             <div className="col mb-4">
            <div  key={lecture.id}>
               <div className = "card h-100">
                  <iframe
                    title="hi"
                    width="400"
                    height="250"
                    src={`https://www.youtube.com/embed/${lecture.videos}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="0"
                  ></iframe>
                </div>
            <div className = "card-body">
               <h5 className="card-title">{lecture.lecture_name}</h5>
                 <p className="card-text">{lecture.summery}</p>
                  
              </div>
            </div>
            </div>
          ))}
       </div>
      </>
    );
  }
}