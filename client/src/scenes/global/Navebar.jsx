import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Badge, Box, IconButton } from '@mui/material'
import {
    PersonOutline,
    ShoppingCartOutlined,
    MenuOutlined,
    SearchOffOutlined
} from '@mui/icons-material'

import {setCartIsOpen} from '../../state'

import { useNavigate } from 'react-router-dom'
import { shades } from '../../theme'

const Navebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

const cart = useSelector((state)=> state.cart.cart)


    return (
        <Box
            display="flex"
            alignItems="center"
            width="100%"
            height="60px"
            backgroundColor="white"
            color="black"
            position="fixed"
            top="0"
            left="0"
            zIndex="1"
        >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box
                    onClick={() => navigate('/')}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                    color={shades.secondery[500]}
                >

                </Box>
                <Box
                    display="flex"
                    justifyContent="spase-between"
                    columnGap="20px"
                    zIndex="2"
                >
                    <IconButton sx={{ color: "black" }}>
                        <SearchOffOutlined  />
                    </IconButton>
                    <IconButton sx={{ color: "black" }} >
                        <PersonOutline />
                    </IconButton>
                    <Badge 
                    badgeContent={cart.length}
                    color="secondary"
                    invisible={cart.length===0}
                    sx={{
                        "& .MuiBadge-badge":{
                            right:5,
                            top:5,
                            padding:"0 4px",
                            height:"14px",
                            minWidth:"13px",
                        },
                    }}
                    >
                    <IconButton
                    onClick={()=> dispatch(setCartIsOpen({}))}
                    sx={{ color: "black" }} >
                        <ShoppingCartOutlined />
                    </IconButton>
                    </Badge>

                    <IconButton  sx={{ color: "black" }}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Navebar
