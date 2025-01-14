"use client"

import * as React from 'react';
import { GitHub, LinkedIn, X } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const externaLinks = {
    'github': "http://www.github.com/andrewunifei",
    'linkedin': "https://www.linkedin.com/in/andrew-enrique-oliveira-b6188b1a5/",
    'x': "https://x.com/address0x"
}

export default function CleanCodeHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box className="flex justify-between items-center py-10">
            <h1 className="text-3xl font-helvetica">Resumo Clean Code</h1>
            <Box  className="flex justify-between items-center w-32">
                <a href={externaLinks['github']} target="_blank"><GitHub /></a>
                <a href={externaLinks['linkedin']} target="_blank"><LinkedIn /></a>
                <a href={externaLinks['x']} target="_blank"><X /></a>  
                <div>
                    <MenuIcon
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className='cursor-pointer'
                    > 
                    </MenuIcon>       
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Índice</MenuItem>
                        <MenuItem onClick={handleClose}>Andrew's site</MenuItem>
                        <MenuItem onClick={handleClose}>Trading</MenuItem>
                    </Menu> 
                </div>   
            </Box>
        </Box>
    )
}