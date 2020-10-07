import React, { Component } from "react";
import axios from "axios";
import ".././App.css";



class VideoTitel extends Component {
  state = {
    lectures: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3001/api/lectures").then((res) => {
      const {data} = res.data;
      data.forEach(item => {
        item.videos = item.videos.startsWith('http')?  item.videos.split("v=")[1] : item.videos
      });
      console.log(data);
      this.setState({ lectures: data });
    });
  }
  render() {
    return (
      <>
        <div className="divH">
          <h1>
            The purpose of the site is to connect between independent lecturers
            and you!
            <br />
            We have a large selection of content on our site divided by
            categories .<br />
            feel free to visit our site !<br />
          </h1>
        </div>
        <hr />
        <div className="allDiv">
          {this.state.lectures.map((lecture) => (
            <div className="iframeDiv" key={lecture.id}>
              <p className="p">{lecture.lectureName}</p>
              <iframe
                title="hi"
                width="400"
                height="250"
                src={`https://www.youtube.com/embed/${lecture.videos}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="0"
              ></iframe>
              <p className="p">{lecture.summery}</p>
            </div>
          ))}
          
        </div>
      </>
    );
  }
}

export default VideoTitel;
