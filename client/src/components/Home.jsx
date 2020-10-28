import React, { Component } from 'react'
import Header from '../homePage/Header';
import About from '../homePage/About'
import Video from '../homePage/Video';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Video/>
                
            </div>
        )
    }
}
