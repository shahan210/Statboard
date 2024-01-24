import React, { useEffect, useState } from "react";
import Card from "./Card";
import api from "../../API/Post";

export default function Table() {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState();

  useEffect(() => {
    tableDetails();
  }, []);

  const tableDetails = async () => {
    loading &&
      (await api
        .get("/api/table")
        .then((response) => {
          // console.log(response);
          setTableData(response);
        })
        .catch((err) => {
          console.log(err);
          console.log("errorr");
        })
        .finally(() => {
          setLoading(false);
        }));
  };
  return (
    <div className="row">
      <div className="col-sm-10">
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
            {tableData !== undefined &&
              tableData.length > 0 &&
              tableData.map((item) => {
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
      </div>
      <Card />
    </div>
  );
}
