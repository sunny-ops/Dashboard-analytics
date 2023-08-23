import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import UserList from "./UserList";

function User(props) {
  const [role, setRole] = React.useState("");
  const [plan, setPlan] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };
  const handleChangePlan = (event) => {
    setPlan(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div style={{ height: "90vh" }} className="default round-border mt-3 p-3">
      <div className="default-dark font-md mb-3">Search Filters</div>
      <div className="d-flex flex-row gap-1 justify-content-between mb-3">
        <Box sx={{ minWidth: 120 }} className="col-lg-4 col-12">
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.12)" },
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Select Role"
              onChange={handleChangeRole}
            >
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>Author</MenuItem>
              <MenuItem value={30}>Subscriber</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }} className="col-lg-4 col-12">
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.12)" },
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Plan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={plan}
              label="Select Plan"
              onChange={handleChangePlan}
            >
              <MenuItem value={10}>Basic</MenuItem>
              <MenuItem value={20}>Company</MenuItem>
              <MenuItem value={30}>Team</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }} className="col-lg-4 col-12">
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.12)" },
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Select Status"
              onChange={handleChangeStatus}
            >
              <MenuItem value={10}>Pending</MenuItem>
              <MenuItem value={20}>Active</MenuItem>
              <MenuItem value={30}>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <Divider />
      <UserList />
    </div>
  );
}

export default User;