import React from 'react';
import {Process} from "../Types";
import {List} from "@mui/material";
import {ProcessItem} from "./ProcessItem";

interface Props {
    processes: Process[]
}

export function ProcessList(props: Props) {
    return (
        <List>
            {props.processes.map((item, index) => {
                return <ProcessItem key={index} process={item}/>
            })}
        </List>
    );
}

