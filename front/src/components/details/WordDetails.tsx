import {WordInfo} from "../../Types";
import {FullBox} from "../styledComponents/FullBox";
import {InfoLabel} from "../styledComponents/InfoLabel";
import {AutoChip} from "../styledComponents/AutoChip";

interface Props{
    word: WordInfo
}

export function WordDetails(props: Props){
    return(
        <FullBox>
            <InfoLabel>Word - {props.word.match}</InfoLabel>

            <InfoLabel>Line: </InfoLabel>
            <AutoChip label={props.word.line}/>

            <InfoLabel>Position: </InfoLabel>
            <AutoChip label={props.word.index}/>

            <InfoLabel>Context: </InfoLabel>
            <AutoChip label={"..." + props.word.context + "..."}/>
        </FullBox>
    )
}