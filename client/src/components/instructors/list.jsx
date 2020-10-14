import React, { Component } from "react";

export class list extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-success" ><i class="fas fa-plus"></i> Add</button>||
                <button className="btn btn-danger"><i class="fas fa-trash"></i> Delete</button>||
                <button className="btn btn-info"><i class="fas fa-edit"></i >Edit</button>
              </td>
            </tr>
          </tbody>
        </table>  
      </div>
    );
  }
}

export default list;
