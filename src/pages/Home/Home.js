import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import rouletteBORD from "../../assets/images/rolettetable.png";
import rollatesidebar from "../../assets/images/roulettesidebar.png";
import RolletIFrame from "../../component/RolletIFrame";
import { useEffect, useState } from "react";
import roulette from "../../assets/images/rolette.jpeg";
import { Close } from "@mui/icons-material";
import axios from "axios";
function Home() {
  const [open, setOpen] = useState(false);
  const [bet, setBet] = useState([]);
  const [openDialogBox, setOpenDialogBox] = useState("");
  const [amount, setAmount] = useState(10);

  function setBetFuncton(id, number, amount) {
    console.log(id, number, amount);
    const obj = {
      id: id,
      number: number,
      amount: amount,
    };
    setBet([...bet, obj]);
    let element = document.getElementById(`${id}`);
    element.style.position = "relative"; // Ensure the parent is positioned relatively

    let newelement = document.createElement("span");
    let vlaue = amount === 1000 ? "1k" : amount === 3000 ? "3k" : amount;
    newelement.innerHTML = `${vlaue}`;
    newelement.style.position = "absolute"; // Make the span position absolute
    newelement.style.top = "50%"; // Center vertically
    newelement.style.left = "50%"; // Center horizontally
    newelement.style.transform = "translate(-50%, -50%)"; // Adjust position to center

    newelement.style.display = "flex"; // Use flexbox for centering content
    newelement.style.alignItems = "center"; // Center content vertically
    newelement.style.justifyContent = "center"; // Center content horizontally
    newelement.style.textAlign = "center";
    newelement.style.height = "15px"; // Ensure height is sufficient
    newelement.style.width = "15px"; // Ensure width is sufficient
    newelement.style.backgroundColor = "white";
    newelement.style.color = "black";
    newelement.style.border = "1px solid blue";
    newelement.style.borderRadius = "50%";
    newelement.style.padding = "3px";
    newelement.style.fontSize = "8px"; // Adjust font size for better visibility

    element.appendChild(newelement);
  }

  function increaseFunction(id) {
    const updatedArray = bet.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setBet(updatedArray);

    let element = document.getElementById(`${id}`);
    let span = element.querySelector("span");
    if (span) {
      span.innerHTML = `${
        bet?.find((i) => i?.id === openDialogBox)?.amount + 1
      }`;
    } else {
      let newelement = document.createElement("span");
      newelement.innerHTML = `${
        bet?.find((i) => i?.id === openDialogBox)?.amount
      }`;
      newelement.style.height = "10px";
      newelement.style.width = "10px";
      newelement.style.backgroundColor = "white";
      newelement.style.color = "black";
      newelement.style.border = "1px solid blue";
      newelement.style.borderRadius = "50%";
      newelement.style.padding = "2px";
      newelement.style.fontSize = "8px";
      element.append(newelement);
    }
  }
  function decreaseFunction(id) {
    const updatedArray = bet.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount - 1 > 0 ? item.amount - 1 : item.amount,
        };
      }
      return item;
    });
    setBet(updatedArray);
    let element = document.getElementById(`${id}`);
    let span = element.querySelector("span");
    let amount = bet?.find((i) => i?.id === openDialogBox)?.amount;
    if (span) {
      span.innerHTML = `${amount - 1 > 0 ? amount - 1 : amount}`;
    } else {
      let newelement = document.createElement("span");
      newelement.innerHTML = `${amount - 1 > 0 ? amount - 1 : amount}`;
      newelement.style.height = "10px";
      newelement.style.width = "10px";
      newelement.style.backgroundColor = "white";
      newelement.style.color = "black";
      newelement.style.border = "1px solid blue";
      newelement.style.borderRadius = "50%";
      newelement.style.padding = "2px";
      newelement.style.fontSize = "8px";
      element.append(newelement);
    }
  }

  function removeBetFuncton(id) {
    setBet(bet?.filter((i) => i?.id !== id));
    let element = document.getElementById(`${id}`);
    let span = element.querySelector("span");
    if (span) {
      element.removeChild(span);
    }
    setOpenDialogBox("");
  }

