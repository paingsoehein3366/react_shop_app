import { Box } from "@mui/material"
import '../App.css';

const MenuListApp = () => {
    return (
        <Box>
            <ul style={{
                display: "flex",
            }}>
                <li>All</li>
                <li>iphone</li>
                <li>computer</li>
                <li>other</li>
            </ul>
        </Box>
    )
};
export default MenuListApp;