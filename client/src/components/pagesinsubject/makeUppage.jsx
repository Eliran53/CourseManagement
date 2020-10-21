import React from "react";
import axios from "axios";
import "react-dom";
import {Link} from 'react-router-dom'
export default class Science extends React.Component {
  state = {
    lectures: [],
  };

  componentDidMount() {
    axios
      .post("http://localhost:3001/api/queries/subjectName", {
        subject_name: "make up",
      })
      .then((res) => {
        const { data } = res.data;
        console.log(res);
        console.log(data);
        data.splice(3,3).forEach((item) => {
          item.videos = item.videos.startsWith("http")
            ? item.videos.split("v=")[1]
            : item.videos;
        });

        this.setState({ lectures: res.data.data });
        console.log(data);
      });
  }

  render() {
    return (
      <div className="video">
        <section className="page-section" id="services">
          <div className="container">
          <h1 className="h">Make Up</h1>
            <div className="row row-cols-1 row-cols-md-3">
              {this.state.lectures.map((lecture) => (
                <div className="col mb-4 ">
                  <div key={lecture.id}>
                    <div className="card h-100">
                      <iframe
                        title="hi"
                        width="350"
                        height="250"
                        src={`https://www.youtube.com/embed/${lecture.videos}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="0"
                      ></iframe>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{lecture.lecture_name}</h5>
                      <p className="card-text">{lecture.summery}</p>
                    </div>
                  </div>
                </div>
              ))}
             
          </div>
          <Link to='/makeup' className ="linkpages"><strong>Learn Make-Up</strong></Link>
          </div>
        </section>
      </div>
    );
  }
}
