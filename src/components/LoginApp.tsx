import { Box, Button, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginApp = () => {
    const [sp, setSp] = useState({ type: "password" });
    const showPassword = () => {
        if (sp.type === "password") {
            setSp({ type: "text" })
        } else {
            setSp({ type: "password" })
        }
    }
    return (
        <Box>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                <Link to={"/menus"} style={{
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
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "100vh", sm: "auto" }
                }}>
                <Typography variant="h5" sx={{ display: "flex", justifyContent: "center", mb: 5 }}>Login Page</Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <TextField placeholder="Email" sx={{ minWidth: 300 }} />
                    <Box sx={{ display: "flex", width: 300, mt: 2, mb: 1 }}>
                        <input onClick={showPassword} type="checkbox" /><span>Show Password</span>
                    </Box>
                    <TextField type={sp.type} placeholder="Password" sx={{ minWidth: 300, mb: 3 }} />
                    <Button sx={{ minWidth: 300 }} variant="contained">Log in</Button>
                </Box>
            </Box>
        </Box>
    )
};
export default LoginApp;