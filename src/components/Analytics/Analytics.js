import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Analytics.css";
import Payment from "./Payment";
import RevenueBar from "./RevenueBar";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

function Analytics(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
        <Grid container spacing={2}>
          <Grid item className="col-lg-8 col-md-12">
            <Item
              sx={{ color: "inherit" }}
              className="d-flex flex-direction-row justify-content-between box-padding g-5 round-border"
            >
              <div>
                <h4 style={{ color: themeColor }} className="mt-2 font-lg">
                  Congratulations John!
                </h4>
                <p className="font-sm">
                  You have done 72% more sales today. <br></br>Check your new
                  badge in your profile.
                </p>

                <Button
                  variant="outlined"
                  sx={{ color: themeColor, borderColor: themeColor }}
                  className="font-sm"
                >
                  View Badges
                </Button>
              </div>
              <div>
                <img
                  alt="Congratulations John"
                  src={require("../../images/cards/illustration-john-light.png")}
                  className="congrat-img me-5"
                />
              </div>
            </Item>
          </Grid>
          <Grid item className="col-lg-2 col-6">
            <Item className="round-border" sx={{ color: "inherit" }}>
              <div className="default font-md ms-2">Order</div>
              <div className="default-dark font-lg ms-2">276K</div>
              <div className="order"></div>
              {/* <div
                id="apexcharts6d4r14uz"
                class="apexcharts-canvas apexcharts6d4r14uz apexcharts-theme-light"
                style={{ width: "212px", height: "110px" }}
              >
                <svg
                  id="SvgjsSvg7256"
                  width="212"
                  height="110"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  // xmlns:svgjs="http://svgjs.dev"
                  class="apexcharts-svg apexcharts-zoomable"
                  // xmlns:data="ApexChartsNS"

                  transform="translate(0, 0)"
                  style={{ background: "transparent" }}
                >
                  <g
                    id="SvgjsG7258"
                    class="apexcharts-inner apexcharts-graphical"
                    transform="translate(0, 5)"
                  >
                    <defs id="SvgjsDefs7257">
                      <clipPath id="gridRectMask6d4r14uz">
                        <rect
                          id="SvgjsRect7263"
                          width="202"
                          height="93"
                          x="-3.5"
                          y="-1.5"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <clipPath id="forecastMask6d4r14uz"></clipPath>
                      <clipPath id="nonForecastMask6d4r14uz"></clipPath>
                      <clipPath id="gridRectMarkerMask6d4r14uz">
                        <rect
                          id="SvgjsRect7264"
                          width="203"
                          height="98"
                          x="-4"
                          y="-4"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <linearGradient
                        id="SvgjsLinearGradient7280"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          id="SvgjsStop7281"
                          stop-opacity="0.6"
                          stop-color="#71dd37"
                          offset="0"
                        ></stop>
                        <stop
                          id="SvgjsStop7282"
                          stop-opacity="0.1"
                          stop-color="#ffffff"
                          offset="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <line
                      id="SvgjsLine7262"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="90"
                      stroke="#b6b6b6"
                      stroke-dasharray="3"
                      stroke-linecap="butt"
                      class="apexcharts-xcrosshairs"
                      x="0"
                      y="0"
                      width="1"
                      height="90"
                      fill="#b1b9c4"
                      filter="none"
                      fill-opacity="0.9"
                      stroke-width="1"
                      style={{ display: "none" }}
                    ></line>
                    <g
                      id="SvgjsG7285"
                      class="apexcharts-xaxis"
                      transform="translate(0, 0)"
                    >
                      <g
                        id="SvgjsG7286"
                        class="apexcharts-xaxis-texts-g"
                        transform="translate(0, -4)"
                      ></g>
                    </g>
                    <g id="SvgjsG7294" class="apexcharts-grid">
                      <g
                        id="SvgjsG7295"
                        class="apexcharts-gridlines-horizontal"
                        style={{ display: "none" }}
                      >
                        <line
                          id="SvgjsLine7297"
                          x1="0"
                          y1="0"
                          x2="195"
                          y2="0"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7298"
                          x1="0"
                          y1="15"
                          x2="195"
                          y2="15"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7299"
                          x1="0"
                          y1="30"
                          x2="195"
                          y2="30"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7300"
                          x1="0"
                          y1="45"
                          x2="195"
                          y2="45"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7301"
                          x1="0"
                          y1="60"
                          x2="195"
                          y2="60"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7302"
                          x1="0"
                          y1="75"
                          x2="195"
                          y2="75"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          class="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine7303"
                          x1="0"
                          y1="90"
                          x2="195"
                          y2="90"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          stroke-linecap="butt"
                          class="apexcharts-gridline"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG7296"
                        class="apexcharts-gridlines-vertical"
                        style={{ display: "none" }}
                      ></g>
                      <line
                        id="SvgjsLine7305"
                        x1="0"
                        y1="90"
                        x2="195"
                        y2="90"
                        stroke="transparent"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                      ></line>
                      <line
                        id="SvgjsLine7304"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="90"
                        stroke="transparent"
                        stroke-dasharray="0"
                        stroke-linecap="butt"
                      ></line>
                    </g>
                    <g
                      id="SvgjsG7265"
                      class="apexcharts-area-series apexcharts-plot-series"
                    >
                      <g
                        id="SvgjsG7266"
                        className="apexcharts-series"
                        seriesName="seriesx1"
                        data-longestSeries="true"
                        rel="1"
                        data-realIndex="0"
                      >
                        <path
                          id="SvgjsPath7283"
                          d="M 0 90L 0 75C 13.649999999999999 75 25.35 15 39 15C 52.65 15 64.35 67.5 78 67.5C 91.65 67.5 103.35 37.5 117 37.5C 130.65 37.5 142.35 52.5 156 52.5C 169.65 52.5 181.35 15 195 15C 195 15 195 15 195 90M 195 15z"
                          fill="url(#SvgjsLinearGradient7280)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="0"
                          stroke-dasharray="0"
                          class="apexcharts-area"
                          index="0"
                          clip-path="url(#gridRectMask6d4r14uz)"
                          pathTo="M 0 90L 0 75C 13.649999999999999 75 25.35 15 39 15C 52.65 15 64.35 67.5 78 67.5C 91.65 67.5 103.35 37.5 117 37.5C 130.65 37.5 142.35 52.5 156 52.5C 169.65 52.5 181.35 15 195 15C 195 15 195 15 195 90M 195 15z"
                          pathFrom="M 0 90L 0 75C 12.459999999999999 75 23.14 15 35.6 15C 48.06 15 58.74 67.5 71.2 67.5C 83.66 67.5 94.34 37.5 106.8 37.5C 119.26 37.5 129.94 52.5 142.4 52.5C 154.86 52.5 165.54 15 178 15C 178 15 178 15 178 90M 178 15z"
                        ></path>
                        <path
                          id="SvgjsPath7284"
                          d="M 0 75C 13.649999999999999 75 25.35 15 39 15C 52.65 15 64.35 67.5 78 67.5C 91.65 67.5 103.35 37.5 117 37.5C 130.65 37.5 142.35 52.5 156 52.5C 169.65 52.5 181.35 15 195 15"
                          fill="none"
                          fill-opacity="1"
                          stroke="#71dd37"
                          stroke-opacity="1"
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke-dasharray="0"
                          class="apexcharts-area"
                          index="0"
                          clip-path="url(#gridRectMask6d4r14uz)"
                          pathTo="M 0 75C 13.649999999999999 75 25.35 15 39 15C 52.65 15 64.35 67.5 78 67.5C 91.65 67.5 103.35 37.5 117 37.5C 130.65 37.5 142.35 52.5 156 52.5C 169.65 52.5 181.35 15 195 15"
                          pathFrom="M 0 75C 12.459999999999999 75 23.14 15 35.6 15C 48.06 15 58.74 67.5 71.2 67.5C 83.66 67.5 94.34 37.5 106.8 37.5C 119.26 37.5 129.94 52.5 142.4 52.5C 154.86 52.5 165.54 15 178 15"
                        ></path>
                        <g
                          id="SvgjsG7267"
                          class="apexcharts-series-markers-wrap"
                          data-realIndex="0"
                        >
                          <g
                            id="SvgjsG7269"
                            class="apexcharts-series-markers"
                            clip-path="url(#gridRectMarkerMask6d4r14uz)"
                          >
                            <circle
                              id="SvgjsCircle7270"
                              r="1"
                              cx="-4"
                              cy="77"
                              class="apexcharts-marker no-pointer-events w251umjql"
                              stroke="transparent"
                              fill="transparent"
                              fill-opacity="1"
                              stroke-width="4"
                              stroke-opacity="1"
                              rel="0"
                              j="0"
                              index="0"
                              default-marker-size="1"
                            ></circle>
                            <circle
                              id="SvgjsCircle7271"
                              r="1"
                              cx="35"
                              cy="17"
                              class="apexcharts-marker no-pointer-events w96vv6l85"
                              stroke="transparent"
                              fill="transparent"
                              fill-opacity="1"
                              stroke-width="4"
                              stroke-opacity="1"
                              rel="1"
                              j="1"
                              index="0"
                              default-marker-size="1"
                            ></circle>
                          </g>
                          <g
                            id="SvgjsG7272"
                            class="apexcharts-series-markers"
                            clip-path="url(#gridRectMarkerMask6d4r14uz)"
                          >
                            <circle
                              id="SvgjsCircle7273"
                              r="1"
                              cx="74"
                              cy="69.5"
                              class="apexcharts-marker no-pointer-events wmujhvcal"
                              stroke="transparent"
                              fill="transparent"
                              fill-opacity="1"
                              stroke-width="4"
                              stroke-opacity="1"
                              rel="2"
                              j="2"
                              index="0"
                              default-marker-size="1"
                            ></circle>
                          </g>
                          <g
                            id="SvgjsG7274"
                            class="apexcharts-series-markers"
                            clip-path="url(#gridRectMarkerMask6d4r14uz)"
                          >
                            <circle
                              id="SvgjsCircle7275"
                              r="1"
                              cx="113"
                              cy="39.5"
                              class="apexcharts-marker no-pointer-events w2zzvk0bg"
                              stroke="transparent"
                              fill="transparent"
                              fill-opacity="1"
                              stroke-width="4"
                              stroke-opacity="1"
                              rel="3"
                              j="3"
                              index="0"
                              default-marker-size="1"
                            ></circle>
                          </g>
                          <g
                            id="SvgjsG7276"
                            class="apexcharts-series-markers"
                            clip-path="url(#gridRectMarkerMask6d4r14uz)"
                          >
                            <circle
                              id="SvgjsCircle7277"
                              r="1"
                              cx="152"
                              cy="54.5"
                              class="apexcharts-marker no-pointer-events wgce096ke"
                              stroke="transparent"
                              fill="transparent"
                              fill-opacity="1"
                              stroke-width="4"
                              stroke-opacity="1"
                              rel="4"
                              j="4"
                              index="0"
                              default-marker-size="1"
                            ></circle>
                          </g>
                          <g
                            id="SvgjsG7278"
                            class="apexcharts-series-markers"
                            clip-path="url(#gridRectMarkerMask6d4r14uz)"
                          >
                            <circle
                              id="SvgjsCircle7279"
                              r="6"
                              cx="191"
                              cy="17"
                              class="apexcharts-marker no-pointer-events wmq5hicqp"
                              stroke="#71dd37"
                              fill="#ffffff"
                              fill-opacity="1"
                              stroke-width="4"
                              stroke-opacity="1"
                              rel="5"
                              j="5"
                              index="0"
                              default-marker-size="6"
                            ></circle>
                          </g>
                        </g>
                      </g>
                      <g
                        id="SvgjsG7268"
                        class="apexcharts-datalabels"
                        // data:realIndex="0"
                      ></g>
                    </g>
                    <line
                      id="SvgjsLine7306"
                      x1="0"
                      y1="0"
                      x2="195"
                      y2="0"
                      stroke="#b6b6b6"
                      stroke-dasharray="0"
                      stroke-width="1"
                      stroke-linecap="butt"
                      class="apexcharts-ycrosshairs"
                    ></line>
                    <line
                      id="SvgjsLine7307"
                      x1="0"
                      y1="0"
                      x2="195"
                      y2="0"
                      stroke-dasharray="0"
                      stroke-width="0"
                      stroke-linecap="butt"
                      class="apexcharts-ycrosshairs-hidden"
                    ></line>
                    <g id="SvgjsG7308" class="apexcharts-yaxis-annotations"></g>
                    <g id="SvgjsG7309" class="apexcharts-xaxis-annotations"></g>
                    <g id="SvgjsG7310" class="apexcharts-point-annotations"></g>
                    <rect
                      id="SvgjsRect7311"
                      width="0"
                      height="0"
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fefefe"
                      class="apexcharts-zoom-rect"
                    ></rect>
                    <rect
                      id="SvgjsRect7312"
                      width="0"
                      height="0"
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fefefe"
                      class="apexcharts-selection-rect"
                    ></rect>
                  </g>
                  <rect
                    id="SvgjsRect7261"
                    width="0"
                    height="0"
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    opacity="1"
                    stroke-width="0"
                    stroke="none"
                    stroke-dasharray="0"
                    fill="#fefefe"
                  ></rect>
                  <g
                    id="SvgjsG7293"
                    class="apexcharts-yaxis"
                    rel="0"
                    transform="translate(-18, 0)"
                  ></g>
                  <g id="SvgjsG7259" class="apexcharts-annotations"></g>
                </svg>
                <div
                  class="apexcharts-legend"
                  style={{ maxHeight: "55px" }}
                ></div>
              </div> */}
            </Item>
          </Grid>
          <Grid item className="col-lg-2 col-6">
            <Item
              className="box-padding default-color round-border "
              sx={{ color: "inherit" }}
            >
              <Payment
                value="Sales"
                isUp={true}
                imgName="stats-vertical-wallet.png"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
        <Grid container spacing={2}>
          <Grid item className="col-lg-8 col-md-12">
            <Item
              sx={{ color: "inherit" }}
              className="d-flex flex-direction-row justify-content-between box-padding g-5 round-border"
            >
              <div>
                <p className="default-dark font-lg">Total Revenue</p>
                <div className="d-flex flex-direction-row align-items-center mb-2">
                  <div className="me-2">
                    <FiberManualRecordIcon
                      fontSize="xs"
                      className="me-2"
                      style={{ color: themeColor }}
                    />
                    2023
                  </div>
                  <div>
                    <FiberManualRecordIcon
                      fontSize="xs"
                      className="me-2"
                      style={{ color: themeColor }}
                    />
                    2022
                  </div>
                </div>
                <div>
                  <RevenueBar />
                </div>
              </div>
              <div>dd</div>
            </Item>
          </Grid>
          <Grid item className="col-lg-4 col-12">
            <Item className="round-border" sx={{ color: "inherit" }}>
              xs=2
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Analytics;
