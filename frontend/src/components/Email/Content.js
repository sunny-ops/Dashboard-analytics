import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import "./Content.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";

const columns = [
  {
    field: "starred",
    headerName: "",
    width: 50,
    renderCell: (params) => <StarBorderOutlinedIcon />,
  },
  {
    field: "avatar",
    headerName: "",
    width: 20,
    renderCell: (params) => (
      <img
        src={params.row.avatarUrl}
        alt="Avatar"
        width="40"
        style={{ borderRadius: "50px" }}
      />
    ),
  },
  {
    field: "fullName",
    headerName: "",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 650,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "time", headerName: "", width: 100 },
];

// const rows = [
//   {
//     id: 1,
//     lastName: "Snow",
//     firstName: "Jon",
//     age: 35,
//     avatarUrl: "https://solelysneat.vercel.app/images/avatars/1.png",
//     time: "11:45pm",
//   },
//   {
//     id: 2,
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     time: "11:45pm",
//   },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

function Content(props) {
  const [rows, setRows] = useState();
  const type = props.value;
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/api/apps/emails/${type}`)
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);
  console.log(rows);
  //   console.log(rows.length);
  return (
    <div className="d-flex flex-column align-items-center">
      {rows ? <div>{rows.length}</div> : <div />}
      {/* <div>{props.value}</div> */}
      {rows ? (
        <>
          <div
            className="d-flex flex-row mt-5 mb-3 py-2 align-items-center round-border ps-3"
            style={{ width: "90%", border: "1px solid rgba(224, 224, 224, 1)" }}
          >
            <SearchOutlinedIcon />
            <div className="default ms-3 font-md">Search</div>
          </div>
          <div style={{ height: "80vh", width: "90%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={(row) => row._id}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSize={10} // 添加此行以设置每页的行数为10
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Content;
