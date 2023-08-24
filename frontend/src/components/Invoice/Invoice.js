import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import InvoiceList from "./InvoiceList";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./Invoice.css";

function Invoice(props) {
  const [status, setStatus] = React.useState("");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div style={{ height: "90vh" }} className="default round-border mt-3 p-3">
      <div className="default-dark font-md mb-3">Search Filters</div>
      <div className="d-flex flex-row gap-1 justify-content-between mb-3">
        <Box sx={{ minWidth: 120 }} className="col-lg-6 col-12 pt-2">
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
              <MenuItem value={""}>Select Status</MenuItem>
              <MenuItem value={"Sent"}>Sent</MenuItem>
              <MenuItem value={"Paid"}>Paid</MenuItem>
              <MenuItem value={"Draft"}>Draft</MenuItem>
              <MenuItem value={"Downloaded"}>Downloaded</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="col-lg-6 col-12 dataSelector">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <Divider />
      <InvoiceList status={status} />
    </div>
  );
}

export default Invoice;
