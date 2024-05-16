
import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { style } from "./CommonCss";
const Second12 = ({setOpenDialogBox,bet,setBetFuncton,amount}) => {
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
        <p className="absolute top-[18%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[5%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[17%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[43%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[30%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[42%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[68%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[55%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[67%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[93%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[80%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[92%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[18%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[5%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[17%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[43%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[30%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[42%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[68%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[55%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[67%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[93%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[80%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[92%] left-[80%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[18%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[5%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[43%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[30%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[68%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[55%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[93%] left-[28%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
        <p className="absolute top-[80%] left-[82%] h-4 w-4 !rounded-full !z-50 !cursor-pointer !flex !justify-center !items-center">
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
  )
}

export default Second12
