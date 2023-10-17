import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';

const CreateAccoutApp = () => {
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
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "100vh", sm: "auto" }
            }}>

                <Typography variant="h5" sx={{ display: "flex", justifyContent: "center" }}>Create Accout Page</Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: 5,
                    }}>

                    <TextField placeholder="Fist Name" sx={{ width: 300 }} />
                    <TextField placeholder="Last Name" sx={{ width: 300, marginY: 3 }} />
                    <TextField placeholder="Email" sx={{ width: 300 }} />
                    <Box sx={{ display: "flex", width: 300, mt: 2, mb: 1 }}>
                        <input onClick={showPassword} type="checkbox" /><span>Show Password</span>
                    </Box>
                    <TextField type={sp.type} placeholder="Password" sx={{ width: 300, mb: 3 }} />
                    <Button sx={{ width: 300 }} variant="contained">create accout</Button>
                </Box>
            </Box>
        </Box>
    )
};
export default CreateAccoutApp;