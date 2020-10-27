import React from "react";
import Form from "./Form"
import "./adminStyle.css";

export default function Admin() {
  return (
    <div className="admin-container">
      <Form/>
      <h2>HTML Table</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRICE</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
