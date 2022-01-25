import React, {ChangeEvent, useState} from "react";
import {Button, Autocomplete, Theme, ButtonProps, TextFieldProps, TextField} from "@mui/material";
import MultiSelect from "./MultiSelect";
import {Process} from "../Types";
import {Div, GeneralButton, MainButton} from "../styles/Styles";
import {createStyles, makeStyles} from "@mui/styles";


interface Props {
    onCreate(process: Process): void
}

const MyTextField = (props: TextFieldProps) => {
    return <TextField {...props} sx={{color: 'white', width: '100vh' }}/>
}

export function ProcessSettingsForm(props: Props) {
    const [path, setPath] = useState<string>('')
    const [names, setNames] = useState<string[]>([])
    const [extensions, setExts] = useState<string[]>([])
    const [keywords, setKeywords] = useState<string[]>([])
    const [settings, setProcess] = useState<Process>({path: '', names: [], extensions: [], keywords: [], id: 0})

    const [visibility, setVisibility] = useState(false)

    const makeVisible = () => setVisibility(true)
    const hide = () => setVisibility(false)

    const addNewProcess = () => {

        const newProcess: Process = {
            path: path,
            names: names,
            extensions: extensions,
            keywords: keywords,
            id: Date.now()
        }
        setProcess(newProcess)

        props.onCreate(newProcess)

        //hide()
    }

    return (
        visibility
            ?
            <Div>
                <MyTextField id="outlined-textarea" label="Path to directory or file"
                             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPath(e.target.value)}/>
                <MultiSelect label="Names of files"
                             values={names}
                             onChange={setNames}
                />
                <MultiSelect label="Extensions of files"
                             options={[".txt"]}
                             values={extensions}
                             onChange={setExts}
                />
                <MultiSelect label="Search keywords"
                             values={keywords}
                             onChange={setKeywords}
                />
                <MainButton onClick={addNewProcess}>Start</MainButton>
                <GeneralButton onClick={hide}>Close</GeneralButton>
            </Div>
            : <MainButton onClick={makeVisible}>Add process</MainButton>

    )
}