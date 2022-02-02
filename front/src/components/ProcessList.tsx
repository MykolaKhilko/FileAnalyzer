import React from 'react';
import {ProcessInfo, ProcessSettings} from "../Types";
import {Box, List, ListItem} from "@mui/material";
import {ProcessItem} from "./ProcessItem";
import {Block, Chipped, InfoLabel, HalfBox, FullBox, AutoChip} from "../styles/Styles";
import {getTime} from "../utils/Utils";

interface Props {
    processes: ProcessInfo[]
}

export function ProcessList(props: Props) {

    return (
        <List sx={{width: '100%'}}>
            {props.processes.map((item, index) => {
                return (
                    <ListItem>
                        <Block>
                            <FullBox>
                                <InfoLabel>Path:</InfoLabel>
                                <AutoChip label={item.settings.path}/>
                            </FullBox>

                            <FullBox>
                                <InfoLabel>Names:</InfoLabel>
                                {item.settings.names.map((name) => {
                                    return <AutoChip label={name}/>
                                })}
                            </FullBox>

                            <FullBox>
                                <InfoLabel>Extensions:</InfoLabel>
                                {item.settings.extensions.map((ext) => {
                                    return <AutoChip label={ext}/>
                                })}
                            </FullBox>

                            <FullBox>
                                <InfoLabel>Keywords:</InfoLabel>
                                {item.settings.keywords.map((key) => {
                                    return <AutoChip label={key}/>
                                })}
                            </FullBox>
                        </Block>

                        <Block>
                            <HalfBox>
                                <InfoLabel>Processed files</InfoLabel>
                                <Chipped label={item.progress.done}/>
                            </HalfBox>

                            <HalfBox>
                                <InfoLabel>All files:</InfoLabel>
                                <Chipped label={item.progress.all}/>
                            </HalfBox>

                            <HalfBox>
                                <InfoLabel>Time spent:</InfoLabel>s
                                <Chipped label={getTime(item.progress.timeSpent)}/>
                            </HalfBox>

                            <HalfBox>
                                <InfoLabel>Found matches:</InfoLabel>
                                <Chipped label={item.progress.foundMatches}/>
                            </HalfBox>
                        </Block>
                    </ListItem>
                )
            })}
        </List>

        // <List>
        //     {props.processes.map((item, index) => {
        //         return <ProcessItem key={index} process={item}/>
        //     })}
        // </List>
    );
}

