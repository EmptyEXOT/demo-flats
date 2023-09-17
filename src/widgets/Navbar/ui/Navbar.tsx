import React from 'react';
import {AppBar, Box, Button, Container, Stack, Toolbar, Typography} from "@mui/material";
import {AppImg} from "@/shared/ui/AppImg";
import Cart from './Cart.svg';
import Frame from './Frame.svg';
import Instagram from './Instagram.svg';
import Search from './Search (Traced).svg';
import VK from './VK.svg'
import Logo from './logo 1.png'

export const Navbar = () => {
    return (
        <Container maxWidth={'lg'}>
            <Box sx={{flexGrow: 1}}>
                <AppBar color={"transparent"} elevation={0} position={"fixed"}>
                    <Toolbar>
                        <Stack
                            sx={{
                                width: 1
                            }}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <AppImg alt={'inst'} src={Instagram}></AppImg>
                                <AppImg alt={'vk'} src={VK}></AppImg>
                                <AppImg alt={'facebook'} src={Frame}></AppImg>
                            </Stack>
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <AppImg alt={'logo'} src={Logo} quality={100}></AppImg>
                                <Typography color={'white'} variant="h4" component="div">
                                    WUNDERBEER
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <AppImg alt={'search'} src={Search}></AppImg>
                                <AppImg alt={'cart'} src={Cart}></AppImg>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>

    );
};

