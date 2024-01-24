import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";
import Card from "./Card";
export default function Table(props) {
  const handleChange = (event, value) => {
    localStorage.setItem("page", JSON.stringify(value));
  };
  const pageNo = JSON.parse(localStorage.getItem("page"));
  return (
    <div className="row">
      <div className="col-sm-10 table-box">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {props.tableData !== undefined &&
              props.tableData.length > 0 &&
              props.tableData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pagination">
          <Stack>
            <Pagination
              onChange={handleChange}
              defaultPage={pageNo}
              count={5}
              color="success"
            />
          </Stack>
        </div>
      </div>
      <Card />
    </div>
  );
}
