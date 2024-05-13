import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from 'react'
import { Navigate } from "react-router-dom";

const Rotation =()=>{

    return<>
       
      <Box className="!bg-green-500 w-[10%] fixed !text-white flex !border-2 !border-white">
     
     <Typography  className="!border-2 !border-white" onClick={() => {
             alert('You clicked me!');
           }}>36 </Typography>
          <div className=" border-2 border-purple-600" onClick={()=>{ alert('10 value!');}}/>
     <Typography  className="!border-2 !border-white" onClick={() => {
             alert('You clicked me!');
           }}>35</Typography>
         <div className=" border-2 border-purple-600" onClick={()=>{ alert('10 value!');}}/>
               <Typography  className="!border-2 !border-white" onClick={() => {
             alert('You clicked me!');
           }}>35</Typography>
    
 
            </Box>
       
           
          
         
       
    
    </>
}
export default Rotation;