async function confirmBet(){
  const reqbody = {
    number:bet
  }
  try{
    const res = await axios.post("https://admin.sunlottery.fun/api/bet-now",reqbody)
  }catch(e){
    console.log(e)
  }
}
  return (
    <Box className="home" sx={style.root}>
      <Dialog open={openDialogBox}>
        <div className="!w-[200px]">
          <div>
            <IconButton onClick={() => setOpenDialogBox("")}>
              <Close />
            </IconButton>
            <span>Number:1,2,3,</span>
            <div className="flex justify-between w-full">
              <span onClick={() => increaseFunction(openDialogBox)}>INC</span>
              <p>{bet?.find((i) => i?.id === openDialogBox)?.amount}</p>
              <span onClick={() => decreaseFunction(openDialogBox)}>DEC</span>
            </div>
            <Button onClick={() => removeBetFuncton(openDialogBox)}>
              Remove Bet
            </Button>
          </div>
        </div>
      </Dialog>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Box direction={"row"} sx={style.winnerlooserouter}>
          <Box sx={style.winnerLooserList2}>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              Min-Play
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              in 1 0 out 10
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              Max-play
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              in 5000 out 50000
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Box direction={"row"} sx={style.winnerlooserouter2}>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
          </Box>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
          </Box>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
          </Box>
          <Box sx={style.winnerLooserList}>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Box direction={"row"} sx={style.winnerlooserouter3}>
          <Box sx={style.winnerLooserList3}>
            <Typography variant="body1" color="initial" sx={{ color: "red" }}>
              99
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={style.bettable} className={""}>
        <Stack
          className={"!w-[100%]"}
          direction="row"
          justifyContent="end"
          // sx={{ width: "100%" }}
        >
          <span className="!grid !grid-cols-3  !w-[71%]">
            <IconButton sx={style.btn1}>
              <p
                id="336"
                className="!p-1 !text-yellow-500"
                onClick={(e) => {
                  let isContainsPre = bet?.find((i) => i?.id === 336);
                  if (isContainsPre) {
                    setOpenDialogBox(336);
                  } else {
                    setBetFuncton(336, [336], amount);
                  }
                  e.stopPropagation();
                }}
              >
                2 to 1
              </p>
            </IconButton>
            <IconButton sx={style.btn1}>
              <p
                id="235"
                className="!text-blue-600"
                onClick={(e) => {
                  let isContainsPre = bet?.find((i) => i?.id === 235);
                  if (isContainsPre) {
                    setOpenDialogBox(235);
                  } else {
                    setBetFuncton(235, [235], amount);
                  }
                  e.stopPropagation();
                }}
              >
                2 to 1
              </p>
            </IconButton>
            <IconButton sx={style.btn1}>
              <p
                id="134"
                onClick={(e) => {
                  let isContainsPre = bet?.find((i) => i?.id === 134);
                  if (isContainsPre) {
                    setOpenDialogBox(134);
                  } else {
                    setBetFuncton(134, [134], amount);
                  }
                  e.stopPropagation();
                }}
              >
                2 to 1
              </p>
            </IconButton>
          </span>
        </Stack>
        <Stack direction="row" justifyContent="end" sx={{ height: "28.56%" }}>
          <div className="w-[14%]  !grid grid-rows-2 !place-items-center !bg-blue-400">
            <div className="!p-0" style={{ transform: "rotate(-270deg)" }}>
              <div
                variant="body1"
                color="initial"
                className="!flex !justify-center !items-center "
              >
                <span
                  id="1936"
                  className="whitespace-nowrap !text-[10px] !text-white !mt-2"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 1936);
                    if (isContainsPre) {
                      setOpenDialogBox(1936);
                    } else {
                      setBetFuncton(1936, [1936], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  19 to 36
                </span>
              </div>
            </div>
            <div className="!p-0" style={{ transform: "rotate(-270deg)" }}>
              <div variant="body1" color="initial">
                <span
                  id="202"
                  className="whitespace-nowrap !text-[10px] !mt-4 !text-white"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 202);
                    if (isContainsPre) {
                      setOpenDialogBox(202);
                    } else {
                      setBetFuncton(202, [202], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  ODD
                </span>
              </div>
            </div>
          </div>
          <div className="w-[14%] !bg-blue-400 !grid grid-rows-1 !border-2 !border-white !place-items-center">
            <IconButton
              className="!p-0"
              style={{ transform: "rotate(-270deg)" }}
            >
              <Typography variant="body1" color="initial">
                <span
                  className="whitespace-nowrap !text-[10px] !text-white"
                  id="312"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 312);
                    if (isContainsPre) {
                      setOpenDialogBox(312);
                    } else {
                      setBetFuncton(312, [312], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  3rd 12
                </span>
              </Typography>
            </IconButton>
          </div>

          <Stack
            sx={{
              width: "60%",
              height: "100%",
              // display: "flex",
              // flexWrap: "wrap",
            }}
            className="!w-full !h-full !grid !grid-cols-3 "
          >
            <span className="!grid grid-rows-4 !w-full !h-full relative">
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="36"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 36);
                    if (isContainsPre) {
                      setOpenDialogBox(36);
                    } else {
                      setBetFuncton(36, [36], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  36
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="361000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 361000);
                    if (isContainsPre) {
                      setOpenDialogBox(361000);
                    } else {
                      setBetFuncton(361000, [33, 36], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="362000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 362000);
                    if (isContainsPre) {
                      setOpenDialogBox(362000);
                    } else {
                      setBetFuncton(362000, [35, 36], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p className="absolute top-[17%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="363000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 363000);
                    if (isContainsPre) {
                      setOpenDialogBox(363000);
                    } else {
                      setBetFuncton(363000, [32, 33, 35, 36], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="33"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 33);
                    if (isContainsPre) {
                      setOpenDialogBox(33);
                    } else {
                      setBetFuncton(33, [33], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  33
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="331000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 331000);
                    if (isContainsPre) {
                      setOpenDialogBox(331000);
                    } else {
                      setBetFuncton(331000, [30, 33], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="332000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 332000);
                    if (isContainsPre) {
                      setOpenDialogBox(332000);
                    } else {
                      setBetFuncton(332000, [32, 33], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p className="absolute top-[42%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="333000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 333000);
                    if (isContainsPre) {
                      setOpenDialogBox(333000);
                    } else {
                      setBetFuncton(333000, [29, 30, 32, 33], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="30"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 30);
                    if (isContainsPre) {
                      setOpenDialogBox(30);
                    } else {
                      setBetFuncton(30, [30], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  30
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-red-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="301000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 301000);
                    if (isContainsPre) {
                      setOpenDialogBox(301000);
                    } else {
                      setBetFuncton(301000, [27, 30], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-blue-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="302000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 302000);
                    if (isContainsPre) {
                      setOpenDialogBox(302000);
                    } else {
                      setBetFuncton(302000, [29, 30], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p className="absolute top-[67%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="303000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 303000);
                    if (isContainsPre) {
                      setOpenDialogBox(303000);
                    } else {
                      setBetFuncton(303000, [26, 27, 29, 30], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="27"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 27);
                    if (isContainsPre) {
                      setOpenDialogBox(27);
                    } else {
                      setBetFuncton(27, [27], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  27
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="271000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 271000);
                    if (isContainsPre) {
                      setOpenDialogBox(271000);
                    } else {
                      setBetFuncton(271000, [24, 27], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="272000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 272000);
                    if (isContainsPre) {
                      setOpenDialogBox(272000);
                    } else {
                      setBetFuncton(272000, [26, 27], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p className="absolute top-[92%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="273000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 273000);
                    if (isContainsPre) {
                      setOpenDialogBox(273000);
                    } else {
                      setBetFuncton(273000, [23, 24, 26, 27], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
            </span>
            <span className="!grid grid-rows-4 !w-full !h-full !relative">
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="35"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 35);
                    if (isContainsPre) {
                      setOpenDialogBox(35);
                    } else {
                      setBetFuncton(35, [35], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  35
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="351000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 351000);
                    if (isContainsPre) {
                      setOpenDialogBox(351000);
                    } else {
                      setBetFuncton(351000, [32, 35], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="352000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 352000);
                    if (isContainsPre) {
                      setOpenDialogBox(352000);
                    } else {
                      setBetFuncton(352000, [34, 35], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p
                className="absolute top-[17%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [31, 32, 34, 35], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="353000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 353000);
                    if (isContainsPre) {
                      setOpenDialogBox(353000);
                    } else {
                      setBetFuncton(353000, [31, 32, 34, 35], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="32"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 32);
                    if (isContainsPre) {
                      setOpenDialogBox(32);
                    } else {
                      setBetFuncton(32, [32], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  32
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="321000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 321000);
                    if (isContainsPre) {
                      setOpenDialogBox(321000);
                    } else {
                      setBetFuncton(321000, [29, 32], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="322000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 322000);
                    if (isContainsPre) {
                      setOpenDialogBox(322000);
                    } else {
                      setBetFuncton(322000, [31, 32], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p className="absolute top-[42%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="323000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 323000);
                    if (isContainsPre) {
                      setOpenDialogBox(323000);
                    } else {
                      setBetFuncton(323000, [28, 29, 31, 32], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="29"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 29);
                    if (isContainsPre) {
                      setOpenDialogBox(29);
                    } else {
                      setBetFuncton(29, [29], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  29
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="291000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 291000);
                    if (isContainsPre) {
                      setOpenDialogBox(291000);
                    } else {
                      setBetFuncton(291000, [26, 29], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="292000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 292000);
                    if (isContainsPre) {
                      setOpenDialogBox(292000);
                    } else {
                      setBetFuncton(292000, [28, 29], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p className="absolute top-[67%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="293000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 293000);
                    if (isContainsPre) {
                      setOpenDialogBox(293000);
                    } else {
                      setBetFuncton(293000, [25, 26, 28, 29], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="26"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 26);
                    if (isContainsPre) {
                      setOpenDialogBox(26);
                    } else {
                      setBetFuncton(26, [26], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  26
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="261000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 261000);
                    if (isContainsPre) {
                      setOpenDialogBox(261000);
                    } else {
                      setBetFuncton(261000, [23, 26], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="262000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 262000);
                    if (isContainsPre) {
                      setOpenDialogBox(262000);
                    } else {
                      setBetFuncton(262000, [25, 26], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* quadratic */}
              <p className="absolute top-[92%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="263000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 263000);
                    if (isContainsPre) {
                      setOpenDialogBox(263000);
                    } else {
                      setBetFuncton(263000, [22, 23, 25, 26], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
            </span>
            <span className="!grid grid-rows-4 !w-full !h-full !relative">
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="34"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 34);
                    if (isContainsPre) {
                      setOpenDialogBox(34);
                    } else {
                      setBetFuncton(34, [34], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  34
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="341000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 341000);
                    if (isContainsPre) {
                      setOpenDialogBox(341000);
                    } else {
                      setBetFuncton(341000, [31, 34], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="342000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 342000);
                    if (isContainsPre) {
                      setOpenDialogBox(342000);
                    } else {
                      setBetFuncton(342000, [34, 35, 36], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="31"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 31);
                    if (isContainsPre) {
                      setOpenDialogBox(31);
                    } else {
                      setBetFuncton(31, [31], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  31
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="311000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 311000);
                    if (isContainsPre) {
                      setOpenDialogBox(311000);
                    } else {
                      setBetFuncton(311000, [28, 31], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="312000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 312000);
                    if (isContainsPre) {
                      setOpenDialogBox(312000);
                    } else {
                      setBetFuncton(312000, [31, 32, 33], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="28"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 28);
                    if (isContainsPre) {
                      setOpenDialogBox(28);
                    } else {
                      setBetFuncton(28, [28], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  28
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="281000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 281000);
                    if (isContainsPre) {
                      setOpenDialogBox(281000);
                    } else {
                      setBetFuncton(281000, [25, 28], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="282000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 282000);
                    if (isContainsPre) {
                      setOpenDialogBox(282000);
                    } else {
                      setBetFuncton(282000, [28, 29, 30], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="25"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 25);
                    if (isContainsPre) {
                      setOpenDialogBox(25);
                    } else {
                      setBetFuncton(25, [25], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  25
                </p>
              </IconButton>
              {/* Buttom */}
              <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="251000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 251000);
                    if (isContainsPre) {
                      setOpenDialogBox(251000);
                    } else {
                      setBetFuncton(251000, [22, 25], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* right */}
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="252000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 252000);
                    if (isContainsPre) {
                      setOpenDialogBox(252000);
                    } else {
                      setBetFuncton(252000, [25, 26, 27], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
            </span>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="end" sx={{ height: "28.56%" }}>
          <div className="w-[14%]  !grid grid-rows-2 !place-items-center !bg-blue-400">
            <div className="!p-0" style={{ transform: "rotate(-270deg)" }}>
              <div
                variant="body1"
                color="initial"
                className="!flex !justify-center !items-center "
              >
                <span
                  className="whitespace-nowrap !text-[10px] !text-white !mt-2 !bg-red-700"
                  id="200"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 200);
                    if (isContainsPre) {
                      setOpenDialogBox(200);
                    } else {
                      setBetFuncton(200, [200], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  Red
                </span>
              </div>
            </div>
            <div className="!p-0" style={{ transform: "rotate(-270deg)" }}>
              <div variant="body1" color="initial">
                <span
                  className="whitespace-nowrap !text-[10px] !mt-4 !text-white !bg-black"
                  id="201"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 201);
                    if (isContainsPre) {
                      setOpenDialogBox(201);
                    } else {
                      setBetFuncton(201, [201], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  Black
                </span>
              </div>
            </div>
          </div>
          <div className="w-[14%] !bg-blue-400 !grid grid-rows-1 !border-2 !border-white !place-items-center">
            <IconButton
              className="!p-0"
              style={{ transform: "rotate(-270deg)" }}
            >
              <Typography
                variant="body1"
                color="initial"
                onClick={(e) => {
                  setBetFuncton(6, [41], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  className="whitespace-nowrap !text-[10px] !text-blue-500"
                  id="212"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 212);
                    if (isContainsPre) {
                      setOpenDialogBox(212);
                    } else {
                      setBetFuncton(212, [212], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  2rd 12
                </span>
              </Typography>
            </IconButton>
          </div>
          <Stack
            sx={{
              width: "60%",
              height: "100%",
              // display: "flex",
              // flexWrap: "wrap",
            }}
            className="!w-full !h-full !grid !grid-cols-3 "
          >
            <span className="!grid grid-rows-4 !w-full !h-full relative">
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="24"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 24);
                    if (isContainsPre) {
                      setOpenDialogBox(24);
                    } else {
                      setBetFuncton(24, [24], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  24
                </p>
              </IconButton>
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="241000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 241000);
                    if (isContainsPre) {
                      setOpenDialogBox(241000);
                    } else {
                      setBetFuncton(241000, [21, 24], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="242000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 242000);
                    if (isContainsPre) {
                      setOpenDialogBox(242000);
                    } else {
                      setBetFuncton(242000, [23, 24], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[17%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="243000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 243000);
                    if (isContainsPre) {
                      setOpenDialogBox(243000);
                    } else {
                      setBetFuncton(243000, [20, 21, 23, 24], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="21"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 21);
                    if (isContainsPre) {
                      setOpenDialogBox(21);
                    } else {
                      setBetFuncton(21, [21], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  21
                </p>
              </IconButton>
              <p className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="211000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 211000);
                    if (isContainsPre) {
                      setOpenDialogBox(211000);
                    } else {
                      setBetFuncton(211000, [18, 21], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="212000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 212000);
                    if (isContainsPre) {
                      setOpenDialogBox(212000);
                    } else {
                      setBetFuncton(212000, [20, 21], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[42%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="213000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 213000);
                    if (isContainsPre) {
                      setOpenDialogBox(213000);
                    } else {
                      setBetFuncton(213000, [17, 18, 20, 21], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="18"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 18);
                    if (isContainsPre) {
                      setOpenDialogBox(18);
                    } else {
                      setBetFuncton(18, [18], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  18
                </p>
              </IconButton>
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="181000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 181000);
                    if (isContainsPre) {
                      setOpenDialogBox(181000);
                    } else {
                      setBetFuncton(181000, [15, 18], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="182000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 182000);
                    if (isContainsPre) {
                      setOpenDialogBox(182000);
                    } else {
                      setBetFuncton(182000, [17, 18], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[67%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="183000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 183000);
                    if (isContainsPre) {
                      setOpenDialogBox(183000);
                    } else {
                      setBetFuncton(183000, [14, 15, 17, 18], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="15"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 15);
                    if (isContainsPre) {
                      setOpenDialogBox(15);
                    } else {
                      setBetFuncton(15, [15], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  15
                </p>
              </IconButton>
              <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="151000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 151000);
                    if (isContainsPre) {
                      setOpenDialogBox(151000);
                    } else {
                      setBetFuncton(151000, [12, 15], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="152000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 152000);
                    if (isContainsPre) {
                      setOpenDialogBox(152000);
                    } else {
                      setBetFuncton(152000, [14, 15], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[92%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="153000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 153000);
                    if (isContainsPre) {
                      setOpenDialogBox(153000);
                    } else {
                      setBetFuncton(153000, [11, 12, 14, 15], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
            </span>
            <span className="!grid grid-rows-4 !w-full !h-full relative">
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="23"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 23);
                    if (isContainsPre) {
                      setOpenDialogBox(23);
                    } else {
                      setBetFuncton(23, [23], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  23
                </p>
              </IconButton>
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="231000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 231000);
                    if (isContainsPre) {
                      setOpenDialogBox(231000);
                    } else {
                      setBetFuncton(231000, [20, 23], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="232000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 232000);
                    if (isContainsPre) {
                      setOpenDialogBox(232000);
                    } else {
                      setBetFuncton(232000, [22, 23], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[17%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="233000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 233000);
                    if (isContainsPre) {
                      setOpenDialogBox(233000);
                    } else {
                      setBetFuncton(233000, [19, 20, 22, 23], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="20"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 20);
                    if (isContainsPre) {
                      setOpenDialogBox(20);
                    } else {
                      setBetFuncton(20, [20], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  20
                </p>
              </IconButton>
              <p className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="201000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 201000);
                    if (isContainsPre) {
                      setOpenDialogBox(201000);
                    } else {
                      setBetFuncton(201000, [17, 20], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="202000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 202000);
                    if (isContainsPre) {
                      setOpenDialogBox(202000);
                    } else {
                      setBetFuncton(202000, [19, 20], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[42%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="203000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 203000);
                    if (isContainsPre) {
                      setOpenDialogBox(203000);
                    } else {
                      setBetFuncton(203000, [16, 17, 19, 20], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="17"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 17);
                    if (isContainsPre) {
                      setOpenDialogBox(17);
                    } else {
                      setBetFuncton(17, [17], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  17
                </p>
              </IconButton>
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="171000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 171000);
                    if (isContainsPre) {
                      setOpenDialogBox(171000);
                    } else {
                      setBetFuncton(171000, [14, 17], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="172000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 172000);
                    if (isContainsPre) {
                      setOpenDialogBox(172000);
                    } else {
                      setBetFuncton(172000, [16, 17], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[67%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="173000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 173000);
                    if (isContainsPre) {
                      setOpenDialogBox(173000);
                    } else {
                      setBetFuncton(173000, [13, 14, 16, 17], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="14"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 14);
                    if (isContainsPre) {
                      setOpenDialogBox(14);
                    } else {
                      setBetFuncton(14, [14], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  14
                </p>
              </IconButton>
              <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="141000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 141000);
                    if (isContainsPre) {
                      setOpenDialogBox(141000);
                    } else {
                      setBetFuncton(141000, [11, 14], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="142000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 142000);
                    if (isContainsPre) {
                      setOpenDialogBox(142000);
                    } else {
                      setBetFuncton(142000, [13, 14], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[92%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="143000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 143000);
                    if (isContainsPre) {
                      setOpenDialogBox(143000);
                    } else {
                      setBetFuncton(143000, [10, 11, 13, 14], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
            </span>
            <span className="!grid grid-rows-4 !w-full !h-full relative">
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="22"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 22);
                    if (isContainsPre) {
                      setOpenDialogBox(22);
                    } else {
                      setBetFuncton(22, [22], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  22
                </p>
              </IconButton>
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="221000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 221000);
                    if (isContainsPre) {
                      setOpenDialogBox(221000);
                    } else {
                      setBetFuncton(221000, [19, 22], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="222000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 222000);
                    if (isContainsPre) {
                      setOpenDialogBox(222000);
                    } else {
                      setBetFuncton(222000, [22, 23, 24], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="19"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 19);
                    if (isContainsPre) {
                      setOpenDialogBox(19);
                    } else {
                      setBetFuncton(19, [19], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  19
                </p>
              </IconButton>
              <p className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="191000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 191000);
                    if (isContainsPre) {
                      setOpenDialogBox(191000);
                    } else {
                      setBetFuncton(191000, [16, 19], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="192000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 192000);
                    if (isContainsPre) {
                      setOpenDialogBox(192000);
                    } else {
                      setBetFuncton(192000, [19, 20, 21], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="16"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 16);
                    if (isContainsPre) {
                      setOpenDialogBox(16);
                    } else {
                      setBetFuncton(16, [16], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  16
                </p>
              </IconButton>
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="161000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 161000);
                    if (isContainsPre) {
                      setOpenDialogBox(161000);
                    } else {
                      setBetFuncton(161000, [13, 16], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="162000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 162000);
                    if (isContainsPre) {
                      setOpenDialogBox(162000);
                    } else {
                      setBetFuncton(162000, [16, 17, 18], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="13"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 13);
                    if (isContainsPre) {
                      setOpenDialogBox(13);
                    } else {
                      setBetFuncton(13, [13], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  13
                </p>
              </IconButton>
              <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="131000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 131000);
                    if (isContainsPre) {
                      setOpenDialogBox(131000);
                    } else {
                      setBetFuncton(131000, [10, 13], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="132000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 132000);
                    if (isContainsPre) {
                      setOpenDialogBox(132000);
                    } else {
                      setBetFuncton(132000, [13, 14, 15], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
            </span>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="end" sx={{ height: "28.56%" }}>
          <div className="w-[14%]  !grid grid-rows-2 !place-items-center !bg-blue-400">
            <div className="!p-0" style={{ transform: "rotate(-270deg)" }}>
              <div
                variant="body1"
                color="initial"
                className="!flex !justify-center !items-center "
              >
                <span
                  className="whitespace-nowrap !text-[10px] !text-white !mt-2 "
                  id="119"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 119);
                    if (isContainsPre) {
                      setOpenDialogBox(119);
                    } else {
                      setBetFuncton(119, [119], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  Even
                </span>
              </div>
            </div>
            <div className="!p-0" style={{ transform: "rotate(-270deg)" }}>
              <div variant="body1" color="initial">
                <span
                  className="whitespace-nowrap !text-[10px] !mt-4 !text-white "
                  id="118"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 118);
                    if (isContainsPre) {
                      setOpenDialogBox(118);
                    } else {
                      setBetFuncton(118, [118], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  1to 18
                </span>
              </div>
            </div>
          </div>
          <div className="w-[14%] !bg-blue-400 !grid grid-rows-1 !border-2 !border-white !place-items-center">
            <IconButton
              className="!p-0"
              style={{ transform: "rotate(-270deg)" }}
            >
              <Typography
                variant="body1"
                color="initial"
                id="112"
                onClick={(e) => {
                  let isContainsPre = bet?.find((i) => i?.id === 112);
                  if (isContainsPre) {
                    setOpenDialogBox(112);
                  } else {
                    setBetFuncton(112, [112], amount);
                  }
                  e.stopPropagation();
                }}
              >
                <span className="whitespace-nowrap !text-[10px] !text-white">
                  1rd 12
                </span>
              </Typography>
            </IconButton>
          </div>
          <Stack
            sx={{
              width: "60%",
              height: "100%",
              // display: "flex",
              // flexWrap: "wrap",
            }}
            className="!w-full !h-full !grid !grid-cols-3 "
          >
            <span className="!grid grid-rows-4 !w-full !h-full relative">
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="12"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 12);
                    if (isContainsPre) {
                      setOpenDialogBox(12);
                    } else {
                      setBetFuncton(12, [12], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  12
                </p>
              </IconButton>
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="121000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 121000);
                    if (isContainsPre) {
                      setOpenDialogBox(121000);
                    } else {
                      setBetFuncton(121000, [9, 12], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="122000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 122000);
                    if (isContainsPre) {
                      setOpenDialogBox(122000);
                    } else {
                      setBetFuncton(122000, [11, 12], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[17%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="123000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 123000);
                    if (isContainsPre) {
                      setOpenDialogBox(123000);
                    } else {
                      setBetFuncton(123000, [8, 9, 11, 12], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="9"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 9);
                    if (isContainsPre) {
                      setOpenDialogBox(9);
                    } else {
                      setBetFuncton(9, [9], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  9
                </p>
              </IconButton>
              <p className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="91000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 91000);
                    if (isContainsPre) {
                      setOpenDialogBox(91000);
                    } else {
                      setBetFuncton(91000, [6, 9], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="92000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 92000);
                    if (isContainsPre) {
                      setOpenDialogBox(92000);
                    } else {
                      setBetFuncton(92000, [8, 9], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p
                className="absolute top-[42%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [5, 6, 8, 9], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="93000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 93000);
                    if (isContainsPre) {
                      setOpenDialogBox(93000);
                    } else {
                      setBetFuncton(93000, [5, 6, 8, 9], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="6"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 6);
                    if (isContainsPre) {
                      setOpenDialogBox(6);
                    } else {
                      setBetFuncton(6, [6], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  6
                </p>
              </IconButton>
              <p
                className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [3, 6], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="61000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 61000);
                    if (isContainsPre) {
                      setOpenDialogBox(61000);
                    } else {
                      setBetFuncton(61000, [3, 6], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="62000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 62000);
                    if (isContainsPre) {
                      setOpenDialogBox(62000);
                    } else {
                      setBetFuncton(62000, [5, 6], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p
                className="absolute top-[67%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [2, 3, 5, 6], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="63000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 63000);
                    if (isContainsPre) {
                      setOpenDialogBox(63000);
                    } else {
                      setBetFuncton(63000, [2, 3, 5, 6], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="3"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 3);
                    if (isContainsPre) {
                      setOpenDialogBox(3);
                    } else {
                      setBetFuncton(3, [3], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  3
                </p>
              </IconButton>
              {/* <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-blue-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="32000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 32000);
                    if (isContainsPre) {
                      setOpenDialogBox(32000);
                    } else {
                      setBetFuncton(32000, [2, 3], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* <p className="absolute top-[92%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
            </span>
            <span className="!grid grid-rows-4 !w-full !h-full relative">
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="11"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 11);
                    if (isContainsPre) {
                      setOpenDialogBox(11);
                    } else {
                      setBetFuncton(11, [11], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  11
                </p>
              </IconButton>
              <p className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="111000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 111000);
                    if (isContainsPre) {
                      setOpenDialogBox(111000);
                    } else {
                      setBetFuncton(111000, [8, 11], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="112000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 112000);
                    if (isContainsPre) {
                      setOpenDialogBox(112000);
                    } else {
                      setBetFuncton(112000, [10, 11], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[17%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="113000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 113000);
                    if (isContainsPre) {
                      setOpenDialogBox(113000);
                    } else {
                      setBetFuncton(113000, [7, 8, 10, 11], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="8"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 8);
                    if (isContainsPre) {
                      setOpenDialogBox(8);
                    } else {
                      setBetFuncton(8, [8], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  8
                </p>
              </IconButton>
              <p
                className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [5, 8], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="81000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 81000);
                    if (isContainsPre) {
                      setOpenDialogBox(81000);
                    } else {
                      setBetFuncton(81000, [5, 8], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="82000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 82000);
                    if (isContainsPre) {
                      setOpenDialogBox(82000);
                    } else {
                      setBetFuncton(82000, [7, 8], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[42%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="83000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 83000);
                    if (isContainsPre) {
                      setOpenDialogBox(83000);
                    } else {
                      setBetFuncton(83000, [4, 5, 7, 8], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="5"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 5);
                    if (isContainsPre) {
                      setOpenDialogBox(5);
                    } else {
                      setBetFuncton(5, [5], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  5
                </p>
              </IconButton>
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="51000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 51000);
                    if (isContainsPre) {
                      setOpenDialogBox(51000);
                    } else {
                      setBetFuncton(51000, [2, 5], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="52000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 52000);
                    if (isContainsPre) {
                      setOpenDialogBox(52000);
                    } else {
                      setBetFuncton(52000, [4, 5], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[67%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="53000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 53000);
                    if (isContainsPre) {
                      setOpenDialogBox(53000);
                    } else {
                      setBetFuncton(53000, [1, 2, 4, 5], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="2"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 2);
                    if (isContainsPre) {
                      setOpenDialogBox(2);
                    } else {
                      setBetFuncton(2, [2], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  2
                </p>
              </IconButton>
              {/* <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
              <p className="absolute top-[80%] left-[82%] h-4 w-4 bg-yellow-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="22000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 22000);
                    if (isContainsPre) {
                      setOpenDialogBox(22000);
                    } else {
                      setBetFuncton(22000, [1, 2], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              {/* <p className="absolute top-[92%] left-[80%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
            </span>
            <span className="!grid grid-rows-4 !w-full !h-full relative">
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="10"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 10);
                    if (isContainsPre) {
                      setOpenDialogBox(10);
                    } else {
                      setBetFuncton(10, [10], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  10
                </p>
              </IconButton>
              <p
                className="absolute top-[18%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [7, 10], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="101000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 101000);
                    if (isContainsPre) {
                      setOpenDialogBox(101000);
                    } else {
                      setBetFuncton(101000, [7, 10], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[5%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="102000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 102000);
                    if (isContainsPre) {
                      setOpenDialogBox(102000);
                    } else {
                      setBetFuncton(102000, [10, 11, 12], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>{" "}
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="7"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 7);
                    if (isContainsPre) {
                      setOpenDialogBox(7);
                    } else {
                      setBetFuncton(7, [7], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  7
                </p>
              </IconButton>
              <p
                className="absolute top-[43%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [4, 7], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="71000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 71000);
                    if (isContainsPre) {
                      setOpenDialogBox(71000);
                    } else {
                      setBetFuncton(71000, [4, 7], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p
                className="absolute top-[30%] left-[82%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [7, 8, 9], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="72000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 72000);
                    if (isContainsPre) {
                      setOpenDialogBox(72000);
                    } else {
                      setBetFuncton(72000, [7, 8, 9], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.black }}>
                <p
                  id="4"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 4);
                    if (isContainsPre) {
                      setOpenDialogBox(4);
                    } else {
                      setBetFuncton(4, [4], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  4
                </p>
              </IconButton>
              <p className="absolute top-[68%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="41000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 41000);
                    if (isContainsPre) {
                      setOpenDialogBox(41000);
                    } else {
                      setBetFuncton(41000, [1, 4], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <p className="absolute top-[55%] left-[82%] h-4 w-4 bg-yellow-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
                <span
                  id="42000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 42000);
                    if (isContainsPre) {
                      setOpenDialogBox(42000);
                    } else {
                      setBetFuncton(42000, [4, 5, 6], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>
              <IconButton sx={{ ...style.btn2, ...style.red }}>
                <p
                  id="1"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 1);
                    if (isContainsPre) {
                      setOpenDialogBox(1);
                    } else {
                      setBetFuncton(1, [1], amount);
                    }
                    e.stopPropagation();
                  }}
                >
                  1
                </p>
              </IconButton>
              {/* <p className="absolute top-[93%] left-[28%] h-4 w-4 bg-pink-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
              <p
                className="absolute top-[80%] left-[82%] h-4 w-4 bg-yellow-500 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
                onClick={(e) => {
                  setBetFuncton(6, [1, 2, 3], amount);
                  e.stopPropagation();
                }}
              >
                <span
                  id="12000"
                  className="!z-100 h-full w-full !text-[10px]"
                  onClick={(e) => {
                    let isContainsPre = bet?.find((i) => i?.id === 12000);
                    if (isContainsPre) {
                      setOpenDialogBox(12000);
                    } else {
                      setBetFuncton(12000, [1, 2, 3], amount);
                    }
                    e.stopPropagation();
                  }}
                ></span>
              </p>{" "}
            </span>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="end" sx={{ height: "7.14%" }}>
          <Box
            sx={{
              background: "white",
              width: "100%",
              border: "1px solid white",
              transform: "rotate(180deg)",
              position: "relative",
              clipPath: "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)",
              "&::before": {
                clipPath: "polygon(50% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)",
                content: "''",
                position: "absolute",
                width: "100%",
                height: "111%",
                background: "#008C34",
              },
            }}
          >
            <IconButton sx={style.btn4}>0</IconButton>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "50%",
          bottom: "1%",
          right: "10%",
        }}
      >
        <Box component="img" src={roulette} className="rotating-element"></Box>
        <div className="h-[200px] w-[200px]">
          <RolletIFrame />
        </div>
      </Box>
      <Box
        sx={{
          width: "25px",
          height: "100%",
        }}
      >
        <Box
          sx={style.naiming6}
          component={NavLink}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Typography variant="body1" color="initial"></Typography>
          <Typography variant="body1" color="initial">
            NEIGHTBOUR BET
          </Typography>
        </Box>
        <Box sx={style.naiming}>
          <Typography variant="body1" color="initial">
            POINT BALANCE
          </Typography>
          <Typography variant="body1" color="initial">
            0.08
          </Typography>
        </Box>
        <Box sx={style.naiming2}>
          <Typography variant="body1" color="initial">
            Name
          </Typography>
          <Typography variant="body1" color="initial">
            Raadhe
          </Typography>
        </Box>
        <div className=" !absolute transform rotate-90 top-[33%] left-[-4%] !flex">
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(2)}
          >
            2
          </p>
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(5)}
          >
            5
          </p>
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(10)}
          >
            10
          </p>
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(50)}
          >
            50
          </p>
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(100)}
          >
            100
          </p>
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(500)}
          >
            500
          </p>
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(1000)}
          >
            1k
          </p>
          <p
            className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
            onClick={() => setAmount(3000)}
          >
            3k
          </p>
        </div>
        <Box sx={style.naiming3}>
          <Typography variant="body1" color="initial">
            GAME HISTORY
          </Typography>
        </Box>
        <Box sx={style.naiming4}>
          <Typography variant="body1" color="initial"></Typography>
          <Typography variant="body1" color="initial">
            LEAVE TABLE
          </Typography>
        </Box>
        <Box sx={style.naiming5}>
          <Typography variant="body1" color="initial"></Typography>
          <Typography 
          onClick={()=>confirmBet()}
          
          variant="body1" color="initial">
            BET CONFIRM
          </Typography>
        </Box>
      </Box>
      <Box className="countdown" sx={style.countdownOuter}>
        <Box className="wrapper">
          <Box className="pie spinner"></Box>
          <Box className="pie filler"></Box>
          <Box className="mask"></Box>
        </Box>
      </Box>
      <Drawer
        sx={{
          "&>div": { background: "#0000009e", width: "400px", height: "85vh" },
        }}
        anchor="top"
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              bottom: "20px",
              zIndex: "5000000",
            }}
          >
            <NavLink
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CloseIcon sx={{ color: "white", fontSize: "40px" }} />
            </NavLink>
          </Box>
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                transform: "rotate(90deg)",
                width: 500,
                height: 173,
                top: "35%",
                left: "-14%",
              }}
            >
              <Box component="img" src={rollatesidebar}></Box>
              <Box
                component={NavLink}
                onClick={() => {
                  alert("1st alert ");
                }}
                sx={{
                  width: "143px",
                  height: "62px",
                  position: "absolute",
                  top: "33%",
                  left: "7%",
                  clipPath: "polygon(0 0, 65% 0, 100% 100%, 0% 100%)",
                  // background: 'red',
                }}
              ></Box>
              <Box
                component={NavLink}
                onClick={() => {
                  alert("2nd alert ");
                }}
                sx={{
                  width: 133,
                  height: 62,
                  position: "absolute",
                  top: "33%",
                  left: "26%",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 35% 100%)",
                  WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 35% 100%)",
                  // backgroundColor: 'green',
                }}
              ></Box>
              <Box
                component={NavLink}
                onClick={() => {
                  alert("3rd alert ");
                }}
                sx={{
                  width: 125,
                  height: 62,
                  position: "absolute",
                  top: "33%",
                  left: "53%",
                  // backgroundColor: 'yellow',
                }}
              ></Box>
              <Box
                component={NavLink}
                onClick={() => {
                  alert("4th alert ");
                }}
                sx={{
                  width: 73,
                  height: 62,
                  position: "absolute",
                  top: "33%",
                  right: "7%",
                  // backgroundColor: 'black',
                  borderRadius: "25px",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Home;

const style = {
  root: {
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "#000000",
    height: "85vh",
    overflow: "hidden",
    marginTop: "auto",
    position: "relative",
    backgroundImage: `url(${rouletteBORD})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    // transform: 'rotate(-90deg) !important',
    // left: '22% !important',
  },

  red: {
    "&>p": {
      background: "red",
      width: "60%",
      borderRadius: "60%",
      fontSize: "10px",
      fontWeight: 600,
      color: "white",
    },
  },
  black: {
    "&>p": {
      background: "black",
      width: "60%",
      borderRadius: "60%",
      fontSize: "10px",
      fontWeight: 600,
      color: "white",
    },
  },
  bettable: {
    width: "40%",
    height: "63%",
    position: "absolute",
    left: "30%",
    top: "2%",
  },
  btn1: {
    padding: 0,
    border: "1px solid white",
    // width: "20%",
    borderRadius: "0px",
    height: "100%",
    transform: "rotate(-180deg)",
    "&>p": {
      fontSize: "10px",
      fontWeight: 600,
      color: "white",
    },
  },
  btn2: {
    padding: 0,
    border: "1px solid white",
    // width: "33.33333%",
    borderRadius: "0px",
    // height: "25%",
    transform: "rotate(-180deg)",
  },
  btn3: {
    padding: 0,
    border: "1px solid white",
    // width: "100%",
    borderRadius: "0px",
    // fontSize: "10px",
    color: "white",
    fontWeight: 600,
    height: "100%",
    "&>p": {
      transform: "rotate(-270deg)",
      fontSize: "12px",
      fontWeight: 600,
      color: "white",
    },
  },
  btn4: {
    padding: 0,
    fontSize: "12px",
    fontWeight: 900,
    color: "white",
    position: "relative",
    left: "43%",
    background: "green",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  },
  rotatingElement: { animation: "$rotateInfinite 4s linear infinite" },
  "@keyframes rotateInfinite": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  naiming: {
    background:
      "linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
    width: "120px",
    transform: "rotate(90deg)",
    position: "absolute",
    top: "7%",
    left: "-7%",
    borderRadius: "5px",
    "&>p:nth-child(1)": {
      color: "black",
      fontSize: "13px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>p:nth-child(2)": {
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
      padding: "5px 5px",
      background: "#15158f",
      width: "80%",
      margin: "auto",
      marginBottom: "5px",
      borderRadius: "2px",
    },
  },
  naiming2: {
    background:
      "linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
    width: "120px",
    transform: "rotate(90deg)",
    position: "absolute",
    top: "28%",
    left: "-7%",
    borderRadius: "5px",
    "&>p:nth-child(1)": {
      color: "black",
      fontSize: "13px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>p:nth-child(2)": {
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
      padding: "5px 5px",
      background: "#15158f",
      width: "80%",
      margin: "auto",
      marginBottom: "5px",
      borderRadius: "2px",
    },
  },
  naiming3: {
    background:
      "linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
    width: "120px",
    transform: "rotate(90deg)",
    position: "absolute",
    top: "60%",
    left: "-11%",
    borderRadius: "5px",
    padding: "15px",
    "&>p:nth-child(1)": {
      color: "black",
      fontSize: "13px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>p:nth-child(2)": {
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
      padding: "5px 5px",
      background: "#15158f",
      width: "80%",
      margin: "auto",
      marginBottom: "5px",
      borderRadius: "2px",
    },
  },
  naiming4: {
    background: "red",
    width: "120px",
    transform: "rotate(90deg)",
    position: "absolute",
    bottom: "8%",
    left: "-9%",
    borderRadius: "5px",
    "&>p:nth-child(1)": {
      color: "black",
      fontSize: "13px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>p:nth-child(2)": {
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
      padding: "5px 5px",
      background: "red",
      width: "80%",
      margin: "auto",
      marginBottom: "5px",
      borderRadius: "2px",
    },
  },
  naiming5: {
    background: "red",
    width: "120px",
    transform: "rotate(90deg)",
    position: "absolute",
    bottom: "34%",
    left: "5%",
    borderRadius: "5px",
    "&>p:nth-child(1)": {
      color: "black",
      fontSize: "13px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>p:nth-child(2)": {
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
      padding: "5px 5px",
      background: "red",
      width: "80%",
      margin: "auto",
      marginBottom: "5px",
      borderRadius: "2px",
    },
  },
  naiming6: {
    background:
      "linear-gradient(to right,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
    width: "120px",
    transform: "rotate(90deg)",
    position: "absolute",
    top: "7%",
    left: "7%",
    borderRadius: "5px",
    textAlign: "center",
    "&>p:nth-child(1)": {
      color: "black",
      fontSize: "13px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>p:nth-child(2)": {
      color: "white",
      fontSize: "13px",
      fontWeight: "600",
      padding: "5px 5px",
      background: "#15158f",
      width: "80%",
      margin: "auto",
      marginBottom: "5px",
      borderRadius: "2px",
    },
  },
  countdownOuter: {
    position: "absolute",
    width: "75px",
    height: "75px",
    background: "black",
    bottom: "4.5%",
    left: "15%",
    border: "2px solid white",
    borderRadius: "10px",
    outline: "10px solid black",
    boxSizing: "border-box",
  },
  winnerlooserouter: {
    padding: "2px",
    border: "2px solid #C9A553",
    position: "absolute",
    right: "-2%",
    transform: "rotate(90deg)",
    top: "28%",
    width: "120px",
    borderRadius: "5px",
  },
  winnerlooserouter2: {
    padding: "2px",
    border: "2px solid #C9A553",
    position: "absolute",
    right: "0%",
    transform: "rotate(90deg)",
    top: "8%",
    width: "100px",
    borderRadius: "5px",
  },
  winnerlooserouter3: {
    padding: "2px",
    border: "2px solid #C9A553",
    position: "absolute",
    right: "2%",
    transform: "rotate(90deg)",
    top: "48%",
    width: "70px",
    height: "50px",
    borderRadius: "5px",
    background: "black",
  },
  winnerLooserList: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    "&>p:nth-child(1)": {
      fontSize: "12px",
      fontWeight: "900",
      color: "yellow",
    },
    "&>p:nth-child(2)": {
      fontSize: "12px",
      fontWeight: "900",
      color: "#90ff90",
    },
    "&>p:nth-child(3)": { fontSize: "12px", fontWeight: "900", color: "red" },
  },
  winnerLooserList2: {
    width: "100%",
    "&>p": {
      fontSize: "12px",
      fontWeight: "600",
      color: "yellow",
      textAlign: "center",
    },
  },
  winnerLooserList3: {
    width: "100%",
    "&>p": {
      fontSize: "35px",
      fontWeight: "600",
      color: "yellow",
      textAlign: "center",
    },
  },
};
