import React from "react";
import {ProcessSettings} from "../../Types";
import {Block} from "../styledComponents/Block";
import {FullBox} from "../styledComponents/FullBox";
import {InfoLabel} from "../styledComponents/InfoLabel";
import {AutoChip} from "../styledComponents/AutoChip";
import {FullBoxWithChips} from "../styledComponents/FullBoxWithChips";

interface Props{
    settings: ProcessSettings
}

export function ProcessItem(props: Props){
    return(
        <Block>
            <FullBox>
                <InfoLabel>Path:</InfoLabel>
                <AutoChip label={props.settings.path}/>
            </FullBox>

            {props.settings.names.length == 0 ? <div></div> :
                <FullBox>
                    <InfoLabel>Names:</InfoLabel>
                    <FullBoxWithChips>
                        {props.settings.names.map((name) => {
                            return <AutoChip label={name}/>
                        })}
                    </FullBoxWithChips>
                </FullBox>
            }

            {props.settings.extensions.length == 0 ? <div></div> :
                <FullBox>
                    <InfoLabel>Extensions:</InfoLabel>
                    <FullBoxWithChips>
                        {props.settings.extensions.map((ext) => {
                            return <AutoChip label={ext}/>
                        })}
                    </FullBoxWithChips>
                </FullBox>
            }

            <FullBox>
                <InfoLabel>Keywords:</InfoLabel>
                <FullBoxWithChips>
                    {props.settings.keywords.map((key) => {
                        return <AutoChip label={key}/>
                    })}
                </FullBoxWithChips>
            </FullBox>
        </Block>
    )
}