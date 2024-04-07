import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Router } from "../pages";
import { BrowserRouter } from "react-router-dom";

const darkTheme = createTheme(
  {
    palette: {
      mode: "dark"
    }
  }
)

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
