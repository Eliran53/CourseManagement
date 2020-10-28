import React from "react";
import axios from "axios";
import "react-dom";
import { Link } from "react-router-dom";
import { urlBase } from "../../utils/utils";

export default class Science extends React.Component {
  state = {
    lectures: [],
  };

  componentDidMount() {
    const url = `${urlBase()}/api/queries/subjectName`
    axios
      .post(url, {
        subject_name: "health",
      })
      .then((res) => {
        const { data } = res.data;
        data.splice(3, 3).forEach((item) => {
          item.videos = item.videos.startsWith("http")
            ? item.videos.split("v=")[1]
            : item.videos;
        });

        this.setState({ lectures: res.data.data });
      });
  }

  render() {
    return (
      <div className="video">
        <section className="page-section" id="services">
          <div className="container">
            <h1 className="h">Health</h1>
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
            <Link to="/health" className="linkpages">
                <strong>Learn Health</strong>
              </Link>
          </div>
        </section>
      </div>
    );
  }
}
