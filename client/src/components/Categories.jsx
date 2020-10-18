import React, { Component } from 'react'
import {Link}  from 'react-router-dom'

export default class Categories extends Component {
    render() {
        return (
            <div class="btn-group">
            <button type="button" class="btn btn-danger">Categories</button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div class="dropdown-menu">
            <Link to="/sport" className="dropdown-item">Sport</Link>
            <Link to="/health" className="dropdown-item">Health</Link>
            <Link to="/makeUp" className="dropdown-item">Make up</Link>
            <Link to="/science" className="dropdown-item">Science</Link>
            <Link to="/food" className="dropdown-item">Food</Link>
            <Link to="/lifeStyle" className="dropdown-item">LifeStyle</Link>
            <Link to="/science" className="dropdown-item">Science</Link>
            
             </div>
          </div>
        )
    }
}

