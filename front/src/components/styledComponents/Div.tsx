import React from "react";
import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        div:{
            margin: 20,
            padding: 20,
            width: '120vh',
        },
    }),
);

export const Div = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const styles = useStyles()
    return <div className={styles.div} {...props}/>
}