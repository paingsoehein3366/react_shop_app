import { Box } from "@mui/material"
import { useParams } from "react-router-dom";

const ResultMenu = () => {
    const param = useParams();
    const resultMenuId = param.id;
    console.log("resultMenuId :", resultMenuId);

    return (
        <Box>Hello</Box>
    )
};
export default ResultMenu