import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { Button, Box, Typography, useTheme, IconButton } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { shades } from '../theme'

import { addTocart} from '../state'


const Item = ({ item, width }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [isHoverd, setIsHoverd] = useState(false)
    const {
        palette: { neutral },
    } = useTheme()

    const { category, price, name, image } = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: { url },

                }
            }
        }
    } = image;

    return (
        <Box width={width}>
            <Box position="relative"
                onMouseOver={() => setIsHoverd(true)}
                onMouseOut={() => setIsHoverd(false)}

            >
                <img
                    alt={item.name}
                    width="300px"
                    height="400px"
                    src={`http://localhost:1337${url}`}

                    onClick={() => navigate(`/item/${item.id}`)}
                    style={{ cursor: 'pointer' }}
                />
                <Box
                    display={isHoverd ? "block" : "none"}
                    position="absolute"
                    bottom="10%"
                    left="0"
                    width="100%"
                    padding="0 5%"
                >
                    <Box display="flex" justifyContent="space-between">
                        {/* .Amount */}
                        <Box
                            display="flex"
                            alignItems="center"
                            backgroundColor={shades.neutral[100]}
                            borderRadius="3px"
                        >
                            
                            <IconButton
                                onClick={() => setCount(Math.max(count -1, 1))}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <Typography color={shades.primary[300]}>
                                {count}
                            </Typography>
                            <IconButton
                                onClick={() => setCount(count + 1)}>
                            
                                <AddIcon />
                            </IconButton>
                        </Box>
                        {/* Button */}
                        <Button
                            onClick={() => { dispatch(addTocart({ item: { ...item, count } })) }}
                            sx={{
                                backgroundColor: shades.primary[300], color: "white"
                            }}
                        >
                            ADD TO CART
                        </Button>
                    </Box>

                </Box>

            </Box>
            <Box mt="3px">
            
                <Typography variant="subtitle2"
                color={neutral.dark}
                 >
                    {
                        category  .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}

                </Typography>
                <Typography>
                    {name}
                </Typography>
                <Typography fontWeight="bold">
                    ${price}
                </Typography>
            </Box>
        </Box>
    )
}

export default Item
