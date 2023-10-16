import { Box } from "@mui/material"
import '../App.css';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';

const MenuListApp = () => {
    return (
        <Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <ul style={{
                    display: "flex",
                }}>
                    <li>All</li>
                    <li>iphone</li>
                    <li>computer</li>
                    <li>other</li>
                </ul>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
                <ListTwoToneIcon sx={{ fontSize: { xs: 35, sm: 40, color: "gray" } }} />
            </Box>
        </Box>
    )
};
export default MenuListApp;