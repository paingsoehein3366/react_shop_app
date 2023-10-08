import { Box, Button, ImageList, Typography } from "@mui/material";
import { useState } from "react";
import LoadingApp from "./LoadingApp";
import iphone14 from "../iPhone14.webp";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Prop {
    id: number,
    title: string,
    description: string,
    price: number,
    images: [0],
    category: string
}

const CenterApp = () => {
    const [productData, setProductData] = useState<Prop[]>([]);
    const dataFunction = async () => {
        const responeDataJson = await fetch("https://dummyjson.com/products");
        const responeData = await responeDataJson.json();
        const products = responeData.products
        setProductData(products)
    };
    const Image = productData.map(item => item.images[0].toString());
    const Title = productData.map(item => item.title);
    const Description = productData.map(item => item.description);

    window.addEventListener('load', dataFunction);
    if (!productData.length) {
        dataFunction();
        return <LoadingApp />;
    };

    return (
        <Box>
            <Box sx={{
                display: { xs: "block", sm: "block", md: "block", lg: "flex" },
                justifyContent: { xs: "center", sm: "center", md: "space-around" },
                alignItems: "center",
                textAlign: "center"
            }}>
                <ImageList sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowBackIcon sx={{
                            "&:hover": { cursor: "pointer", color: "gray" },
                            "&:active": { color: "black" }
                        }} />
                        <img src={Image[6]} alt="" />
                        <ArrowForwardIcon sx={{
                            "&:hover": { cursor: "pointer", color: "gray" },
                            "&:active": { color: "black" }
                        }} />
                    </Box>
                    <Box>
                        <img style={{ width: 150 }} src={Image[6]} alt="" />
                        <img style={{ width: 150 }} src={Image[6]} alt="" />
                        <img style={{ width: 150 }} src={Image[6]} alt="" />
                    </Box>
                    <Typography sx={{}}>{Title[6]}</Typography>
                    <Typography sx={{ fontFamily: "Arial", color: "#ED6D03" }}>price : $1499</Typography>
                    <Typography sx={{
                        fontFamily: "Arial",
                        fontSize: { xs: 11, sm: 13, md: 15, lg: 16 }
                    }}>{Description[6]}</Typography>
                    <Button variant="contained" color="warning">buy</Button>
                </ImageList>
                <ImageList sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowBackIcon sx={{
                            "&:hover": { cursor: "pointer", color: "gray" },
                            "&:active": { color: "black" },
                        }} />
                        <img style={{ width: 400 }} src={iphone14} alt="" />
                        <ArrowForwardIcon sx={{
                            "&:hover": { cursor: "pointer", color: "gray" },
                            "&:active": { color: "black" }
                        }} />
                    </Box>
                    <Box>
                        <img style={{ width: 150 }} src={iphone14} alt="" />
                        <img style={{ width: 150 }} src={iphone14} alt="" />
                        <img style={{ width: 150 }} src={iphone14} alt="" />
                    </Box>
                    <Typography sx={{}}>iPhone14</Typography>
                    <Typography sx={{ fontFamily: "Arial", color: "#ED6D03" }}>price : $1000</Typography>
                    <Typography sx={{
                        fontFamily: "Arial",
                        fontSize: { xs: 11, sm: 13, md: 15, lg: 16 }
                    }}>{Description[1]}</Typography>
                    <Button variant="contained" color="warning">buy</Button>
                </ImageList>
            </Box>
        </Box>
    )
};
export default CenterApp;