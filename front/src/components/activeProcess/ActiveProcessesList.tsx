import {ProcessInfo, ProcessSettings} from "../../Types";
import {List, ListItem} from "@mui/material";
import {ActiveProcessItem} from "./ActiveProcessItem";
import {Block} from "../styledComponents/Block";

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
                            <ActiveProcessItem key={item.id} process={item} onFinish={props.onFinish}/>
                        </ListItem>
                    )
                })}
            </List>
        </Block>
    );
}