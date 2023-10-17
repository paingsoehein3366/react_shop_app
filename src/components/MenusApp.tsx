import { Box, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";

const MenusApp = () => {
    const Style = {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontFamily: "Arial",
        "&:hover": {
            background: "gray"
        },
        padding: 2,
        textDecoration: "none",
        color: "black"
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Link to={"/"} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                padding: 5,
                position: "absolute",
                height: 120,
                width: 50,
                textDecoration: "none",

            }}>
                <ClearIcon />
            </Link>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
            }}>
                <Typography variant="h5" sx={Style}>
                    <Link style={Style} to={"/"}>Home</Link>
                </Typography>
                <Typography variant="h5" sx={Style}>Iphone</Typography>
                <Typography variant="h5" sx={Style}>Computer</Typography>
                <Typography variant="h5" sx={Style}>
                    <Link style={Style} to={"/"}>Other</Link>
                </Typography>
                <Typography variant="h5" sx={Style}>
                    <Link style={Style} to={"/login"}>Sing in</Link>
                </Typography>
                <Typography variant="h5" sx={Style}>
                    <Link style={Style} to={"/createAccout"}>Sing out</Link>
                </Typography>
            </Box>
        </Box>
    )
};
export default MenusApp;