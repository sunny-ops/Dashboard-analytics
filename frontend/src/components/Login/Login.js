import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./Login.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ConstructionOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Login(props) {
  let emailRef = useRef();
  let passwordRef = useRef();
  const navigate = useNavigate();

  const signinBtn = () => {
    // 登录

    axios
      .post("/api/signin", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.message);
        if (res.data.code === 1) {
          alert("Login Successfully");
          //   navigate("/dashboards/analytics");
          const username = res.data.username;
          navigate(`/analytics?username=${username}`);
        } else if (res.data.code === 2) {
          alert("Email or password not correct");
          console.log(res.data.code);
        } else {
          alert("Email not registered");
          console.log(res.data.code);
        }
      });
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div className="col-lg-7 p-5 d-flex justify-content-center align-items-center">
        <img
          style={{ width: "700px" }}
          src="https://solelysneat.vercel.app/images/pages/boy-with-rocket-light.png"
        />
      </div>
      <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
        <div style={{ width: "400px" }}>
          <div className="d-flex flex-row g-2 mb-5">
            <AutoAwesomeIcon style={{ color: "rgb(3, 195, 236)" }} />
            <div className="logo">Convo</div>
          </div>
          <div className="default-dark font-md mb-2">Welcome to Convo! 👋🏻</div>
          <div className="default-color font-sm mb-3">
            Please sign-in to your account and start the <br />
            adventure
          </div>
          <div className="d-flex flex-column gap-3 mb-2">
            <TextField
              id="outlined-controlled"
              label="Email"
              style={{ width: "100%" }}
              inputRef={emailRef}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              style={{ width: "100%" }}
              autoComplete="current-password"
              inputRef={passwordRef}
            />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mb-2">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  style={{ color: "rgb(3, 195, 236)" }}
                />
              }
              label="Remember Me"
              className="default-color font-xs"
            />
            <div style={{ color: "rgb(3, 195, 236)" }}>Forgot Password?</div>
          </div>
          <Button
            variant="contained"
            className="py-2 mb-3"
            style={{ backgroundColor: "rgb(3, 195, 236)", width: "100%" }}
            onClick={signinBtn}
          >
            SIGN IN
          </Button>
          <div className="default-color d-flex justify-content-center">
            <>New on our platform?&nbsp;</>
            <span style={{ color: "rgb(3, 195, 236)" }}>
              {" "}
              <NavLink to="/signup" style={{ color: "inherit" }}>
                Create an account
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
