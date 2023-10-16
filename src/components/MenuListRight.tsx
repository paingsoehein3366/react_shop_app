
import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';

const MenuListRightApp = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{}}>
                <AddShoppingCartSharpIcon sx={{ fontSize: { xs: 35, sm: 40, color: "gray" } }} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Link
                    to={""}
                    style={{ textDecoration: "none" }}
                >
                    <Button sx={{ marginX: 2 }} variant="contained">Sing in</Button>
                </Link>
                <Link
                    to={""}
                    style={{ textDecoration: "none" }}
                >
                    <Button variant="contained" color="success">Sing up</Button>
                </Link>
            </Box>
        </Box>
    )
};
export default MenuListRightApp;