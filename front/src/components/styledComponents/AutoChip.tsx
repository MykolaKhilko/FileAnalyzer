import {Chip, ChipProps} from "@mui/material";
import React from "react";

export const AutoChip = (props: ChipProps) => {
    return <Chip sx={{justifyContent:'center', marginLeft:'2%', color:'white', marginTop: '1%'}} {...props}/>
}