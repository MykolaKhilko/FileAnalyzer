import React from 'react';
import {ProcessInfo, ProcessSettings} from "../Types";
import {Box, List, ListItem} from "@mui/material";
import {ProcessItem} from "./ProcessItem";
import {
    Block,
    Chipped,
    InfoLabel,
    HalfBox,
    FullBox,
    AutoChip,
    MainButton,
    GeneralButton,
    FullBoxWithChips
} from "../styles/Styles";
import {getTime} from "../utils/Utils";

interface Props {
    processes: ProcessInfo[]
    onProcessDeleted(id: number): void
    onProcessDetails(id: number): void
}

export function ProcessList(props: Props) {

    function onDelete (id: number) {
      props.onProcessDeleted(id)
    }

    const onDetails = (id: number) => {
        props.onProcessDetails(id)
    }
//4mm ridge rgba(170, 50, 220, .6)
    //, flexDirection: "column"    rgba(249, 105, 14, 1)
    return (
        <Block>
            <List sx={{width: '100%'}}>
                {props.processes.slice(0).reverse().map((item, index) => {
                    return (
                        <ListItem key={item.settings.id}
                                  sx={{border: "3px solid rgba(249, 105, 14, 1)", marginTop: '2%', borderRadius: 5}}>
                            <Block>
                                <FullBox>
                                    <InfoLabel>Path:</InfoLabel>
                                    <AutoChip label={item.settings.path}/>
                                </FullBox>

                                {item.settings.names.length == 0 ? <div></div> :
                                    <FullBox>
                                        <InfoLabel>Names:</InfoLabel>
                                        <FullBoxWithChips>
                                            {item.settings.names.map((name) => {
                                                return <AutoChip label={name}/>
                                            })}
                                        </FullBoxWithChips>
                                    </FullBox>
                                }

                                {item.settings.extensions.length == 0 ? <div></div> :
                                    <FullBox>
                                        <InfoLabel>Extensions:</InfoLabel>
                                        <FullBoxWithChips>
                                            {item.settings.extensions.map((ext) => {
                                                return <AutoChip label={ext}/>
                                            })}
                                        </FullBoxWithChips>
                                    </FullBox>
                                }

                                <FullBox>
                                    <InfoLabel>Keywords:</InfoLabel>
                                    <FullBoxWithChips>
                                        {item.settings.keywords.map((key) => {
                                            return <AutoChip label={key}/>
                                        })}
                                    </FullBoxWithChips>
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
                                    <InfoLabel>Time spent:</InfoLabel>
                                    <Chipped label={getTime(item.progress.timeSpent)}/>
                                </HalfBox>

                                <HalfBox>
                                    <InfoLabel>Found matches:</InfoLabel>
                                    <Chipped label={item.progress.foundMatches}/>
                                </HalfBox>

                                <HalfBox>
                                    <MainButton onClick={() => onDelete(item.settings.id)}>Details</MainButton>
                                </HalfBox>
                                <HalfBox>
                                    <GeneralButton onClick={() => onDetails(item.settings.id)}>Delete</GeneralButton>
                                </HalfBox>
                            </Block>
                        </ListItem>
                    )
                })}
            </List>
        </Block>


        // <List>
        //     {props.processes.map((item, index) => {
        //         return <ProcessItem key={index} process={item}/>
        //     })}
        // </List>

    // {/*<FullBox>*/}
    // {/*    <InfoLabel>Names:</InfoLabel>*/}
    // {/*    {item.settings.extensions.length == 0 ? <div></div> :*/}
    // {/*        item.settings.names.map((name) => {*/}
    // {/*            return <AutoChip label={name ?? "none"}/>*/}
    // {/*        })*/}
    // {/*    }*/}
    //
    // {/*</FullBox>*/}
    //
    // {/*<FullBox>*/}
    // {/*    <InfoLabel>Extensions:</InfoLabel>*/}
    // {/*    {item.settings.extensions.length == 0 ? <AutoChip label={"-"}/> :*/}
    // {/*        item.settings.extensions.map((ext) => {*/}
    // {/*            return <AutoChip label={ext ?? "none"}/>*/}
    // {/*        })*/}
    // {/*    }*/}
    //
    // {/*</FullBox>*/}
    );
}

