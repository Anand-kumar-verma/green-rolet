import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import roulette from "../../assets/images/rolette.jpeg";
import RolletIFrame from "../../component/RolletIFrame";
import { endPoint } from "../../services";
import {
  checkTokenValidity,
  getHistory,
  getProfile,
  logOutFunction,
} from "../../services/apiCallings";
import { style } from "./CommonCss";
import First12 from "./First12";
import Second12 from "./Second12";
import Third12 from "./Third12";
import Zero from "./Zero";
import Coin from "./Coin";
import NeighbourHoodBet from "./NeighbourHoodBet";
import SvgCircle from "./SvgCircle";
import { useSocket } from "../../shared/socket/SocketContext";
import { useQuery } from "react-query";
function Home() {
  const socket = useSocket();
  const [one_min_time, setOne_min_time] = useState(0);
  const show_this_one_min_time = String(one_min_time).padStart(2, "0");
  const user_id = localStorage.getItem("user_id");
  const [open, setOpen] = useState(false);
  const [bet, setBet] = useState([]);
  const [openDialogBox, setOpenDialogBox] = useState("");
  const [amount, setAmount] = useState(10);

  const { isLoading, data } = useQuery(["profile"], () => getProfile(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  const profileData = data?.data?.data || 0;

  const { isLoading: bet_history_loding, data: bet_history } = useQuery(
    ["history_rollet"],
    () => getHistory(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const bet_history_Data = bet_history?.data?.data || 0;

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

  function removeBetFunctonAll() {
    bet?.forEach((ele) => {
      let element = document.getElementById(`${ele?.id}`);
      let span = element.querySelector("span");
      if (span) {
        element.removeChild(span);
      }
    });
    setBet([]);
  }

  async function confirmBet() {
    if (bet?.length <= 0) return toast("Plese Select Your Bet First.");
    const reqbody = {
      number: bet,
      userid: user_id,
      amount: 10,
    };
    console.log(reqbody);
    try {
      const res = await axios.post(endPoint?.bet_now, reqbody);
      toast(res?.data?.msg);
      if (res?.data?.error === "200") removeBetFunctonAll();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const handleOneMin = (onemin) => {
      setOne_min_time(onemin);
    };
    socket.on("onemin", handleOneMin);
    return () => {
      socket.off("onemin", handleOneMin);
    };
  }, []);

  useEffect(() => {
    if (!checkTokenValidity()) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/"; // Redirect to login page
    }
  }, []);

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
              {bet_history_Data?.data?.[4]?.win
                ? bet_history_Data?.data?.[4]?.win
                : "L"}
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
              {bet_history_Data?.data?.[4]?.win
                ? bet_history_Data?.data?.[3]?.win
                : "L"}
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
              {bet_history_Data?.data?.[4]?.win
                ? bet_history_Data?.data?.[3]?.win
                : "L"}
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
              {bet_history_Data?.data?.[4]?.win
                ? bet_history_Data?.data?.[1]?.win
                : "L"}
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
        <Third12
          setOpenDialogBox={setOpenDialogBox}
          bet={bet}
          setBetFuncton={setBetFuncton}
          amount={amount}
        />
        <Second12
          setOpenDialogBox={setOpenDialogBox}
          bet={bet}
          setBetFuncton={setBetFuncton}
          amount={amount}
        />
        <First12
          setOpenDialogBox={setOpenDialogBox}
          bet={bet}
          setBetFuncton={setBetFuncton}
          amount={amount}
        />
        <Zero
          setOpenDialogBox={setOpenDialogBox}
          bet={bet}
          setBetFuncton={setBetFuncton}
          amount={amount}
        />
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
        {/* <Box component="img" src={roulette} className="rotating-element"></Box> */}
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
            {isLoading ? (
              <CircularProgress className="!text-red-600" size={"small"} />
            ) : profileData?.full_name ? (
              profileData?.full_name?.substring(0, 15)
            ) : (
              "*****"
            )}
          </Typography>
        </Box>
        <Coin setAmount={setAmount} />
        <Box sx={style.naiming3}>
          <Typography variant="body1" color="initial">
            GAME HISTORY
          </Typography>
        </Box>
        <Box sx={style.naiming4} onClick={() => logOutFunction()}>
          <Typography variant="body1" color="initial"></Typography>
          <Typography variant="body1" color="initial">
            LEAVE TABLE
          </Typography>
        </Box>
        <Box sx={style.naiming5} className={"!flex "}>
          {/* <Typography variant="body1" color="initial"></Typography> */}
          <Typography
            onClick={() => confirmBet()}
            variant="body1"
            color="initial"
            className="!bg-green-300 !p-1 !rounded-lg"
          >
            BET CONFIRM
          </Typography>
          <Typography
            onClick={() => removeBetFunctonAll()}
            variant="body1"
            color="initial"
            className="!bg-red-700 !p-1 !rounded-lg"
          >
            CLEAR
          </Typography>
        </Box>
      </Box>

      <Box
        // countdown
        sx={style.countdownOuter}
        className=" !flex !justify-center !items-center"
      >
        <div className="!text-white absolute right-[-40px] !text-[10px] transform rotate-90">
          Time Left: {show_this_one_min_time}
        </div>

        {/* <Box className="wrapper">
          <Box className="pie spinner"></Box>
          <Box className="pie filler"></Box>
          <Box className="mask"></Box>
        </Box> */}
        <SvgCircle />
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
        <NeighbourHoodBet
          setOpenDialogBox={setOpenDialogBox}
          bet={bet}
          setBetFuncton={setBetFuncton}
          amount={amount}
          open={open}
          setOpen={setOpen}
        />
      </Drawer>
    </Box>
  );
}
export default Home;
