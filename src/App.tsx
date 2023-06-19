import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';

import { Header } from "./components/header";
import { AuthenticatedApp } from "./authenticated-app";

import { theme } from "./assets/theme";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ToastContainer />
      <AuthenticatedApp/>
    </ThemeProvider>
  );
}

export default App;
