import {Button, ButtonProps} from "@mui/material";
import React from "react";

export const MainButton = (props: ButtonProps) => {
    return <Button sx={theme => ({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: 1,
        border: 0,
        borderRadius: 2,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: "white",
        height: 48,
    })} {...props}/>
}