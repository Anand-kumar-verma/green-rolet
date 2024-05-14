import { Margin } from '@mui/icons-material'
import { Box, Button, Drawer, IconButton, Stack, Typography, colors } from '@mui/material'
import React, { useEffect, useState } from 'react'
import roulette from '../../assets/images/rolette.jpeg'
import rouletteBORD from '../../assets/images/rolettetable.png'
import { NavLink } from 'react-router-dom'
import rollatesidebar from '../../assets/images/roulettesidebar.png'
import CloseIcon from '@mui/icons-material/Close';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Box className="home" sx={style.root}>
      <Box sx={{
        width: '100%', height: '100%', position: 'absolute',

      }}>
        <Box direction={'row'} sx={style.winnerlooserouter}>
          <Box sx={style.winnerLooserList2}>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>Min-Play</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>in 1 0 out 10</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>Max-play</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>in 5000 out 50000</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        width: '100%', height: '100%', position: 'absolute',

      }}>
        <Box direction={'row'} sx={style.winnerlooserouter2}>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
          </Box>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
          </Box>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
          </Box>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        width: '100%', height: '100%', position: 'absolute',

      }}>
        <Box direction={'row'} sx={style.winnerlooserouter3}>
          <Box sx={style.winnerLooserList3}>
            <Typography variant="body1" color="initial" sx={{ color: 'red' }}>99</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={style.bettable}>
        <Stack direction='row' justifyContent='end' sx={{ height: '7.14%' }}>
          <IconButton sx={style.btn1}>
            <Typography>2 to 1</Typography>
          </IconButton>
          <IconButton sx={style.btn1}>
            <Typography>2 to 1</Typography>
          </IconButton>
          <IconButton sx={style.btn1}>
            <Typography>2 to 1</Typography>
          </IconButton>
        </Stack>
        <Stack direction='row' justifyContent='end' sx={{ height: '28.56%' }}>
          <Stack sx={{ width: '20%', height: '50%' }}>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                19to36
              </Typography>
            </IconButton>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '20%', height: '100%' }}>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '60%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>36</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>33</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>30</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>27</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>35</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>32</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>29</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>26</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>34</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>31</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>28</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>25</Typography></IconButton>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='end' sx={{ height: '28.56%' }}>
          <Stack sx={{ width: '20%', height: '50%' }}>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '20%', height: '100%' }}>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '60%', height: '100%', display: 'flex', flexWrap: 'wrap', }}>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>24</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>21</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>18</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>15</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>23</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>20</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>17</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>14</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>22</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>19</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>16</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>13</Typography></IconButton>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='end' sx={{ height: '28.56%' }}>
          <Stack sx={{ width: '20%', height: '50%' }}>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '20%', height: '100%' }}>
            <IconButton sx={style.btn3}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '60%', height: '100%', display: 'flex', flexWrap: 'wrap', }}>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>12</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>9</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>6</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>3</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>11</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>8</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>5</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>2</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>10</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>7</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography>4</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}><Typography>1</Typography></IconButton>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='end' sx={{ height: '7.14%' }}>
          <Box sx={{
            background: 'white', width: '100%', border: '1px solid white', transform: 'rotate(180deg)', position: 'relative', clipPath: 'polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)',
            '&::before': { clipPath: 'polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)', content: "''", position: "absolute", width: '100%', height: '111%', background: '#008C34' },
          }}>
            <IconButton sx={style.btn4}>0</IconButton>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ width: '200px', height: "200px", position: 'absolute', borderRadius: '50%', bottom: '1%', right: '10%' }} >
        <Box component='img' src={roulette} className='rotating-element'></Box>
      </Box>
      <Box sx={{
        width: '25px', height: '100%',
      }}>
        <Box sx={style.naiming6} component={NavLink} onClick={() => { setOpen(!open) }}>
          <Typography variant="body1" color="initial"></Typography>
          <Typography variant="body1" color="initial">NEIGHTBOUR BET</Typography>
        </Box>
        <Box sx={style.naiming}>
          <Typography variant="body1" color="initial">POINT BALANCE</Typography>
          <Typography variant="body1" color="initial">0.08</Typography>
        </Box>
        <Box sx={style.naiming2}>
          <Typography variant="body1" color="initial">Name</Typography>
          <Typography variant="body1" color="initial">Raadhe</Typography>
        </Box>
        <Box sx={style.naiming3}>
          <Typography variant="body1" color="initial">GAME HISTORY</Typography>
        </Box>
        <Box sx={style.naiming4}>
          <Typography variant="body1" color="initial"></Typography>
          <Typography variant="body1" color="initial">LEAVE TABLE</Typography>
        </Box>
        <Box sx={style.naiming5}>
          <Typography variant="body1" color="initial"></Typography>
          <Typography variant="body1" color="initial">BET CONFIRM</Typography>
        </Box>
      </Box>
      <Box className="countdown" sx={style.countdownOuter}>
        <Box className="wrapper">
          <Box className="pie spinner"></Box>
          <Box className="pie filler"></Box>
          <Box className="mask"></Box>
        </Box>
      </Box>
      <Drawer sx={{ '&>div': { background: '#0000009e', width: '400px', height: '85vh', } }} anchor='top' open={open} onClose={() => { setOpen(!open) }}>
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', right: '20px', bottom: '20px', zIndex: '5000000', }}>
            <NavLink onClick={() => { setOpen(!open) }}>
              <CloseIcon sx={{ color: 'white', fontSize: '40px' }} />
            </NavLink>
          </Box>
          <Box sx={{ width: '100%', height: '100%', position: 'relative', }}>
            <Box sx={{
              position: 'absolute',
              transform: 'rotate(90deg)',
              width: 500,
              height: 173,
              top: '35%',
              left: '-14%',

            }}>
              <Box component='img' src={rollatesidebar}></Box>
              <Box component={NavLink} onClick={() => { alert('1st alert ') }} sx={{
                width: '143px',
                height: '62px',
                position: 'absolute',
                top: '33%',
                left: '7%',
                clipPath: 'polygon(0 0, 65% 0, 100% 100%, 0% 100%)',
                // background: 'red',
              }}></Box>
              <Box component={NavLink} onClick={() => { alert('2nd alert ') }} sx={{
                width: 133,
                height: 62,
                position: 'absolute',
                top: '33%',
                left: '26%',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 35% 100%)',
                WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 35% 100%)',
                // backgroundColor: 'green',
              }}></Box>
              <Box component={NavLink} onClick={() => { alert('3rd alert ') }} sx={{
                width: 125,
                height: 62,
                position: 'absolute',
                top: '33%',
                left: '53%',
                // backgroundColor: 'yellow',
              }}></Box>
              <Box component={NavLink} onClick={() => { alert('4th alert ') }} sx={{
                width: 73,
                height: 62,
                position: 'absolute',
                top: '33%',
                right: '7%',
                // backgroundColor: 'black',
                borderRadius: '25px',
              }}></Box>
            </Box>

          </Box>
        </Box>
      </Drawer >
    </Box >
  )
}

