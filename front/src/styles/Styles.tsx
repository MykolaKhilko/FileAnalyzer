import {Button, ButtonProps, Theme} from "@mui/material";
import React from "react";
import {createStyles, makeStyles} from "@mui/styles";


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainButton: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            margin: 5,
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            flex: 'flex'
        },
        root:{
            background: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);',
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        input:{
            width: '100vh',
            margin: 10
        },
        div:{
            margin: 20,
            padding: 20,
        },
        generalButton: {
            color: 'white',
            border: 2,
            margin: 5,
            align: 'right'
        },
    }),
);

export const MainButton = (props: ButtonProps) => {
    const styles = useStyles()
    return <Button className={styles.mainButton} {...props}/>
}

export const GeneralButton = (props: ButtonProps) => {
    const styles = useStyles()
    return <Button className={styles.generalButton} {...props}/>
}

export const Div = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const styles = useStyles()
    return <div className={styles.div} {...props}/>
}


