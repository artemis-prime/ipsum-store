/**
 * This "shim" file is necessary to make all the compilers / interpreters happy.
 * Please see comments in './rawMuiTheme.mjs'
 */
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import raw from "./rawMuiTheme";
export default responsiveFontSizes(createTheme(raw));
