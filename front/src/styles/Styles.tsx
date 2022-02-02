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
        input:{
            width: '100vh',
            margin: 10
        },
        div:{
            margin: 20,
            padding: 20,
        },
    }),
);

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

export const GeneralButton = (props: ButtonProps) => {
    return <Button {...props} sx={{color: 'white'}}/>
}

export const Div = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const styles = useStyles()
    return <div className={styles.div} {...props}/>
}

export const HalfBox = (props: BoxProps) => {
    return <Box sx={{width: '45%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', marginTop: '2%'}} {...props}/>
}

export const FullBox = (props: BoxProps) => {
    return <Box sx={{width: '90%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', marginTop: '2%'}} {...props}/>
}

export const Chipped = (props: ChipProps) => {
    return <Chip sx={{width: '25%', justifyContent:'center', marginLeft:'5%', color:'white'}} {...props}/>
}

export const AutoChip = (props: ChipProps) => {
    return <Chip sx={{justifyContent:'center', marginLeft:'5%', color:'white'}} {...props}/>
}

export const InfoLabel = (props: InputLabelProps) => {
    return <InputLabel sx={{color: 'white'}} {...props}/>
}

export const Block = (props: BoxProps) => {
    return <Box sx={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', alignItems: 'center'}}/>
}


