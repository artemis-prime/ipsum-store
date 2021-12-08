/**
 * This "shim" file is necessary to make all the compilers / interpreters happy.
 * Please see comments in './rawMuiTheme.mjs'
 */
import { createTheme } from "@mui/material/styles"
import raw from "./rawMuiTheme"
export default createTheme(raw)
