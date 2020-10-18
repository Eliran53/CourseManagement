import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import {urlBase} from '../../utils/utils';


class Welcome extends Component{

state:{id:}    

componentDidMount(){
    const url =`${urlBase()}/api/auth/payload` ;
    const id = axios.get(url);
}
}

export default Welcome;