import {Box, BoxProps} from "@mui/material";
import React from "react";

export const HalfBox = (props: BoxProps) => {
    return <Box sx={{width: '45%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', marginTop: '2%'}} {...props}/>
}