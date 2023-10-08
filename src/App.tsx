import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CenterApp from './components/CenterApp';
import LoadingApp from './components/LoadingApp';
import MenuListApp from './components/MenuListApp';
import MenuListRightApp from './components/MenuListRight';

interface Prop {
  id: number,
  title: string,
  description: string,
  price: number,
  images: [0],
  category: string
}
const App = () => {
  const [productData, setProductData] = useState<Prop[]>([]);
  const [inputData, setInputData] = useState({ name: "" });

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

  const showData = productData.filter(item => item.title.toLowerCase().includes(inputData.name))

  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-around",
        mt: 5,

      }}>
        <Box><MenuListApp /></Box>
        <Box>
          <TextField placeholder='search products name'
            sx={{
              width: { xs: 200, sm: 250, md: 350, lg: 400 }
            }}
            onChange={(evt) => {
              setInputData({ ...inputData, name: evt.target.value.toLowerCase() });
            }} />
          <Box sx={{
            bgcolor: "#ffffff",
            width: { xs: 170, sm: 220, md: 319, lg: 370 },
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingX: 1.7,
            border: "1px solid gray",
            borderTop: "none",
            position: "absolute",
          }}
          >
            {showData.map(item => {
              if (!inputData.name) return null;
              return (
                <Link
                  to={`/resultMenu/${item.id}`}
                  key={item.id}
                  style={{
                    cursor: "grab",
                    textDecoration: "none",
                  }}
                >
                  <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                    <Box>
                      <Typography sx={{ fontFamily: "Arial", "&:hover": { color: "blue" } }}>{item.title}</Typography>
                      <Typography sx={{
                        fontSize: 13,
                        color: "#514e4e",
                        fontFamily: "Arial",
                        display: { xs: "none", sm: "inline" },
                      }}>{item.description}</Typography>
                    </Box>
                    <Typography sx={{ color: "black", fontFamily: "Arial", }}>${item.price}</Typography>
                  </Box>
                  <Box sx={{
                    width: {
                      marginBottom: 25,
                      xs: 170, sm: 220, md: 320, lg: 370,
                      height: "1px",
                      background: "#9e9696",
                    },
                  }}></Box>
                </Link>
              )
            })}
          </Box>
        </Box>
        <Box><MenuListRightApp /></Box>
      </Box>
      <Box sx={{}}>
        <CenterApp />
      </Box>
    </Box >
  );
}

export default App;
