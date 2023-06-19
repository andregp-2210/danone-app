import { createTheme } from "@mui/material/styles";
import { colors } from "./color-palette";

const theme = createTheme({
  palette: {
    primary: { main: colors[400] },
  },
});

export { theme };
