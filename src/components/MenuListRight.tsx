
import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";

const MenuListRightApp = () => {
    return (
        <Box>
            <Link to={""}>
                <Button variant="contained">Sing in</Button>
            </Link>
            <Link to={""}>
                <Button sx={{ marginX: 2 }} variant="contained" color="success">Sing up</Button>
            </Link>
        </Box>
    )
};
export default MenuListRightApp;