import {ProcessInfo, ProcessSettings} from "../Types";
import {Block, useStyles} from "../styles/Styles";
import {List, ListItem} from "@mui/material";
import {ProcessItem} from "./ProcessItem";
import {useState} from "react";

interface Props {
    processes: ProcessSettings[]

    onFinish(info: ProcessInfo): void
}

export function ActiveProcessesList(props: Props) {
    return (
        <Block>
            <List sx={{width: '100%'}}>
                {props.processes.map((item, index) => {
                    return (
                        <ListItem key={item.id} sx={{border: "3px solid rgba(249, 105, 14, 1)", marginTop: '2%', borderRadius: 5}}>
                            <ProcessItem key={item.id} process={item} onFinish={props.onFinish}/>
                        </ListItem>
                    )
                })}
            </List>
        </Block>
    );
}