import React, {ChangeEvent, useState} from "react";
import {Button, Autocomplete, Theme, ButtonProps, TextFieldProps, TextField} from "@mui/material";
import MultiSelect from "./MultiSelect";
import {ProcessSettings} from "../Types";
import {Block, Div, GeneralButton, MainButton} from "../styles/Styles";
import {get} from "../Requests";


interface Props {
    onCreate(process: ProcessSettings): void
}

const MyTextField = (props: TextFieldProps) => {
    return <TextField sx={{color: 'white', width: '100vh',  input: {color: 'white' },
        "& .MuiFormLabel-root": { color: "orange" }}} {...props} />
}

export function ProcessSettingsForm(props: Props) {
    const [path, setPath] = useState<string>('')
    const [names, setNames] = useState<string[]>([])
    const [extensions, setExts] = useState<string[]>([])
    const [keywords, setKeywords] = useState<string[]>([])
    const [settings, setProcess] = useState<ProcessSettings>({path: '', names: [], extensions: [], keywords: [], id: 0})

    const [visibility, setVisibility] = useState(false)
    const [blocked, setBlocked] = useState(false)

    const makeVisible = () => {
        setVisibility(true)
        setBlocked(false)
    }

    const hide = () => setVisibility(false)

    const disable = () => setBlocked(true)

    const addNewProcess = () => {

        const newProcess: ProcessSettings = {
            path: path,
            names: names,
            extensions: extensions,
            keywords: keywords,
            id: Date.now()
        }
        setProcess(newProcess)

        props.onCreate(newProcess)

        //disable()

        hide()
    }

    function handleOnClick(){
        const url = "/ProcessDirectoryTest"

        get(url)
    }

    return (
        visibility
            ?
            <Div aria-disabled={blocked}>
                <MyTextField id="outlined-textarea" label="Path to directory or file" disabled={blocked}
                             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPath(e.target.value)}/>
                <MultiSelect label="Names of files"
                             disabled={blocked}
                             values={names}
                             onChange={setNames}
                />
                <MultiSelect label="Extensions of files"
                             disabled={blocked}
                             options={[".txt"]}
                             values={extensions}
                             onChange={setExts}
                />
                <MultiSelect label="Search keywords"
                             disabled={blocked}
                             values={keywords}
                             onChange={setKeywords}
                />
                <Block>
                    <MainButton onClick={addNewProcess}>Start</MainButton>
                    <GeneralButton onClick={hide}>Close</GeneralButton>
                    <MainButton onClick={handleOnClick}>Test</MainButton>
                </Block>

            </Div>
            : <MainButton onClick={makeVisible}>Add process</MainButton>
    )
}