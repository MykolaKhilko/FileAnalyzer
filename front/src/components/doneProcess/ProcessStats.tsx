import {getTime} from "../../utils/Utils";
import React from "react";
import {ProcessProgress} from "../../Types";
import {HalfBox} from "../styledComponents/HalfBox";
import {Block} from "../styledComponents/Block";
import {InfoLabel} from "../styledComponents/InfoLabel";
import {Chipped} from "../styledComponents/Chipped";

interface Props{
    progress: ProcessProgress
}

export function ProcessStats(props: Props){
    return (
        <Block>
            <HalfBox>
                <InfoLabel>Processed files</InfoLabel>
                <Chipped label={props.progress.done}/>
            </HalfBox>

            <HalfBox>
                <InfoLabel>All files:</InfoLabel>
                <Chipped label={props.progress.all}/>
            </HalfBox>

            <HalfBox>
                <InfoLabel>Time spent:</InfoLabel>
                <Chipped label={getTime(props.progress.timeSpent)}/>
            </HalfBox>

            <HalfBox>
                <InfoLabel>Found matches:</InfoLabel>
                <Chipped label={props.progress.foundMatches}/>
            </HalfBox>


        </Block>
    )
}