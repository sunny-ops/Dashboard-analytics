import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  { field: "id", headerName: "# id", width: 100 },
  {
    field: "avatar",
    headerName: "",
    width: 20,
    renderCell: (params) => (
      <img
        // src={params.row.avatarUrl}
        src={require(`../../images/avatars/${params.row.avatarURL}`)}
        alt="Avatar"
        width="40"
        style={{ borderRadius: "45px" }}
      />
    ),
  },
  //   { field: "firstName", headerName: "First name", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
  {
    field: "fullName",
    headerName: "CLIENT",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "total",
    headerName: "TOTAL",
    width: 200,
    renderCell: (params) => (
      <div className="default-dark">$ {params.row.total}</div>
    ),
  },
  { field: "date", headerName: "ISSUED DATE", width: 200 },
  {
    field: "balance",
    headerName: "BALANCE",
    width: 200,
    renderCell: (params) => (
      <div className="default-dark">$ {params.row.balance}</div>
    ),
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 200,
    renderCell: (params) => (
      <div>
        <DeleteIcon className="me-2" />
        <RemoveRedEyeIcon className="me-2" />
        <MoreVertOutlinedIcon />
      </div>
    ),
  },
];

// const rows = [
//   {
//     id: 1,
//     lastName: "Snow",
//     firstName: "Jon",
//     total: "1234",
//     date: "Aug12",
//     balance: "$120",
//   },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

function InvoiceList(props) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/api/apps/invoices/`)
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{ height: 800, width: "100%", color: " rgba(50, 71, 92, 0.6)" }}
    >
      <DataGrid
        style={{ color: " rgba(50, 71, 92, 0.6)" }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        rowHeight={70}
        pageSize={10} // 添加此行以设置每页的行数为10
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default InvoiceList;
