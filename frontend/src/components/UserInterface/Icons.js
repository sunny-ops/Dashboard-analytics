import React from "react";
import "./Icons.css";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

function Icons(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;
  return (
    <div
      className="default round-border mt-3 p-5"
      style={{ background: "transparent", height: "90vh" }}
    >
      <div style={{ color: themeColor }} className="font-lg mb2">
        Iconify Design
      </div>
      <div className="mb-5">Modern unified SVG framework</div>
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6 css-h2qpui">
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:abacus"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2 3h2v18H2zm18 0h2v18h-2zM5 13h2v1h2v-1h2v1h2v-1h4v1h2v-4h-2v1h-4v-1h-2v1H9v-1H7v1H5zm0-9v4h2V7h8v1h2V7h2V5h-2V4h-2v1H7V4zm0 13v3h2v-1h2v1h2v-1h8v-2h-8v-1H9v1H7v-1H5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:accessibility"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <circle cx="18" cy="4" r="2" fill="currentColor"></circle>
                  <path
                    fill="currentColor"
                    d="m17.836 12.014l-4.345.725l3.29-4.113a1 1 0 0 0-.227-1.457l-6-4a.999.999 0 0 0-1.262.125l-4 4l1.414 1.414l3.42-3.42l2.584 1.723l-2.681 3.352a5.913 5.913 0 0 0-5.5.752l1.451 1.451A3.972 3.972 0 0 1 8 12c2.206 0 4 1.794 4 4c0 .739-.216 1.425-.566 2.02l1.451 1.451A5.961 5.961 0 0 0 14 16c0-.445-.053-.878-.145-1.295L17 14.181V20h2v-7a.998.998 0 0 0-1.164-.986zM8 20c-2.206 0-4-1.794-4-4c0-.739.216-1.425.566-2.02l-1.451-1.451A5.961 5.961 0 0 0 2 16c0 3.309 2.691 6 6 6c1.294 0 2.49-.416 3.471-1.115l-1.451-1.451A3.972 3.972 0 0 1 8 20z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:add-to-queue"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:adjust"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:alarm"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9s9-4.121 9-9s-4.121-9-9-9zm0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7s7 3.206 7 7s-3.206 7-7 7z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M13 12V8h-2v6h6v-2zm4.284-8.293l1.412-1.416l3.01 3l-1.413 1.417zm-10.586 0l-2.99 2.999L2.29 5.294l2.99-3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:alarm-add"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9s9-4.121 9-9s-4.121-9-9-9zm0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7s7 3.206 7 7s-3.206 7-7 7z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M13 8h-2v4H7v2h4v4h2v-4h4v-2h-4zm7.292-1.292l-3.01-3l1.412-1.417l3.01 3zM5.282 2.294L6.7 3.706l-2.99 3l-1.417-1.413z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:alarm-exclamation"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9s-9 4.121-9 9s4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7s-7-3.206-7-7s3.206-7 7-7zm5.284-2.293l1.412-1.416l3.01 3l-1.413 1.417zM5.282 2.294L6.7 3.706l-2.99 3l-1.417-1.413z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M11 9h2v5h-2zm0 6h2v2h-2z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:alarm-off"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m20.292 6.708l-3.01-3l1.412-1.417l3.01 3zm1.415 13.585l-2.287-2.287C20.409 16.563 21 14.838 21 13c0-4.879-4.121-9-9-9c-1.838 0-3.563.591-5.006 1.58L5.91 4.496l.788-.79l-1.416-1.412l-.786.788l-.789-.789l-1.414 1.414l18 18l1.414-1.414zM12 6c3.794 0 7 3.206 7 7c0 1.292-.387 2.507-1.027 3.559L15.414 14H17v-2h-3.586L13 11.586V8h-2v1.586L8.441 7.027C9.493 6.387 10.708 6 12 6zM4.305 8.426A8.792 8.792 0 0 0 3 13c0 4.879 4.121 9 9 9a8.792 8.792 0 0 0 4.574-1.305l-1.461-1.461A6.801 6.801 0 0 1 12 20c-3.794 0-7-3.206-7-7c0-1.111.281-2.169.766-3.113L4.305 8.426z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:alarm-snooze"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9s9-4.121 9-9s-4.121-9-9-9zm0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7s7 3.206 7 7s-3.206 7-7 7zm8.292-13.292l-3.01-3l1.412-1.417l3.01 3zM6.698 3.707l-2.99 2.999L2.29 5.294l2.99-3z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M14.832 10.555A1 1 0 0 0 14 9H9v2h3.132l-2.964 4.445A1 1 0 0 0 10 17h5v-2h-3.132l2.964-4.445z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:album"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="11.99"
                    cy="11.99"
                    r="2.01"
                    fill="currentColor"
                  ></circle>
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:align-justify"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 7h16v2H4zm0-4h16v2H4zm0 8h16v2H4zm0 4h16v2H4zm2 4h12v2H6z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:align-left"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:align-middle"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:align-right"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 19h16v2H4zm5-4h11v2H9zm-5-4h16v2H4zm0-8h16v2H4zm5 4h11v2H9z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:analyse"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663a7.91 7.91 0 0 1 2.542-1.71a8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725c-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139a9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538s-1.139 2.538-2.538 2.538z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:anchor"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m22 15l-3-4l-3 4h1.906c-.436 2.469-2.438 4.471-4.906 4.906V13h2v-2h-2V9.336c1.543-.459 2.714-1.923 2.714-3.621C15.714 3.666 14.048 2 12 2S8.286 3.666 8.286 5.715c0 1.698 1.171 3.162 2.714 3.621V11H9v2h2v6.906C8.531 19.471 6.529 17.469 6.094 15H8l-3-4l-3 4h2.073c.511 3.885 3.929 7 7.927 7s7.416-3.115 7.927-7H22zM10.286 5.715C10.286 4.77 11.055 4 12 4s1.714.77 1.714 1.715c0 .951-.801 1.785-1.714 1.785s-1.714-.834-1.714-1.785z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:angry"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3zm-2.439-2.439c.014-.014.023-.03.037-.044l1.031.413l.742-1.857l-5-2l-.742 1.856l1.373.549L7 10.5a1.499 1.499 0 0 0 2.561 1.061zm3.068-1.49l.742 1.857l1.037-.415c.011.011.019.024.029.035a1.488 1.488 0 0 0 2.112 0c.271-.271.438-.644.438-1.056l-.001-.01l1.386-.554l-.742-1.857l-5.001 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:aperture"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10s10-4.579 10-10S17.421 2 12 2zm2.113 13H9.986l-1.723-3.094L10.202 9h3.736l1.871 3.062L14.113 15zM4 12c0-.953.186-1.87.508-2.727L7.696 15H4.61A7.757 7.757 0 0 1 4 12zm12.283-3h3.106A7.74 7.74 0 0 1 20 12c0 .844-.143 1.66-.397 2.432L16.283 9zm1.905-2h-6.653l1.905-2.857c1.886.359 3.562 1.403 4.748 2.857zm-7.095-2.941L9.132 7H9v.197L7.17 9.942L5.65 7.214c1.3-1.703 3.249-2.895 5.443-3.155zM5.812 17h7.147l-1.709 2.961C9.084 19.748 7.141 18.63 5.812 17zm7.828 2.82l3.357-5.815l1.544 2.526c-1.154 1.642-2.901 2.854-4.901 3.289z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arch"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8 22h1v-6.995c.006-.502.177-3.005 3-3.005s2.994 2.503 3 3v7h7v-2h-1V4h1V2H2v2h1v16H2v2h6zM19 4v2H5V4h14zM5 8h14v12h-2v-5c0-1.729-1.045-5-5-5s-5 3.271-5 5v5H5V8z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:archive"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m21.706 5.291l-2.999-2.998A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.291A.994.994 0 0 0 2 5.999V19c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5.999a.994.994 0 0 0-.294-.708zM6.414 4h11.172l.999.999H5.415L6.414 4zM4 19V6.999h16L20.002 19H4z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M15 12H9v-2H7v4h10v-4h-2z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:archive-in"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m21.706 5.292l-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"
                  ></path>
                  <path fill="currentColor" d="M14 9h-4v3H7l5 5l5-5h-3z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:archive-out"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m21.706 5.292l-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"
                  ></path>
                  <path fill="currentColor" d="M7 14h3v3h4v-3h3l-5-5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:area"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.002 14H5V5h14l.002 14z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-back"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-from-bottom"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 18h12v2H6zm6-14.414l-6.707 6.707l1.414 1.414L11 7.414V16h2V7.414l4.293 4.293l1.414-1.414z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-from-left"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 6h2v12H4zm4 7h8.586l-4.293 4.293l1.414 1.414L20.414 12l-6.707-6.707l-1.414 1.414L16.586 11H8z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-from-right"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 6h2v12h-2zm-2 5H7.414l4.293-4.293l-1.414-1.414L3.586 12l6.707 6.707l1.414-1.414L7.414 13H16z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-from-top"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 4h12v2H6zm6 16.414l6.707-6.707l-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293l-1.414 1.414z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-to-bottom"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 18h12v2H6zm5-14v8.586L6.707 8.293L5.293 9.707L12 16.414l6.707-6.707l-1.414-1.414L13 12.586V4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-to-left"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 6h2v12H4zm10.293-.707L7.586 12l6.707 6.707l1.414-1.414L11.414 13H20v-2h-8.586l4.293-4.293z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-to-right"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 6h2v12h-2zM4 13h8.586l-4.293 4.293l1.414 1.414L16.414 12L9.707 5.293L8.293 6.707L12.586 11H4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:arrow-to-top"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293l1.414-1.414L12 7.586l-6.707 6.707z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:at"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8v1c0 .692-.313 2-1.5 2c-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621c.524.89 1.408 1.621 2.838 1.621c2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:atom"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.102 20.898c.698.699 1.696 1.068 2.887 1.068c1.742 0 3.855-.778 6.012-2.127c2.156 1.35 4.27 2.127 6.012 2.127c1.19 0 2.188-.369 2.887-1.068c1.269-1.269 1.411-3.413.401-6.039c-.358-.932-.854-1.895-1.457-2.859a16.792 16.792 0 0 0 1.457-2.859c1.01-2.626.867-4.771-.401-6.039c-.698-.699-1.696-1.068-2.887-1.068c-1.742 0-3.855.778-6.012 2.127c-2.156-1.35-4.27-2.127-6.012-2.127c-1.19 0-2.188.369-2.887 1.068C1.833 4.371 1.69 6.515 2.7 9.141c.359.932.854 1.895 1.457 2.859A16.792 16.792 0 0 0 2.7 14.859c-1.01 2.626-.867 4.77.402 6.039zm16.331-5.321c.689 1.79.708 3.251.052 3.907c-.32.32-.815.482-1.473.482c-1.167 0-2.646-.503-4.208-1.38a26.611 26.611 0 0 0 4.783-4.784c.336.601.623 1.196.846 1.775zM12 17.417a23.568 23.568 0 0 1-2.934-2.483A23.998 23.998 0 0 1 6.566 12A23.74 23.74 0 0 1 12 6.583a23.568 23.568 0 0 1 2.934 2.483a23.998 23.998 0 0 1 2.5 2.934A23.74 23.74 0 0 1 12 17.417zm6.012-13.383c.657 0 1.152.162 1.473.482c.656.656.638 2.117-.052 3.907c-.223.579-.51 1.174-.846 1.775a26.448 26.448 0 0 0-4.783-4.784c1.562-.876 3.041-1.38 4.208-1.38zM4.567 8.423c-.689-1.79-.708-3.251-.052-3.907c.32-.32.815-.482 1.473-.482c1.167 0 2.646.503 4.208 1.38a26.448 26.448 0 0 0-4.783 4.784a13.934 13.934 0 0 1-.846-1.775zm0 7.154c.223-.579.51-1.174.846-1.775a26.448 26.448 0 0 0 4.783 4.784c-1.563.877-3.041 1.38-4.208 1.38c-.657 0-1.152-.162-1.473-.482c-.656-.656-.637-2.117.052-3.907z"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="2.574"
                    fill="currentColor"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:award"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 8.999c0 1.902.765 3.627 2 4.89V21a.998.998 0 0 0 1.447.895L12 20.118l3.553 1.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851v-7.11a6.976 6.976 0 0 0 2-4.891C19 5.14 15.86 2 12 2S5 5.14 5 8.999zm7.447 9.106a1 1 0 0 0-.895 0L9 19.382v-4.067c.911.434 1.926.685 3 .685s2.089-.25 3-.685v4.066l-2.553-1.276zM12 4c2.756 0 5 2.242 5 4.999A5.006 5.006 0 0 1 12 14c-2.757 0-5-2.243-5-5.001A5.005 5.005 0 0 1 12 4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:badge"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479zm-1.442 5.403l-1.102.293l.434 1.053c.095.23.145.483.145.73c0 1.103-.897 2-2 2c-.247 0-.499-.05-.73-.145l-1.054-.434l-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102l-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2c0-.247.05-.5.145-.73l.434-1.053l-1.102-.293a1.993 1.993 0 0 1 0-3.848l1.102-.293l-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2c.247 0 .499.05.73.145l1.054.434l.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102l1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2c0 .247-.05.5-.145.73l-.434 1.053l1.102.293a1.993 1.993 0 0 1 0 3.848z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:badge-check"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403l1.102-.293l-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2c.247 0 .499.05.73.145l1.054.434l.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102l1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2c0 .247-.05.5-.145.73l-.434 1.053l1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293l.434 1.053c.095.23.145.483.145.73c0 1.103-.897 2-2 2c-.247 0-.499-.05-.73-.145l-1.054-.434l-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102l-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2c0-.247.05-.5.145-.73l.434-1.053l-1.102-.293a1.993 1.993 0 0 1 0-3.848z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m15.742 10.71l-1.408-1.42l-3.331 3.299l-1.296-1.296l-1.414 1.414l2.704 2.704z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:baguette"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.64 21.71a8 8 0 0 0 5.6-2.47l6-6c2.87-2.87 3.31-7.11 1-9.45s-6.58-1.91-9.45 1l-6 6c-2.87 2.87-3.31 7.11-1 9.45a5.38 5.38 0 0 0 3.85 1.47zm-2-9l2.78 2.79l1.42-1.42l-2.79-2.79l1.41-1.41l2.83 2.83l1.42-1.42l-2.83-2.83l1.41-1.41l2.83 2.83l1.42-1.42l-2.79-2.78c2-1.61 4.65-1.87 6-.47s1.09 4.56-1 6.62l-6 6c-2.06 2.05-5.09 2.5-6.62 1s-1.06-4.07.55-6.08z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:ball"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.76 21a17.68 17.68 0 0 0 4 .43a13.89 13.89 0 0 0 9.93-3.69C23 12.37 21.06 4.11 21 3.76a1 1 0 0 0-.76-.76a17.91 17.91 0 0 0-4-.43a13.82 13.82 0 0 0-9.96 3.71C.94 11.63 2.94 19.89 3 20.24a1 1 0 0 0 .76.76zM7.7 7.7a11.86 11.86 0 0 1 8.49-3.1a17.57 17.57 0 0 1 3 .25c.31 1.87.91 7.67-2.86 11.44a11.91 11.91 0 0 1-8.55 3.11a17.16 17.16 0 0 1-2.93-.25c-.32-1.88-.92-7.67 2.85-11.45z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m7.29 15.29l1.42 1.42l1.79-1.79l1.79 1.79l1.42-1.42l-1.8-1.79l1.59-1.59l1.79 1.8l1.42-1.42l-1.8-1.79l1.8-1.79l-1.42-1.42l-1.79 1.8l-1.79-1.8l-1.42 1.42l1.8 1.79l-1.59 1.59l-1.79-1.8l-1.42 1.42l1.8 1.79z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:band-aid"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.111 21.889a5.962 5.962 0 0 0 4.242-1.757l7.778-7.778a6.007 6.007 0 0 0 0-8.485a5.965 5.965 0 0 0-4.243-1.757a5.962 5.962 0 0 0-4.242 1.757l-7.778 7.778a6.007 6.007 0 0 0 0 8.485a5.965 5.965 0 0 0 4.243 1.757zm-2.829-8.828l7.778-7.778a3.976 3.976 0 0 1 2.828-1.171c1.069 0 2.073.416 2.829 1.171a4.006 4.006 0 0 1 0 5.657l-7.778 7.778a3.976 3.976 0 0 1-2.828 1.171a3.977 3.977 0 0 1-2.829-1.171a4.008 4.008 0 0 1 0-5.657z"
                  ></path>
                  <circle cx="9" cy="12" r="1" fill="currentColor"></circle>
                  <circle cx="15" cy="12" r="1" fill="currentColor"></circle>
                  <circle cx="12" cy="15" r="1" fill="currentColor"></circle>
                  <circle cx="12" cy="9" r="1" fill="currentColor"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:bar-chart"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 6h2v14H9zm4 2h2v12h-2zm4-4h2v16h-2zM5 12h2v8H5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:bar-chart-alt"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13 6h2v11h-2zm4-3h2v14h-2zM9 9h2v8H9zM4 19h16v2H4zm1-7h2v5H5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:bar-chart-alt-2"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:bar-chart-square"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.001 14H5V5h14l.001 14z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:barcode"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 18V6h16v12z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M6 8h2v8H6zm3 0h1v8H9zm8 0h1v8h-1zm-4 0h3v8h-3zm-2 0h1v8h-1z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:barcode-reader"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 7h2v10H5zm9 0h1v10h-1zm-4 0h3v10h-3zM8 7h1v10H8zm8 0h3v10h-3z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M4 5h4V3H4c-1.103 0-2 .897-2 2v4h2V5zm0 16h4v-2H4v-4H2v4c0 1.103.897 2 2 2zM20 3h-4v2h4v4h2V5c0-1.103-.897-2-2-2zm0 16h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:baseball"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.99 2a9.937 9.937 0 0 0-7.071 2.938c-3.898 3.898-3.898 10.243 0 14.143c1.895 1.895 4.405 2.938 7.071 2.938s5.177-1.043 7.071-2.938c3.899-3.899 3.899-10.244 0-14.143A9.937 9.937 0 0 0 11.99 2zm5.657 15.667a7.957 7.957 0 0 1-3.816 2.129l-.001-.037a6.199 6.199 0 0 1 .421-2.259l-1.863-.729a8.188 8.188 0 0 0-.552 3.239a7.953 7.953 0 0 1-5.503-2.344a7.965 7.965 0 0 1-2.332-5.503c.08.002.16.005.24.005a8.16 8.16 0 0 0 2.988-.558l-.73-1.862a6.156 6.156 0 0 1-2.281.412a7.936 7.936 0 0 1 2.115-3.809a7.963 7.963 0 0 1 3.972-2.168a5.974 5.974 0 0 1-.357 1.95l1.881.681a7.92 7.92 0 0 0 .482-2.701c0-.033-.004-.065-.005-.098c2.013.079 3.9.896 5.342 2.336a7.959 7.959 0 0 1 2.324 5.348a7.908 7.908 0 0 0-2.787.473l.684 1.88a5.91 5.91 0 0 1 1.935-.361a7.953 7.953 0 0 1-2.157 3.976z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M14.112 14.13a7.599 7.599 0 0 0-.926 1.121l1.656 1.12c.2-.296.43-.574.683-.826a6.428 6.428 0 0 1 1.178-.929l-1.049-1.703a8.408 8.408 0 0 0-1.542 1.217zM8.456 8.474a5.713 5.713 0 0 1-.827.681l1.119 1.658a7.72 7.72 0 0 0 1.122-.926a8.501 8.501 0 0 0 1.217-1.542L9.384 7.297a6.519 6.519 0 0 1-.928 1.177z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation6 MuiCard-root css-1848kuw"
              aria-label="bx:basket"
            >
              <div className="MuiCardContent-root css-lmzh3f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  fontSize="22px"
                  className="iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 9h-1.42l-3.712-6.496l-1.736.992L17.277 9H6.723l3.146-5.504l-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1v-1H6.764L4.31 11h15.38l-2.454 9z"
                  ></path>
                  <path fill="currentColor" d="M9 13h2v5H9zm4 0h2v5h-2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button
          variant="contained"
          style={{ color: "white" }}
          className="px-5 py-2"
        >
          View All Icons
        </Button>
      </div>
    </div>
  );
}

export default Icons;
