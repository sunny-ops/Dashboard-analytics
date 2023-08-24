import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState, useEffect } from "react";
import axios from "axios";

const getIconColor = (status) => {
  switch (status) {
    case "Active":
      return "green";
    case "Pending":
      return "orange";
    case "Inactive":
      return "red";
    default:
      return "grey"; // default color
  }
};

const columns = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  {
    field: "avatar",
    headerName: "USER",
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
    headerName: "",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "role", headerName: "ROLE", width: 200 },
  { field: "plan", headerName: "PLAN", width: 200 },
  { field: "billing", headerName: "BILLING", width: 200 },
  {
    field: "status",
    headerName: "STATUS",
    width: 200,
    renderCell: (params) => (
      <div className="d-flex flex-row align-items-center gap-2">
        <FiberManualRecordIcon
          style={{
            height: "10px",
            width: "10px",
            color: getIconColor(params.row.status),
            // color: "red",
          }}
        />
        <div className="default-dark">{params.row.status}</div>
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 200,
    renderCell: (params) => <MoreVertOutlinedIcon />,
  },
];

// const rows = [
//   {
//     id: 1,
//     lastName: "Snow",
//     firstName: "Jon",
//     role: "Manager",
//     plan: "Team",
//     billing: "Auto Debit",
//     status: "Inactive",
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

function UserList(props) {
  const [rows, setRows] = useState([]);
  //   console.log(props.role, props.plan, props.status);
  const { role, plan, status } = props;
  console.log(role, plan, status);
  useEffect(() => {
    //     axios
    //       .get(`http://127.0.0.1:8080/api/apps/users/`)
    //       .then((res) => {
    //         setRows(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }, []);
    axios
      .get(
        `http://127.0.0.1:8080/api/apps/users?role=${role}&plan=${plan}&status=${status}`
        // `http://127.0.0.1:8080/api/apps/users?role=Admin&plan=Team&status=Active`
      )
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [role, plan, status]);
  //   console.log(rows);

  return (
    <div
      style={{ height: 800, width: "100%", color: " rgba(50, 71, 92, 0.6)" }}
    >
      {rows ? (
        <>
          <DataGrid
            style={{ color: " rgba(50, 71, 92, 0.6)" }}
            rows={rows}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            rowHeight={70}
            pageSize={10} // 添加此行以设置每页的行数为10
            pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        </>
      ) : (
        <>hehe</>
      )}
    </div>
  );
}

export default UserList;
