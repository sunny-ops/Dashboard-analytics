import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../../General.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VideoChatOutlinedIcon from "@mui/icons-material/VideoChatOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import axios from "axios";

function Chat(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;

  const [chatContent, setChatContent] = useState([]);
  const [chatIdx, setChatIdx] = useState(0);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/api/apps/emails/sent`)
      .then((res) => {
        setChatContent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("chat", chatContent);
  const items = chatContent.slice(0, 12);
  console.log(items);

  const chatBtn = (id) => {
    setChatIdx(id);
    // axios
    //   .get(`http://127.0.0.1:8080/api/analytics/chats/${chatContent[id]}`)
    //   .then((res) => {
    //     setItems(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div
      className="default round-border mt-3 d-flex flex-row"
      style={{ height: "100vh" }}
    >
      <div
        className="col-4 box-padding"
        style={{
          borderRight: "1px solid rgba(50, 71, 92, 0.12)",
        }}
      >
        <div
          className="d-flex gap-3 align-items-center py-3 mb-3"
          style={{ borderBottom: "1px solid rgba(50, 71, 92, 0.12)" }}
        >
          <img
            src={require("../../images/avatars/1.png")}
            className="portrait-sm"
          />
          <div
            className="round-border p-1"
            style={{
              border: "2px solid",
              borderColor: themeColor,
              flexGrow: "1",
            }}
          >
            <SearchOutlinedIcon />
          </div>
        </div>
        <div className="font-lg" style={{ color: themeColor }}>
          Charts
        </div>

        <div className=" mb-3 d-flex flex-column">
          {items.map((v, id) => {
            return (
              <div
                key={id}
                style={{
                  color:
                    chatIdx === id ? "white" : theme.palette.background.pen,
                  backgroundColor:
                    chatIdx === id ? theme.palette.primary.main : "white",
                }}
                onClick={() => {
                  chatBtn(id);
                }}
                className="me-2 d-flex flex-row p-2 round-border"
              >
                <img
                  src={require(`../../images/avatars/${v.avatarURL}`)}
                  className="portrait-sm me-3"
                />
                <div className="d-flex flex-column">
                  <div>{v.firstName}</div>
                  <div>{v.lastName}</div>
                </div>
                <div className="flex-grow-1 text-end">{v.time}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-8 box-padding">
        {items.length > 0 ? (
          <div
            className="d-flex flex-row py-3 mb-3 pb-2 align-items-center"
            style={{ borderBottom: "1px solid rgba(50, 71, 92, 0.12)" }}
          >
            <img
              src={require(`../../images/avatars/${items[chatIdx].avatarURL}`)}
              className="portrait-sm me-3"
            />
            <div className="d-flex flex-column">
              <div>{items[chatIdx].firstName}</div>
              <div>{items[chatIdx].lastName}</div>
            </div>
            <div className="flex-grow-1 text-end">
              <LocalPhoneOutlinedIcon className="me-2" />
              <VideoChatOutlinedIcon className="me-2" />
              <SearchOutlinedIcon className="me-2" />
              <MoreVertOutlinedIcon className="me-2" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Chat;
