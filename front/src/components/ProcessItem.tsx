import React, {useState} from 'react';
import {ProcessProgress, ProcessSettings} from "../Types";
import {Box, BoxProps, Chip, ChipProps, Grid, InputLabel, LinearProgress} from "@mui/material";
import {Div} from "../styles/Styles";
import {get, post} from "../Requests";
import useInterval from "../hooks/useInterval";

interface Props {
    process: ProcessSettings
    onFinish(): void
}

export function ProcessItem(props: Props) {

    const [progress, setProgress] = useState<ProcessProgress>({all: 1, done: 0, percentage: 0, timeSpent: 0, foundMatches: 0, finished: false})

    const [inProgress, setInProgress] = useState(true)

    useInterval(() => {fetchProgress()}, inProgress ? 500 : null)

    const fetchProgress = async () => {
        const url = "fetch-progress"

        const data = await get(url, {id: props.process.id}) as ProcessProgress;

        if (data.finished){
            setInProgress(false)
        }

        setProgress(data)
    }

    const MyBox = (props: BoxProps) => {
        return <Box sx={{width: '45%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', marginTop: '2%'}} {...props}/>
    }

    const Chipped = (props: ChipProps) => {
        return <Chip sx={{width: '25%', justifyContent:'center', marginLeft:'5%', color:'white'}} {...props}/>
    }

    const getTime = (time: number) =>{
        const seconds = time % 60
        const minutes = (time - seconds) / 60
        return minutes + ":" + seconds
    }

    return (
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent:'center', alignItems:'center'}}>

                <LinearProgress variant={"determinate"} value={progress.percentage}/>

                <MyBox >
                    <InputLabel sx={{color:'white'}}>Processed files</InputLabel>
                    <Chipped label={progress?.done}/>
                </MyBox>

                <MyBox>
                    <InputLabel sx={{color:'white'}}>All files</InputLabel>
                    <Chipped label={progress?.all}/>
                </MyBox>

                <MyBox>
                    <InputLabel sx={{color:'white'}}>Time spent</InputLabel>
                    <Chipped label={getTime(progress?.timeSpent)}/>
                </MyBox>

                <MyBox >
                    <InputLabel sx={{color:'white'}}>Found matches</InputLabel>
                    <Chipped label={progress?.foundMatches}/>
                </MyBox>
            </Box>

            <LinearProgress variant={"determinate"} value={progress.percentage} sx={{color: 'orange', marginY: '2%'}}/>
        </div>
    );

}
;

