import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import {urlBase} from '../../utils/utils';
import Table from 'react-bootstrap/Table';


class Customerzone extends Component {
    state = {
      lectures: [],
    //   counter:1
    };

    componentDidMount() {
       const id = "5f983efdee5cb03a7035a417";
      const url = `${urlBase()}/api/customers/${id}`;
      axios.get(url).then((res) => {
        const data = res.data.data;
       
        this.setState({ lectures: data });
        //  console.log(this.state.lectures);
      });
    }
    
    
    render() {
      return (
          <>
        <h1>My Zone</h1>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Lecture Name</th>
            <th>Date </th>
            <th>Summery</th>
            <th>Price</th>

          </tr>
        </thead>
        <tbody>
            {this.state.lectures.map((lecture,index) => (
                
          <tr>
            <td>{index}</td>
            <td>{lecture.lecture_name}</td>
            <td>{lecture.lectureDate}</td>
            <td>{lecture.summery}</td>
            <td>{lecture.price}</td>
          </tr>
           ))  
            }
        </tbody>
      </Table>
      </>
      );
    }
  }
  
  export default Customerzone;
  