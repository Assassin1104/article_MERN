import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import LogoImage from '../../assets/img/sign/logo.png'
import AddCart from '../../assets/img/cart.svg'

export default function Header() {
    return (
        <div>
            <Container maxWidth="lg">
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ height: '128px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                            <img src={`${LogoImage}`} style={{ width: '176px', height: '66px' }} />
                        </Typography>
                        <nav style={{ display: 'flex', alignSelf: 'center'}}>
                            <img src={`${AddCart}`} style={{ my: 1, mx: 1.5, width: '32px', height: '34px', alignSelf: 'center' }} />
                            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5, ml: 4, color: 'white', backgroundColor: '#F05D61', borderColor: '#F05D61' }}>
                                Become a Local Expert
                            </Button>
                            <Button href="#" variant="text" sx={{ my: 1, mx: 1.5, color: '#F05D61' }}>
                                Login
                            </Button>
                        </nav>
                        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5, color: 'white', backgroundColor: '#F05D61', borderColor: '#F05D61' }}>
                            Sign up
                        </Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    )
}

