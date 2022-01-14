import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import MultiSelect from "./MultiSelect";
import {Process} from "../Types";


export function ProcessSettingsForm({create}: { create: (process: Process) => void }) {
    const [settings, setProcess] = useState<Process>({path: '', names: '', extensions: '', keywords: '', id: 0})

    const addNewProcess = () => {

        const newProcess: Process = {
            ...settings,
            id: Date.now()
        }
        create(newProcess)
        setProcess(newProcess)
    }

    return (
        <>
            <TextField id="outlined-textarea" label="Path to directory or file">{settings.path}</TextField>
            <MultiSelect label="Names of files" opts={[]} onChange={(item: readonly string[]) => console.log(item)}/>
            <MultiSelect label="Extensions of files" opts={[".txt"]}
                         onChange={(item: readonly string[]) => console.log(item)}/>
            <MultiSelect label="Search keywords" opts={[]} onChange={(item: readonly string[]) => console.log(item)}/>
            <Button variant="contained" onClick={addNewProcess}>START</Button>
        </>
    )
}