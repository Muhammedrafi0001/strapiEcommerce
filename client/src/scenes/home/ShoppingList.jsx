import React, { useEffect, useState } from 'react'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Item from '../../component/Item'
import { setItems } from '../../state'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingList = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("all")
    const items = useSelector((state) => state.cart.items)
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const handleChange = (event, vewValue) => {
        setValue(vewValue)
    }
    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJason = await items.json()
        dispatch(setItems(itemsJason.data))

    }
    useEffect(() => {
        getItems()
    }, [])

    const topRatedItems = items.filter(
        (item) => item.attributes.category === "topRated"
    )
    const newArrivelsItem = items.filter(
        (item) => item.attributes.category === "newArrivals"
    )
    const bestSellersItems = items.filter(
        (item) => item.attributes.category === "bestSellers"
    )


    return (
        <Box width="80%" margin="80px auto">
            <Typography variant='h3' textAlign="center">
                Our Featured<b>Products</b>
            </Typography>
            <Tabs
                textColor="primary"
                indicatorColor="primary"
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
                sx={{
                    m: '25px',
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap"
                    }
                }}
            >
               

                <Tab label="ALL" value="all" />
                <Tab label="NEW ARRIVALS" value="newArrivals" />
                <Tab label="BEST SELLERS" value="bestSellers" />
                <Tab label="TOP RATED" value="topRated" />

            </Tabs>
            <Box
                margin="0 auto"
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 300px)"
                justifyContent="space-around"
                rowGap="20px"
                columnGap="1.33%"
            >
                {
                    value === "all" && items.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))

                }
                {
                    value === "newArrivals" && newArrivelsItem.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))

                }
                {
                    value === "bestSellers" && bestSellersItems.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))

                }
                {
                    value === "topRated" && topRatedItems.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))

                }
            </Box>

        </Box>
    )
}

export default ShoppingList
