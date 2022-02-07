import {Box, BoxProps, Button, ButtonProps, Chip, ChipProps, InputLabel, InputLabelProps, Theme} from "@mui/material";
import React from "react";
import {createStyles, makeStyles} from "@mui/styles";


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            display: "flex",
            justifyContent: 'center',
            //           background: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);',
            height: '100%',
            width: '100%',
            margin: 0
        },
    }),
);





















