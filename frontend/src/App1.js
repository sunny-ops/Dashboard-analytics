import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

function App1() {
  const [selectedColor, setSelectedColor] = useState("#2196F3"); // Default color

  const handleChangeColor = (newColor) => {
    setSelectedColor(newColor);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: selectedColor,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ColorSample
          color="#2196F3"
          onClick={() => handleChangeColor("#2196F3")}
        />
        <ColorSample
          color="#E91E63"
          onClick={() => handleChangeColor("#E91E63")}
        />
        {/* Add more color samples as needed */}
      </div>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
    </ThemeProvider>
  );
}

function ColorSample({ color, onClick }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        margin: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

export default App1;
