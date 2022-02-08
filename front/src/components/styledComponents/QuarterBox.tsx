import {Box, BoxProps} from "@mui/material";
import React from "react";

export const QuarterBox = (props: BoxProps) => {
    return <Box sx={{width: '18%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center'}} {...props}/>
}