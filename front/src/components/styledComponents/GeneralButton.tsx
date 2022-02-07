import {Button, ButtonProps} from "@mui/material";
import React from "react";

export const GeneralButton = (props: ButtonProps) => {
    return <Button {...props} sx={{
        color: 'white',
        border: 2,
        borderRadius: 2,
        borderColor: "red"
    }}/>
}