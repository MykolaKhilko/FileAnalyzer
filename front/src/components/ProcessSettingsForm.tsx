import React, {useState} from "react";
import {FormControl, Input, InputLabel} from "@mui/material";
import MultiSelect from "./MultiSelect";

const ProcessSettingsForm = ({create}) => {
    const [settings, setSettings] = useState({path: '', names: '', extensions: '', keywords: ''})

    return(
    <FormControl>
        <InputLabel>Path to directory or file</InputLabel>
        <Input>

        </Input>
        <InputLabel>Names of files</InputLabel>
        <MultiSelect>

        </MultiSelect>
        <InputLabel>Extensions of files</InputLabel>
        <MultiSelect>

        </MultiSelect>
        <InputLabel>Search keywords</InputLabel>
        <MultiSelect>

        </MultiSelect>
    </FormControl>
    )
}