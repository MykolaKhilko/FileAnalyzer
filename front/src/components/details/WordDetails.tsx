import {WordInfo} from "../../Types";
import {FullBox} from "../styledComponents/FullBox";
import {InfoLabel} from "../styledComponents/InfoLabel";
import {AutoChip} from "../styledComponents/AutoChip";
import {QuarterBox} from "../styledComponents/QuarterBox";
import {HalfBox} from "../styledComponents/HalfBox";
import {FullBoxWithChips} from "../styledComponents/FullBoxWithChips";
import {Chipped} from "../styledComponents/Chipped";
import {Block} from "../styledComponents/Block";

interface Props{
    word: WordInfo
}

export function WordDetails(props: Props){
    return(
        <Block>
            <QuarterBox>
                <InfoLabel>Word - {props.word.match}</InfoLabel>
            </QuarterBox>

            <QuarterBox>
                <InfoLabel>Line: </InfoLabel>
                <Chipped label={props.word.line}/>
            </QuarterBox>

            <QuarterBox>
                <InfoLabel>Position: </InfoLabel>
                <Chipped label={props.word.index}/>
            </QuarterBox>

            <HalfBox>
                <InfoLabel>Context: </InfoLabel>
                <Chipped label={"..." + props.word.context + "..."}/>
            </HalfBox>

        </Block>
    )
}