import {Box, BoxProps} from "@mui/material";
import React from "react";

export const Block = (props: BoxProps) => {
    return <Box sx={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', alignItems: 'center'}} {...props}/>
}