import {Box, BoxProps} from "@mui/material";
import React from "react";

export const FullBox = (props: BoxProps) => {
    return <Box sx={{width: '90%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', marginTop: '1%'}} {...props}/>
}