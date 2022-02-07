import React, {useState} from 'react';
import {FileInfo, ProcessInfo, ProcessSettings} from "../../Types";
import {List, ListItem} from "@mui/material";
import {getTime} from "../../utils/Utils";
import {ProcessItem} from "./ProcessItem";
import {ProcessStats} from "./ProcessStats";
import {Block} from "../styledComponents/Block";
import {HalfBox} from "../styledComponents/HalfBox";
import {MainButton} from "../styledComponents/MainButton";
import {GeneralButton} from "../styledComponents/GeneralButton";
import {get} from "../../Requests";
import {ProcessDetails} from "../details/ProcessDetails";

interface Props {
    processes: ProcessInfo[]
    onProcessDeleted(id: number): void
}

export function ProcessList(props: Props) {
    const [result, setResult] = useState<FileInfo[]>([])

    function onDelete (id: number) {
      props.onProcessDeleted(id)
    }

    const onDetails = async (id: number) => {
        const url = "get-process-details"

        const data = await get(url, {id: id}) as FileInfo[];

        setResult(data)
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
                            <ProcessItem settings={item.settings}/>

                            <Block>
                                <ProcessStats progress={item.progress}/>

                                <HalfBox>
                                    <MainButton onClick={() => onDetails(item.settings.id)}>Details</MainButton>
                                </HalfBox>
                                <HalfBox>
                                    <GeneralButton onClick={() => onDelete(item.settings.id)}>Delete</GeneralButton>
                                </HalfBox>
                            </Block>
                        </ListItem>
                    )
                })}
            </List>

            {result ?? <ProcessDetails info={result}/>}
        </Block>


        // <List>
        //     {props.processes.map((item, index) => {
        //         return <ActiveProcessItem key={index} process={item}/>
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

