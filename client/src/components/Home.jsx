import React, { Component } from 'react'
import Header from '../homePage/Header';
import About from '../homePage/About'
import Video from '../homePage/Video';
import Customer from '../components/customer-zone/customer-zone';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Video/>
                <Customer/>
            </div>
        )
    }
}
