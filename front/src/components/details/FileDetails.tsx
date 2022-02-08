import {FileInfo} from "../../Types";
import {List, ListItem} from "@mui/material";
import {WordDetails} from "./WordDetails";
import {Block} from "../styledComponents/Block";
import {HalfBox} from "../styledComponents/HalfBox";
import {InfoLabel} from "../styledComponents/InfoLabel";
import {AutoChip} from "../styledComponents/AutoChip";

interface Props{
    file: FileInfo
}

export function FileDetails(props: Props){
    return(
        <Block>
            <HalfBox>
                <InfoLabel>File name:</InfoLabel>
                <AutoChip label={props.file.name}/>
            </HalfBox>
            <HalfBox>
                <InfoLabel>Path:</InfoLabel>
                <AutoChip label={props.file.path}/>
            </HalfBox>

            <List sx={{width: "100%"}}>
                {props.file.wordInfo.map((word, index) => {
                    return (
                        <ListItem key={index} sx={{width: "90%"}}>
                            <WordDetails word={word}/>
                        </ListItem>
                    )
                })}
            </List>
        </Block>
    )
}