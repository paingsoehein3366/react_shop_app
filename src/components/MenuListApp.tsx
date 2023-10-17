import { Box, Typography } from "@mui/material"
import '../App.css';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuListApp = () => {
    const [data, setData] = useState();

    return (
        <Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <ul style={{
                    display: "flex",
                }}>
                    <li>Home</li>
                    <li>Iphone</li>
                    <li>Computer</li>
                    <li>Other</li>
                </ul>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
                <Link to={"/menus"}>
                    <ListTwoToneIcon
                        sx={{ fontSize: { xs: 35, sm: 40, color: "gray" } }}
                    />
                </Link>
            </Box>
        </Box>
    )
};
export default MenuListApp;