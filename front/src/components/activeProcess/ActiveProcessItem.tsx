import React, {useState} from 'react';
import {ProcessInfo, ProcessProgress, ProcessSettings} from "../../Types";
import {Box, BoxProps, Chip, ChipProps, Grid, InputLabel, LinearProgress, Typography} from "@mui/material";
import {get, post} from "../../Requests";
import useInterval from "../../hooks/useInterval";
import {getTime} from "../../utils/Utils";
import {Div} from "../styledComponents/Div";
import {Block} from "../styledComponents/Block";
import {FullBox} from "../styledComponents/FullBox";
import {InfoLabel} from "../styledComponents/InfoLabel";
import {AutoChip} from "../styledComponents/AutoChip";
import {FullBoxWithChips} from "../styledComponents/FullBoxWithChips";
import {HalfBox} from "../styledComponents/HalfBox";
import {Chipped} from "../styledComponents/Chipped";

interface Props {
    process: ProcessSettings

    onFinish(info: ProcessInfo): void
}

export function ActiveProcessItem(props: Props) {

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

    const componentWillUnmount = () => {
        setInProgress(false)
    }

    const finishProgress = () => {
        const info: ProcessInfo = {
            settings: props.process,
            progress: progress
        }

        props.onFinish(info)
    }

    return (
        <Div>
            <Block>
                <FullBox>
                    <InfoLabel>Path:</InfoLabel>
                    <AutoChip label={props.process.path}/>
                </FullBox>


                {props.process.names.length == 0 ? <div></div> :
                    <FullBox>
                        <InfoLabel>Names:</InfoLabel>
                        <FullBoxWithChips>
                            {props.process.names.map((name) => {
                                return <AutoChip label={name}/>
                            })}
                        </FullBoxWithChips>
                    </FullBox>
                }

                {props.process.extensions.length == 0 ? <div></div> :
                    <FullBox>
                        <InfoLabel>Extensions:</InfoLabel>
                        <FullBoxWithChips>
                            {props.process.extensions.map((ext) => {
                                return <AutoChip label={ext}/>
                            })}
                        </FullBoxWithChips>
                    </FullBox>
                }


                <FullBox>
                    <InfoLabel>Keywords:</InfoLabel>
                    <FullBoxWithChips>
                        {props.process.keywords.map((key) => {
                            return <AutoChip label={key}/>
                        })}
                    </FullBoxWithChips>
                </FullBox>
            </Block>

            <Block>
                <LinearProgress color="inherit" variant={"determinate"} value={progress.percentage} sx={{color: 'orange', marginY: '2%', width: "90%"}}/>
                <Typography sx={{width: "5%", marginLeft: "3%", color: "white"}}>
                    {`${Math.round(
                        progress.percentage,
                    )}%`}
                </Typography>
            </Block>

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
        </Div>
    )
}