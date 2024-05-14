import { Label, Margin, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography, colors, TextField, FormControl, OutlinedInput, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import pngwing from '../../assets/images/pngwing.com.png'
import rouletteBORD from '../../assets/images/output-onlinepngtools.png'
import { NavLink } from 'react-router-dom'

function Login() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className="home" sx={style.root}>
      <Box sx={{ position: 'absolute', width: '280px', height: '300px', border: '2px solid #0C339F', background: '#050528d6', borderRadius: '10px', top: '5%', right: '3%' }}>
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
          <Typography variant="body1" sx={{
            position: 'absolute',
            right: '-19%',
            transform: 'rotate(90deg)',
            bottom: '26%',
            fontSize: '12px',
            fontWeight: '500',
            textTransform: 'uppercase',
            color: 'white',
          }}>For amusement only</Typography>

          <Box component='form' sx={{
            width: '85%',
            padding: '10px 10px 0px 10px ',
            transform: 'rotate(90deg)',
            position: 'absolute',
            top: '6%',
            right: '5%',
          }}>
            <Typography variant="body1" sx={{
              background: 'linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900',
              fontSize: '20px',
            }}>MEMBER LOGIN</Typography>
            <FormControl fullWidth sx={{
              '&>div>div>input': {
                backgroundColor: '#170c0c17',
                borderRadius: '6px',
                border: '2px solid #0C339F',
                color: 'white',
              },
              '&>p': { color: 'white', fontSize: '13px', fontWeight: '400px', mb: 1 },
            }}>
              <Typography variant="body1" color="initial">Username</Typography>
              <TextField id="" label="" fullWidth placeholder='Username' size='small' />
            </FormControl>

            <FormControl fullWidth sx={{
              mt: 1.5,
              '&>div>input': {
                backgroundColor: '#170c0c17',
                borderRadius: '6px',
                color: 'white',
              },
              '&>div': {
                border: '2px solid #0C339F',
              },
              '&>p': { color: 'white', fontSize: '13px', fontWeight: '400px', mb: 1 },
            }}>
              <Typography variant="body1" color="initial">Password</Typography>
              <OutlinedInput fullWidth
                placeholder='Password'
                size='small'
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff sx={{ color: '#0C339F' }} /> : <Visibility sx={{ color: '#0C339F' }} />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <NavLink style={{ textDecoration: 'none' }}>
                <Box SX={{
                  textDecoration: 'none',
                  color: 'rgb(120, 50, 5) !important',
                  '&>p': { fontSize: '10px', color: 'white', fontWeight: "600", textDecoration: 'none', },
                }}>
                  <Typography variant="body1" color="initial" sx={{ mt: 3, color: 'white' }}>New User ? <span style={{ color: 'red' }}>Sign up here</span></Typography>
                </Box>
              </NavLink>
              <NavLink to='/dashboard' SX={{
                color: 'rgb(120, 50, 5) !important'
              }} >
                <Button role="button" className="golden-button" sx={{ mt: 3, }}>
                  <span className="golden-text">lOGIN</span>
                </Button>
              </NavLink>
            </Stack>
          </Box>
          <Box sx={{
            width: '365px', height: '50px', border: '2px solid #0C339F', background: '#050528d6', borderRadius: '10px', transform: 'rotate(90deg)',
            position: 'absolute',
            bottom: '31%',
            right: '53%',
          }}>
            <Box sx={{ width: '365px', height: '100%', position: 'relative' }}>
              <Stack direction='row'>
                <Box component='img' src={pngwing} sx={{ width: '40px', margin: '4px 10px 0px 10px', }}></Box>
                <Box>
                  <Typography variant="body1" sx={{
                    color: 'white', fontSize: '16px',
                    fontWeight: '800',
                    color: 'red',
                  }}>strictly for amusement only</Typography>

                  <Typography variant="body1" sx={{
                    color: 'white', fontSize: '12px',
                    fontWeight: '500',
                    color: 'white',
                  }}>
                    you should be 18 years and above to use this site
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        position: 'absolute',
        width: '215px',
        height: '123px',
        border: '2px solid #0C339F',
        backgroundColor: '#050528d6',
        borderRadius: '10px',
        bottom: '1%',
        right: '3%',
        padding: '10px',
        transform: 'rotate(90deg)',
        bottom: '11%',
        left: '24%',
      }}>
        <Stack direction='row' alignItems='center'>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '13px', mr: 1, }}>#</Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '11px', fontWeight: 600, }}>Register and PLAY FOR FREE</Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '13px', mr: 1, }}>#</Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '11px', fontWeight: 600, }}> Get 100 FREE CHIPS on every login  </Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '13px', mr: 1, }}>#</Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '11px', fontWeight: 600, }}> Great PRIZES and GIFTS to be won on surprise competition.  </Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '13px', mr: 1, }}>#</Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '11px', fontWeight: 600, }}> NO DEPOSITS (or) any charges required to play on the site  </Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '13px', mr: 1, }}>#</Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '11px', fontWeight: 600, }}> No Redemption (or) Cash Winnings.  </Typography >
        </Stack>
      </Box >
    </Box >
  )
}

export default Login

const style = {
  root: {
    maxWidth: '400px', width: '100%', backgroundColor: '#000000', height: '85vh', overflow: 'hidden', marginTop: 'auto', position: 'relative',
    backgroundImage: `url(${rouletteBORD})`, backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    // transform: 'rotate(-90deg) !important',
    // left: '22% !important',
  },
}