export default Home

const style = {
  root: {
    maxWidth: '400px', width: '100%', backgroundColor: '#000000', height: '85vh', overflow: 'hidden', marginTop: 'auto', position: 'relative',
    backgroundImage: `url(${rouletteBORD})`, backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    // transform: 'rotate(-90deg) !important',
    // left: '22% !important',
  },

  red: { '&>p': { background: 'red', width: '60%', borderRadius: '60%', color: 'white', fontSize: '10px', fontWeight: 600, color: 'white', } },
  black: { '&>p': { background: 'black', width: '60%', borderRadius: '60%', color: 'white', fontSize: '10px', fontWeight: 600, color: 'white', } },
  bettable: { width: '40%', height: '63%', position: 'absolute', left: '30%', top: '2%' },
  btn1: {
    padding: 0, border: '1px solid white', width: '20%', borderRadius: '0px', height: '100%', transform: 'rotate(-180deg)', '&>p': {
      fontSize: '10px', fontWeight: 600, color: 'white',
    }
  },
  btn2: { padding: 0, border: '1px solid white', width: '33.33333%', borderRadius: '0px', height: '25%', transform: 'rotate(-180deg)', },
  btn3: {
    padding: 0, border: '1px solid white', width: '100%', borderRadius: '0px', fontSize: '10px', color: 'white', fontWeight: 600, height: '100%',
    '&>p': { transform: 'rotate(-270deg)', fontSize: '12px', fontWeight: 600, color: 'white', }
  },
  btn4: {
    padding: 0, width: '33.33333%', borderRadius: '0px', height: '25%', fontSize: '12px', fontWeight: 900, color: 'white', position: 'relative',
    left: '43%', background: 'green', width: '20px', height: '20px', borderRadius: '50%',
  },
  rotatingElement: { animation: '$rotateInfinite 4s linear infinite', },
  '@keyframes rotateInfinite': { '0%': { transform: 'rotate(0deg)', }, '100%': { transform: 'rotate(360deg)', }, },
  naiming: {
    background: 'linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)', width: '120px',
    transform: 'rotate(90deg)', position: 'absolute', top: '7%', left: '-7%', borderRadius: '5px',
    '&>p:nth-child(1)': { color: 'black', fontSize: '13px', fontWeight: '600', textAlign: 'center', },
    '&>p:nth-child(2)': { color: 'white', fontSize: '13px', fontWeight: '600', padding: '5px 5px', background: '#15158f', width: '80%', margin: 'auto', marginBottom: '5px', borderRadius: '2px', },
  },
  naiming2: {
    background: 'linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)', width: '120px',
    transform: 'rotate(90deg)', position: 'absolute', top: '28%', left: '-7%', borderRadius: '5px',
    '&>p:nth-child(1)': { color: 'black', fontSize: '13px', fontWeight: '600', textAlign: 'center', },
    '&>p:nth-child(2)': { color: 'white', fontSize: '13px', fontWeight: '600', padding: '5px 5px', background: '#15158f', width: '80%', margin: 'auto', marginBottom: '5px', borderRadius: '2px', },
  },
  naiming3: {
    background: 'linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)', width: '120px',
    transform: 'rotate(90deg)', position: 'absolute', top: '60%', left: '-11%', borderRadius: '5px', padding: '15px',
    '&>p:nth-child(1)': { color: 'black', fontSize: '13px', fontWeight: '600', textAlign: 'center', },
    '&>p:nth-child(2)': { color: 'white', fontSize: '13px', fontWeight: '600', padding: '5px 5px', background: '#15158f', width: '80%', margin: 'auto', marginBottom: '5px', borderRadius: '2px', },
  },
  naiming4: {
    background: 'red', width: '120px',
    transform: 'rotate(90deg)', position: 'absolute', bottom: '8%', left: '-9%', borderRadius: '5px',
    '&>p:nth-child(1)': { color: 'black', fontSize: '13px', fontWeight: '600', textAlign: 'center', },
    '&>p:nth-child(2)': { color: 'white', fontSize: '13px', fontWeight: '600', padding: '5px 5px', background: 'red', width: '80%', margin: 'auto', marginBottom: '5px', borderRadius: '2px', },
  },
  naiming5: {
    background: 'red', width: '120px',
    transform: 'rotate(90deg)', position: 'absolute', bottom: '34%', left: '5%', borderRadius: '5px',
    '&>p:nth-child(1)': { color: 'black', fontSize: '13px', fontWeight: '600', textAlign: 'center', },
    '&>p:nth-child(2)': { color: 'white', fontSize: '13px', fontWeight: '600', padding: '5px 5px', background: 'red', width: '80%', margin: 'auto', marginBottom: '5px', borderRadius: '2px', },
  },
  naiming6: {
    background: 'linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)', width: '120px',
    transform: 'rotate(90deg)', position: 'absolute', top: '7%', left: '7%', borderRadius: '5px', textAlign: 'center',
    '&>p:nth-child(1)': { color: 'black', fontSize: '13px', fontWeight: '600', textAlign: 'center', },
    '&>p:nth-child(2)': { color: 'white', fontSize: '13px', fontWeight: '600', padding: '5px 5px', background: '#15158f', width: '80%', margin: 'auto', marginBottom: '5px', borderRadius: '2px', },
  },
  countdownOuter: {
    position: 'absolute', width: '75px', height: '75px', background: 'black', bottom: '4.5%', left: '15%',
    border: '2px solid white', borderRadius: '10px', outline: '10px solid black', boxSizing: 'border-box',
  },
  winnerlooserouter: {
    padding: '2px', border: '2px solid #C9A553', position: 'absolute', right: '-2%', transform: 'rotate(90deg)',
    top: '28%', width: '120px', borderRadius: '5px',
  },
  winnerlooserouter2: {
    padding: '2px', border: '2px solid #C9A553', position: 'absolute', right: '0%', transform: 'rotate(90deg)',
    top: '8%', width: '100px', borderRadius: '5px',
  },
  winnerlooserouter3: {
    padding: '2px', border: '2px solid #C9A553', position: 'absolute', right: '2%', transform: 'rotate(90deg)',
    top: '48%', width: '70px', height: '50px', borderRadius: '5px', background: 'black',
  },
  winnerLooserList: {
    display: 'flex', justifyContent: 'space-around', width: '100%',
    '&>p:nth-child(1)': { fontSize: '12px', fontWeight: '900', color: 'yellow' },
    '&>p:nth-child(2)': { fontSize: '12px', fontWeight: '900', color: '#90ff90' },
    '&>p:nth-child(3)': { fontSize: '12px', fontWeight: '900', color: 'red' },
  },
  winnerLooserList2: {
    width: '100%',
    '&>p': { fontSize: '12px', fontWeight: '600', color: 'yellow', textAlign: 'center' }
  },
  winnerLooserList3: {
    width: '100%',
    '&>p': { fontSize: '35px', fontWeight: '600', color: 'yellow', textAlign: 'center' }
  },
}