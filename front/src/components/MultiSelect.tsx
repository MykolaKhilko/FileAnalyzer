import {Autocomplete, AutocompleteProps, Chip, TextField} from "@mui/material";
import * as React from "react";
import {AutocompleteValue} from "@mui/base/AutocompleteUnstyled/useAutocomplete";

interface Props {
    label: string;
    disabled: boolean;
    values: string[];
    onChange: (values: string[]) => void;
    options?: string[];
}

export default function MultiSelect({onChange, label, disabled, values, options}: Props) {
    function smallIfDisabled()
    {
        if (disabled)
            return "small"
    }

    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            freeSolo
            size={smallIfDisabled()}
            value={values}
            disabled={disabled}
            onChange={(_, value) => onChange(value)}
            renderTags={(value: string[], getTagProps) => {
                    return value.map((option: string, index: number) => (
                        <Chip size={smallIfDisabled()} variant="outlined" label={option}
                              {...getTagProps({index})} sx={{color: "white"}}/>
                    ))
                }
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label={label}
                    sx={{color: "white", input: {color: 'white' }, "& .MuiFormLabel-root": { color: "orange" }}}
                />
            )}
            options={options ?? []}
            sx={{margin: 1}}
        />)
}