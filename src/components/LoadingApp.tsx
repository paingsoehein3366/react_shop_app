import { Box, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

const LoadingApp = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column"
        }}>
            <CircularProgress sx={{ display: "flex", }} />
            <Typography sx={{ mt: 1, color: "gray" }}>loading</Typography>
        </Box>
    )
};
export default LoadingApp;