import React from 'react';
import {ProcessSettings} from "../Types";
import {List} from "@mui/material";
import {ProcessItem} from "./ProcessItem";

interface Props {
    processes: ProcessSettings[]
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

