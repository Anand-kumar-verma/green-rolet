import { Box,  IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import roulette from '../../assets/images/rolette.jpeg'
import rouletteBORD from '../../assets/images/rolettetable.png'
import ball from "../../assets/images/images.png"


function Home() {

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
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                19to36
              </Typography>
            </IconButton>
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '20%', height: '100%' }}>
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '60%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>

            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('bit 10 value!');
            }}><Typography onClick={() => {
              alert('You clicked me!');
            }}>36 </Typography>
            </IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('bit 10 value!');
            }}><Typography onClick={() => {
              alert('You clicked me!');
            }}>33</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('bit 10 value!');
            }}><Typography onClick={() => {
              alert('Lose 10!');
            }}>30</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('bit 10 value!');
            }}><Typography onClick={() => {
              alert('lose!');
            }}>27</Typography></IconButton>

            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>35</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>32</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>29</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>26</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }}><Typography onClick={() => {
              alert('You clicked me!');
            }}>34</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('10 bit value!');
            }}><Typography onClick={() => {
              alert('You clicked me!');
            }}>31</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('10 bit value!');
            }}><Typography onClick={() => {
              alert('You clicked me!');
            }}>28</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('10 bit value!');
            }}><Typography onClick={() => {
              alert('You clicked me!')
            }}>25</Typography></IconButton>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='end' sx={{ height: '28.56%' }}>
          <Stack sx={{ width: '20%', height: '50%' }}>
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '20%', height: '100%' }}>
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '60%', height: '100%', display: 'flex', flexWrap: 'wrap', }}>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>24</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>21</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>18</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>15</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>23</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>20</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>17</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>14</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}> <Typography>22</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography >19</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>16</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>13</Typography></IconButton>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='end' sx={{ height: '28.56%' }}>
          <Stack sx={{ width: '20%', height: '50%' }}>
            <IconButton sx={style.btn3} onClick={() => {
              alert('who!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '20%', height: '100%' }}>
            <IconButton sx={style.btn3} onClick={() => {
              alert('You clicked me!');
            }}>
              <Typography variant="body1" color="initial">
                2 to 1
              </Typography>
            </IconButton>
          </Stack>
          <Stack sx={{ width: '60%', height: '100%', display: '', flexWrap: 'wrap', }} onClick={() => {
            alert('bit 10 value!');
          }}>
            <IconButton sx={{ ...style.btn2, ...style.black }} ><Typography onClick={() => {
              alert('You clicked me!');
            }}>12</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>9</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>6</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>3</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>11</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>8</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>5</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>2</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>10</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>7</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.black }} onClick={() => {
              alert('You clicked me!');
            }}><Typography>4</Typography></IconButton>
            <IconButton sx={{ ...style.btn2, ...style.red }}
            ><Typography onClick={() => {
              alert('You clicked me!');
            }}>1</Typography></IconButton>
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
        <Box component='img' src={roulette} className='rotating-element'>
        </Box>
      </Box>
      <Box sx={{ width: '12px', height: "12px", position: 'absolute', borderRadius: '50%', bottom: '1%', right: '10%', top: '80%', left: '78%' }} >
        <Box component='img' src={ball} className=''>
        </Box>
      </Box>

      <Box sx={{
        width: '25px', height: '100%',
      }}>
        <Box sx={style.naiming6}>
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
    </Box >
  )
}

export default Home

const style = {
  root: {
    maxWidth: '450px', width: '100%', backgroundColor: '#000000', height: '85vh', overflow: 'hidden', marginTop: 'auto', position: 'relative',
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
    '&>p:nth-child(2)': { color: 'white', fontSize: '13px', fontWeight: '600', padding: '5px 5px', background: 'red', width: '80%', margin: 'auto', marginBottom: '5px', borderRadius: '2px', },},
  naiming5: {
    background: 'red', width: '120px',
    transform: 'rotate(90deg)', position: 'absolute', bottom: '31%', left: '5%', borderRadius: '5px',
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
    position: 'absolute', width: '75px', height: '75px', background: 'black', zIndex: 10000000, bottom: '4.5%', left: '12%',
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
  ballouter: {
    position: 'absolute', width: '75px', height: '75px', background: 'black', zIndex: 10000000, bottom: '4.5%', left: '12%',
    border: '2px solid white', borderRadius: '10px', outline: '10px solid black', boxSizing: 'border-box',
  },
}