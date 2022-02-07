import {InputLabel, InputLabelProps, Theme} from "@mui/material";
import React from "react";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input:{
            width: '120vh',
            margin: 10
        },
    }),
);

export const InfoLabel = (props: InputLabelProps) => {
    return <InputLabel sx={{display: "inline-block", color: 'white', }} {...props}/>
}