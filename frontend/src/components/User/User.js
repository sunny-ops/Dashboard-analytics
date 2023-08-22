import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";

function User(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ height: "100vh" }} className="default round-border mt-3 p-3">
      <div className="default-dark font-lg mb-3">Search Filters</div>
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
              value={age}
              label="Select Role"
              onChange={handleChange}
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
              value={age}
              label="Select Plan"
              onChange={handleChange}
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
              value={age}
              label="Select Status"
              onChange={handleChange}
            >
              <MenuItem value={10}>Pending</MenuItem>
              <MenuItem value={20}>Active</MenuItem>
              <MenuItem value={30}>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <Divider />
    </div>
  );
}

export default User;
