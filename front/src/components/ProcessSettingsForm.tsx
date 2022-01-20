import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import MultiSelect from "./MultiSelect";
import {Process} from "../Types";
import {Div, GeneralButton, MainButton, useStyles} from "../styles/Styles";


interface Props {
    onCreate(process: Process): void
}

export function ProcessSettingsForm(props: Props) {
    const [settings, setProcess] = useState<Process>({path: '', names: '', extensions: '', keywords: '', id: 0})
    const [visibility, setVisibility] = useState(false)

    const makeVisible = () => setVisibility(true)

    const hide = () => setVisibility(false)

    const addNewProcess = () => {

        const newProcess: Process = {
            ...settings,
            id: Date.now()
        }
        setProcess(newProcess)
        props.onCreate(newProcess)
    }


    const classes = useStyles();

    return (
        visibility
            ?
            <Div>
                <TextField className={classes.input} id="outlined-textarea" label="Path to directory or file">{settings.path}</TextField>
                <MultiSelect className={classes.input} label="Names of files" options={[]} onChange={(item: readonly string[]) => console.log(item)}/>
                <MultiSelect className={classes.input} label="Extensions of files" options={[".txt"]}
                             onChange={(item: readonly string[]) => console.log(item)}/>
                <MultiSelect className={classes.input} label="Search keywords" options={[]} onChange={(item: readonly string[]) => console.log(item)}/>
                <MainButton onClick={addNewProcess}>Start</MainButton>
                <GeneralButton onClick={hide}>Close</GeneralButton>
            </Div>
            : <MainButton onClick={makeVisible}>Add process</MainButton>

    )
}