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
            <Link to="/:sport" className="dropdown-item">sport</Link>
            <Link to="/health" className="dropdown-item">health</Link>
            <Link to="/makeUp" className="dropdown-item">make up</Link>
             </div>
          </div>
        )
    }
}

