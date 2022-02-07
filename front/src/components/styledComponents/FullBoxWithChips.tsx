import {Box, BoxProps} from "@mui/material";
import React from "react";

export const FullBoxWithChips = (props: BoxProps) => {
    return <Box sx={{ display: 'block',  justifyContent: 'center', alignItems:'center', marginLeft:'2%', }} {...props}/>
}