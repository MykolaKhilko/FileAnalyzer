import React, {useState} from 'react';
import {ProcessInfo, ProcessProgress, ProcessSettings} from "../Types";
import {Box, BoxProps, Chip, ChipProps, Grid, InputLabel, LinearProgress} from "@mui/material";
import {HalfBox, Chipped, InfoLabel, Block} from "../styles/Styles";
import {get, post} from "../Requests";
import useInterval from "../hooks/useInterval";
import {getTime} from "../utils/Utils";

interface Props {
    process: ProcessSettings

    onFinish(info: ProcessInfo): void
}

export function ProcessItem(props: Props) {

    const [progress, setProgress] = useState<ProcessProgress>({
        all: 1,
        done: 0,
        percentage: 0,
        timeSpent: 0,
        foundMatches: 0,
        finished: false
    })
    const [inProgress, setInProgress] = useState(true)

    useInterval(() => {
        fetchProgress()
    }, inProgress ? 500 : null)

    const fetchProgress = async () => {
        const url = "fetch-progress"

        const data = await get(url, {id: props.process.id}) as ProcessProgress;

        if (data.finished) {
            setInProgress(false)
            finishProgress()
        }

        setProgress(data)

    }

    const finishProgress = () => {
        const info: ProcessInfo = {
            settings: props.process,
            progress: progress
        }

        props.onFinish(info)
    }

    return (
        <div>
            <LinearProgress variant={"determinate"} value={progress.percentage} sx={{color: 'orange', marginY: '2%'}}/>

            <Block>
                <LinearProgress variant={"determinate"} value={progress.percentage}/>

                <HalfBox>
                    <InfoLabel>Processed files</InfoLabel>
                    <Chipped label={progress.done}/>
                </HalfBox>

                <HalfBox>
                    <InfoLabel>All files</InfoLabel>
                    <Chipped label={progress.all}/>
                </HalfBox>

                <HalfBox>
                    <InfoLabel>Time spent</InfoLabel>
                    <Chipped label={getTime(progress.timeSpent)}/>
                </HalfBox>

                <HalfBox>
                    <InfoLabel>Found matches</InfoLabel>
                    <Chipped label={progress.foundMatches}/>
                </HalfBox>
            </Block>
        </div>
    )
}