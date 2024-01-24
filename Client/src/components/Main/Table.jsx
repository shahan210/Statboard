import React from "react";
import Card from "./Card";
export default function Table() {
  return (
    <div className="row">
      <div className="col-sm-10">
        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr>
              <td>w</td>
              <td>w</td>
              <td>w</td>
              <td>w</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Card />
    </div>
  );
}
