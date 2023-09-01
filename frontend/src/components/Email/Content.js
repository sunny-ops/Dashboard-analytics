import React, { createRef } from "react";
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
        // src={params.row.avatarUrl}
        src={require(`../../images/avatars/${params.row.avatarURL}`)}
        alt="Avatar"
        width="40"
        style={{ borderRadius: "45px" }}
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

function Content(props) {
  const [rows, setRows] = useState();
  const type = props.value;
  const iptRef = createRef();
  useEffect(() => {
    axios
      .get(`/api/apps/emails/${type}`)
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);
  //   console.log(rows);

  const keyUpBtn = (event) => {
    let value = iptRef.current.value;

    axios
      .get(`/api/apps/emails/${type}/${value}`)
      .then((res) => {
        console.log("res.data", res.data);
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {rows ? (
        <>
          <div
            className="d-flex flex-row mt-5 mb-3 py-2 align-items-center round-border ps-3"
            style={{ width: "90%", border: "1px solid rgba(224, 224, 224, 1)" }}
          >
            <SearchOutlinedIcon className="me-3" />
            {/* <div className="default ms-3 font-md">Search</div> */}
            <input
              placeholder="Search"
              className="flex-grow-1 font-md default"
              style={{ border: "none" }}
              onKeyUp={keyUpBtn}
              ref={iptRef}
            ></input>
          </div>
          <div style={{ height: "80vh", width: "90%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={(row) => row._id}
              rowHeight={70}
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
