import React,{Component} from 'react';
import axios from 'axios';
export default class Makeup extends Component {
  state = {
    subjects: []
  }
  componentDidMount() {
    axios.get()
  }
  render() { 
    return (
      <h1 className='Makeup'>Makeup</h1>
      );
  }
}
 


