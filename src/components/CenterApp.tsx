import { Box, Button, Dialog, DialogContent, DialogContentText, ImageList, Typography } from "@mui/material";
import { useState } from "react";
import LoadingApp from "./LoadingApp";
import iphone14 from "../iPhone14.webp";
import iphone14C from "../14Purple4_900x.jpeg";
import iphone14EndPhoto from "../iphone14EndPhoto.jpeg";
import GalaxyBookPro from "../samsungGalaxyBook.jpeg";
import Galaxy_Book_Pro360_c3b from "../Galaxy_Book_Pro360_c3b.avif";
import Computer from "../computer.jpeg";
import KyawKyi from "../kyawkyi.jpg";

interface Prop {
    id: number,
    title: string,
    description: string,
    price: number,
    images: [0],
    category: string,
    thumbnail: string,
}

const CenterApp = () => {
    const [open, setOpen] = useState(false);
    const [productData, setProductData] = useState<Prop[]>([]);
    const [changePhotoValue, setChangePhotoValue] = useState({ Image: iphone14 });
    const [changeComputerPhotoValue, setChangeComputerPhotoValue] = useState({ Image: Computer });
    if (!changeComputerPhotoValue.Image) return <LoadingApp />
    const dataFunction = async () => {
        const responeDataJson = await fetch("https://dummyjson.com/products");
        const responeData = await responeDataJson.json();
        const products = responeData.products
        setProductData(products)
    };
    window.addEventListener('load', dataFunction);
    if (!productData.length) {
        dataFunction();
        return <LoadingApp />;
    }
    const Title = productData.map(item => item.title);
    const Description = productData.map(item => item.description);
    const Thumbnail = productData.map(item => item.thumbnail);

    return (
        <Box>
            <Box sx={{
                display: { xs: "block", sm: "block", md: "block", lg: "flex" },
                justifyContent: { xs: "center", sm: "center", md: "space-around" },
                alignItems: "center",
                textAlign: "center"
            }}>
                <ImageList sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center", bgcolor: "green", }}>
                        <img style={{ width: 300 }} src={changeComputerPhotoValue.Image} alt="" />
                    </Box>
                    <Box>
                        <img
                            onClick={() => {
                                setChangeComputerPhotoValue({ Image: Thumbnail[7] })
                            }}
                            style={{
                                width: 130,
                                cursor: "pointer"
                            }}
                            src={Thumbnail[7]} alt="" />
                        <img
                            onClick={() => {
                                setChangeComputerPhotoValue({ Image: GalaxyBookPro })
                            }}
                            style={{
                                width: 120,
                                cursor: "pointer",
                            }}
                            src={GalaxyBookPro} alt="" />
                        <img
                            onClick={() => {
                                setChangeComputerPhotoValue({ Image: Galaxy_Book_Pro360_c3b })
                            }}
                            style={{
                                width: 110,
                                cursor: "pointer",
                            }}
                            src={Galaxy_Book_Pro360_c3b} alt="" />
                    </Box>
                    <Typography sx={{}}>{Title[6]}</Typography>
                    <Typography sx={{ fontFamily: "Arial", color: "#ED6D03" }}>price : $1499</Typography>
                    <Typography sx={{
                        fontFamily: "Arial",
                        fontSize: { xs: 11, sm: 13, md: 15, lg: 16 }
                    }}>{Description[6]}</Typography>
                    <Button onClick={() => setOpen(true)} sx={{ mt: 2 }} variant="contained" color="warning">buy</Button>
                </ImageList>
                <ImageList sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img style={{ width: 300 }} src={changePhotoValue.Image} alt="" />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img
                            onClick={() => {
                                setChangePhotoValue({ Image: iphone14 })
                            }}
                            style={{
                                width: 130,
                                cursor: "pointer",
                            }}
                            src={iphone14} alt="" />
                        <img onClick={() => {
                            setChangePhotoValue({ Image: iphone14C })
                        }} style={{ width: 110, cursor: "pointer" }} src={iphone14C} alt="" />
                        <img onClick={() => {
                            setChangePhotoValue({ Image: iphone14EndPhoto })
                        }} style={{ width: 130, marginLeft: 10, cursor: "pointer" }} src={iphone14EndPhoto} alt="" />
                    </Box>
                    <Typography sx={{}}>iPhone14</Typography>
                    <Typography sx={{ fontFamily: "Arial", color: "#ED6D03" }}>price : $1000</Typography>
                    <Typography sx={{
                        fontFamily: "Arial",
                        fontSize: { xs: 11, sm: 13, md: 15, lg: 16 }
                    }}>{Description[1]}</Typography>
                    <Button onClick={() => setOpen(true)} sx={{ mt: 2 }} variant="contained" color="warning">buy</Button>
                </ImageList>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    {/* <img style={{ width: "80%" }} src={KyawKyi} alt="" /> */}
                    <DialogContentText>ဖေသာ ရှိလို့လား ဇာဇာလုပ်နေလုပ်နေ 😂😂😂</DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    )
};
export default CenterApp;
