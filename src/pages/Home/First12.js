import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { style } from "./CommonCss";
const First12 = ({ setOpenDialogBox, bet, setBetFuncton, amount }) => {
  return (
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
        <IconButton className="!p-0" style={{ transform: "rotate(-270deg)" }}>
          <Typography variant="body1" color="initial">
            <span
              className="whitespace-nowrap !text-[10px] !text-blue-500"
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
          <p className="absolute top-[18%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[5%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[17%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[43%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[30%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
            className="absolute top-[42%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
            className="absolute top-[68%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
          <p className="absolute top-[55%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
            className="absolute top-[67%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
          {/* <p className="absolute top-[93%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
          <p className="absolute top-[80%] left-[82%] h-4 w-4  !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          {/* <p className="absolute top-[92%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
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
          <p className="absolute top-[18%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[5%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[17%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
            className="absolute top-[43%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
          <p className="absolute top-[30%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[42%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[68%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[55%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[67%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          {/* <p className="absolute top-[93%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
          <p className="absolute top-[80%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          {/* <p className="absolute top-[92%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
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
            className="absolute top-[18%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
          <p className="absolute top-[5%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
            className="absolute top-[43%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
            className="absolute top-[30%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
          <p className="absolute top-[68%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          <p className="absolute top-[55%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
          {/* <p className="absolute top-[93%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"></p> */}
          <p
            className="absolute top-[80%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center"
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
  );
};

export default First12;
