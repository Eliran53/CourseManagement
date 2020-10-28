import React from "react";
import axios from "axios";
import "react-dom";

export default class Science extends React.Component {
  state = {
    lectures: []
  };

  componentDidMount() {
    axios.post("http://localhost:3001/api/queries/subjectName", {subject_name: 'music'}).then((res) => {
      const { data } = res.data;
      data.forEach((item) => {
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
      <div className="allDiv">
          {this.state.lectures.map((lecture, index) => (
            <div className="iframeDiv" key={lecture.id}>
              <p className="p">{lecture.lecture_name}</p>
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
    );
  }
}
