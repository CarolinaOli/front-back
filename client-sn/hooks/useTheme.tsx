import { createMuiTheme } from "@material-ui/core";
import { blue, indigo, } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800]
        },
        secondary: indigo,
    }
})

export default theme