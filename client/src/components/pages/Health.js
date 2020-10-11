import React from "react";
import axios from "axios";
import "react-dom";

export default class Health extends React.Component {
  state = {
    lectures: [],
    post: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/lectures").then((res) => {
      const { data } = res.data;
      data.forEach((item) => {
        item.videos = item.videos.startsWith("http")
          ? item.videos.split("v=")[1]
          : item.videos;
      });
      console.log(data);
      this.setState({ post: data, lectures: data });
    });
  }
  _onKeyUp = (e) => {
    const excludeColumns = ["videos"];
    const post = this.state.lectures.filter((item) => {
      return Object.keys(item).some((key) =>
        excludeColumns.includes(key)
          ? false
          : item[key]
              .toString()
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
      );
    });

    this.setState({ post });
  };

  render() {
    return (
      <div className="container">
        <div className="search-outer">
          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action=""
          >
            {/* input field activates onKeyUp function on state change */}
            <input
              type="search"
              onChange={this._onKeyUp}
              name="s"
              id="s"
              placeholder="Search"
            />
          
          </form>
        </div>

        <div className="allDiv">
          {this.state.post.map((lecture, index) => (
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
      </div>
    );
  }
}
