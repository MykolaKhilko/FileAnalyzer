import {Chip, ChipProps} from "@mui/material";
import React from "react";

export const Chipped = (props: ChipProps) => {
    return <Chip sx={{ justifyContent:'center', marginLeft:'5%', color:'white'}} {...props}/>
}