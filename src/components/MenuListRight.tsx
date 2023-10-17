
import { Box, Button, Dialog, DialogContent } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useState } from "react";
import LoginApp from "./LoginApp";
import CreateAccoutApp from "./CreateAccoutApp";

const MenuListRightApp = () => {
    const [open, setOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{}}>
                <AddShoppingCartSharpIcon sx={{ fontSize: { xs: 35, sm: 40, color: "gray" }, cursor: "pointer" }} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Button
                    sx={{ marginX: 2 }}
                    variant="contained"
                    onClick={() => setOpen(true)}
                >Sing in</Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => { setCreateOpen(true) }}>Sing up</Button>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent sx={{ height: "45vh", display: "flex", justifyContent: "center" }}>
                    <LoginApp />
                </DialogContent>
            </Dialog>
            <Dialog open={createOpen} onClose={() => setCreateOpen(false)}>
                <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CreateAccoutApp />
                </DialogContent>
            </Dialog>
        </Box>
    )
};
export default MenuListRightApp;