import React, { Component } from "react";
import axios from "axios";
import "../../../App.css";
import {urlBase} from '../../../utils/utils';


class VideoTitel extends Component {
  state = {
    lectures: [],
  };
  componentDidMount() {
    const url = `${urlBase()}/api/lectures`;
    axios.get(url).then((res) => {
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
    
        <div className="allDiv">
          {this.state.lectures.map((lecture) => (
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
      
        
      </>
    );
  }
}

export default VideoTitel;
